import type { Handler } from "@netlify/functions"

interface LangflowResponse {
  outputs?: Array<{
    outputs?: Array<{
      results?: { message?: { text?: string } }
      outputs?: { message?: { message?: string } }
      messages?: Array<{ message?: string }>
    }>
  }>
  session_id?: string
}

interface LangflowResult {
  response: string
  sessionId: string
}

const extractResponseText = (data: LangflowResponse): string => {
  if (!data) {
    throw new Error("API'den veri alınamadı")
  }

  const responseText =
    data?.outputs?.[0]?.outputs?.[0]?.results?.message?.text ??
    data?.outputs?.[0]?.outputs?.[0]?.outputs?.message?.message ??
    data?.outputs?.[0]?.outputs?.[0]?.messages?.[0]?.message

  if (!responseText) {
    throw new Error("API'den beklenmeyen yanıt formatı")
  }

  return responseText
}

const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`
}

export const handler: Handler = async (event, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  }

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    }
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    }
  }

  try {
    if (!event.body) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Request body is required" }),
      }
    }

    const { message, sessionId } = JSON.parse(event.body)

    if (!message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Message is required" }),
      }
    }

    const flowId = process.env.VITE_FLOW_ID
    const langflowBaseUrl = process.env.VITE_LANGFLOW_BASE_URL
    const apiKey = process.env.VITE_LANGFLOW_API_KEY
    const hfToken = process.env.VITE_HF_TOKEN

    if (!flowId || !langflowBaseUrl || !apiKey || !hfToken) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: "Sunucu yapılandırması eksik",
        }),
      }
    }

    const url = `${langflowBaseUrl}/api/v1/run/${flowId}`
    const currentSessionId = sessionId || generateSessionId()

    const requestBody = {
      input_value: message,
      output_type: "chat",
      input_type: "chat",
      session_id: currentSessionId,
      tweaks: null,
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        Authorization: `Bearer ${hfToken}`,
      },
      body: JSON.stringify(requestBody),
    })

    if (!response.ok) {
      const errorText = await response.text()
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({
          error: `Langflow API hatası: ${response.status}`,
          details: errorText,
        }),
      }
    }

    let data: LangflowResponse
    try {
      const responseText = await response.text()
      data = JSON.parse(responseText)
    } catch (parseError) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: "API yanıtı ayrıştırılamadı",
        }),
      }
    }

    const responseText = extractResponseText(data)

    const result: LangflowResult = {
      response: responseText,
      sessionId: data.session_id || currentSessionId,
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(result),
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "Sunucu hatası",
        details: error instanceof Error ? error.message : "Bilinmeyen hata",
      }),
    }
  }
}
