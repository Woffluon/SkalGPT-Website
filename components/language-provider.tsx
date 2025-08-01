"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "tr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  tr: {
    // Navigation
    home: "Ana Sayfa",
    about: "Hakkında",
    features: "Özellikler",
    faq: "SSS",

    // Common
    comingSoon: "Yakında",
    learnMore: "Daha Fazla Bilgi",
    exploreFeatures: "Özellikleri Keşfet",

    // Home page
    heroTitle: "SkalGPT",
    heroSubtitle: "Yapay Zeka Asistanınız",
    heroDescription:
      "Sezai Karakoç Anadolu Lisesi öğrencileri, öğretmenleri ve personeli için özel olarak geliştirilmiş, çok yönlü bir yapay zeka asistanı. Bilgiye erişimi kolaylaştıran, akademik süreçlerde destek olan ve çeşitli konularda yardımcı bir rehber.",
    whySkalGPT: "Neden SkalGPT?",
    whySkalGPTDesc: "Sezai Karakoç Anadolu Lisesi'ne özel, çok yönlü ve güvenilir yapay zeka asistanı",
    forStudents: "Öğrenciler İçin",
    forStudentsDesc:
      "Ders konularını anlama, ödev yardımı, sınav hazırlığı ve kişisel gelişim desteği. 7/24 erişilebilir öğrenme partneri.",
    forTeachers: "Öğretmenler İçin",
    forTeachersDesc:
      "Ders planı hazırlama, materyal geliştirme, öğrenci değerlendirme ve eğitim teknolojileri konularında profesyonel destek.",
    forAdmin: "İdare İçin",
    forAdminDesc:
      "Duyuru yönetimi, bilgi paylaşımı, okul politikaları hakkında rehberlik ve yönetimsel süreçlerde destek.",
    reliableOfficial: "Güvenilir ve Resmi",
    schoolApproved: "Okul Onaylı",
    schoolApprovedDesc:
      "Sezai Karakoç Anadolu Lisesi tarafından resmi olarak geliştirilmiş ve onaylanmış yapay zeka asistanı.",
    educationFocused: "Çok Yönlü Asistan",
    educationFocusedDesc:
      "Eğitim desteğinin yanı sıra yaratıcı yazım, özetleme, analiz ve problem çözme gibi birçok alanda hizmet sunar.",
    continuousDevelopment: "Sürekli Gelişim",
    continuousDevelopmentDesc:
      "Okul ihtiyaçlarına göre sürekli güncellenen ve geliştirilen akıllı asistan teknolojisi.",
    improveEducation: "SkalGPT ile Deneyiminizi Geliştirin",
    improveEducationDesc:
      "Yapay zeka destekli asistan ile sorularınıza anında yanıt alın, yaratıcı süreçlerinizde destek alın ve akademik başarınızı artırın.",
    schoolQuote:
      "Teknoloji, öğrenmeyi ve gelişimi destekleyen bir araç olmalıdır. SkalGPT, bu anlayışla okulumuzun hizmetinde.",

    // About page
    aboutSkalGPT: "SkalGPT Kimdir?",
    aboutDesc:
      "Sezai Karakoç Anadolu Lisesi için özel olarak geliştirilmiş, çok yönlü yapay zeka asistanı. Öğrenciler, öğretmenler ve idare için güvenilir bir dijital partner.",
    ourMission: "Misyonumuz",
    missionDesc:
      "Sezai Karakoç Anadolu Lisesi ailesinin her üyesine akademik süreçlerde destek olmak, bilgiye erişimi kolaylaştırmak ve çeşitli konularda yardımcı olmak için güvenilir, etik ve etkili yapay zeka teknolojisi sunmak.",
    ourVision: "Vizyonumuz",
    visionDesc:
      "Yapay zeka teknolojisinin öncüsü olmak, öğrencilerimizin 21. yüzyıl becerilerini geliştirmelerine katkıda bulunmak ve dijital çağın gereksinimlerine uygun deneyimler yaratmak.",
    coreValues: "Temel Değerlerimiz",
    coreValuesDesc: "SkalGPT'nin geliştirilmesinde ve kullanımında rehber olan ilkelerimiz",
    reliability: "Güvenilirlik",
    reliabilityDesc: "Doğru, güncel ve güvenilir bilgi paylaşımı. Okul değerleriyle uyumlu içerik üretimi.",
    inclusivity: "Kapsayıcılık",
    inclusivityDesc: "Her öğrenci, öğretmen ve idari personelin ihtiyaçlarına uygun destek sağlama.",
    ethics: "Etik",
    ethicsDesc: "Gizlilik, saygı ve etik değerlere bağlı kalarak hizmet sunma.",
    schoolConnection: "Sezai Karakoç Anadolu Lisesi ile Bağımız",
    schoolConnectionDesc1:
      "SkalGPT, Sezai Karakoç Anadolu Lisesi'nin vizyonunu desteklemek ve okul topluluğunun dijital dönüşüm sürecine katkıda bulunmak amacıyla geliştirilmiştir.",
    schoolConnectionDesc2:
      "Okulumuzun değerlerini, kurallarını ve felsefesini benimseyen SkalGPT, öğrencilerimizin akademik başarısını artırmak, öğretmenlerimizin işini kolaylaştırmak ve idari süreçleri desteklemek için tasarlanmıştır.",
    betaNotice: "Geliştirme Süreci Hakkında",
    betaNoticeDesc:
      "SkalGPT sürekli geliştirilmekte ve iyileştirilmektedir. Yeni özellikler ekleme sürecindeyiz. Geri bildirimleriniz bizim için çok değerlidir.",

    // Features page
    skalGPTCapabilities: "SkalGPT'nin Yetkinlikleri",
    capabilitiesDesc: "Öğrenciler ve öğretmenler için özel olarak tasarlanmış kapsamlı özellikler",
    students: "Öğrenciler",
    teachers: "Öğretmenler",
    studentsFeatures: "Öğrenciler İçin Özellikler",
    studentsFeaturesDesc: "Akademik başarınızı artıracak kapsamlı destek sistemi",
    teachersFeatures: "Öğretmenler İçin Özellikler",
    teachersFeaturesDesc: "Eğitim sürecinizi destekleyecek profesyonel araçlar",
    topicExplanation: "Konu Anlatımı",
    topicExplanationDesc: "Tüm derslerde detaylı konu anlatımları, örnekler ve açıklamalar",
    problemSolving: "Problem Çözme",
    problemSolvingDesc: "Adım adım problem çözümleri ve farklı çözüm yöntemleri",
    homeworkHelp: "Ödev Yardımı",
    homeworkHelpDesc: "Ödev konularında rehberlik ve araştırma desteği",
    examPrep: "Sınav Hazırlığı",
    examPrepDesc: "Sınav stratejileri, özet notlar ve test soruları",
    schoolInfo: "Okul Bilgileri",
    schoolInfoDesc: "Okul kuralları, etkinlikler ve duyurular hakkında bilgi",
    access247: "7/24 Erişim",
    access247Desc: "İstediğiniz zaman sorularınızı sorabileceğiniz sürekli destek",
    lessonPlan: "Ders Planı",
    lessonPlanDesc: "Detaylı ders planları hazırlama ve müfredat desteği",
    materialDevelopment: "Materyal Geliştirme",
    materialDevelopmentDesc: "Eğitim materyalleri, çalışma kağıtları ve sunum hazırlama",
    evaluation: "Değerlendirme",
    evaluationDesc: "Sınav soruları hazırlama ve öğrenci değerlendirme kriterleri",
    classManagement: "Sınıf Yönetimi",
    classManagementDesc: "Sınıf içi etkinlikler ve öğrenci motivasyonu stratejileri",
    pedagogicalSupport: "Pedagojik Destek",
    pedagogicalSupportDesc: "Öğretim yöntemleri ve eğitim teknolojileri konularında rehberlik",
    professionalDevelopment: "Profesyonel Gelişim",
    professionalDevelopmentDesc: "Mesleki gelişim önerileri ve güncel eğitim trendleri",
    keyFeatures: "Temel Özellikler",
    keyFeaturesDesc: "SkalGPT'yi özel kılan temel özellikler",
    secureReliable: "Güvenli ve Güvenilir",
    secureReliableDesc: "Okul değerleriyle uyumlu, güvenli ve doğru bilgi paylaşımı",
    fastEffective: "Hızlı ve Etkili",
    fastEffectiveDesc: "Anında yanıt alma ve etkili çözümler için optimize edilmiş sistem",
    personalized: "Kişiselleştirilmiş",
    personalizedDesc: "Her kullanıcının ihtiyaçlarına özel yaklaşım ve destek",

    // New capabilities
    creativeWriting: "Yaratıcı Yazım",
    creativeWritingDesc: "Hikaye, şiir, senaryo ve deneme gibi yaratıcı metinler oluşturma desteği",
    summarization: "Özetleme ve Analiz",
    summarizationDesc: "Uzun metinleri özetleme ve karmaşık verileri analiz etme",
    languageSupport: "Dil Becerileri",
    languageSupportDesc: "Çeviri yapma, dilbilgisi düzeltmeleri ve farklı dillerde iletişim",
    ideaGeneration: "Fikir Geliştirme",
    ideaGenerationDesc: "Çeşitli konularda yeni bakış açıları ve beyin fırtınası desteği",

    // FAQ page
    frequentlyAsked: "Merak Ettikleriniz",
    faqDesc: "SkalGPT hakkında en çok sorulan sorular ve detaylı yanıtları",
    helpCategories: "Yardım Kategorileri",
    helpCategoriesDesc: "İhtiyacınıza göre doğru yardımı bulun",
    generalUsage: "Genel Kullanım",
    generalUsageDesc: "SkalGPT'nin temel kullanımı ve genel özellikler",
    security: "Güvenlik",
    securityDesc: "Gizlilik, güvenlik ve veri koruma konuları",
    educationSupport: "Akademik Destek",
    educationSupportDesc: "Ders konuları, ödevler ve sınav hazırlığı",
    technicalSupport: "Teknik Destek",
    technicalSupportDesc: "Teknik sorunlar ve sistem kullanımı",
    questionNotHere: "Sorunuz Burada Yok mu?",
    questionNotHereDesc:
      "Aradığınız cevabı bulamadıysanız, bizimle iletişime geçmekten çekinmeyin. Size yardımcı olmaktan memnuniyet duyarız.",

    // Updated FAQ Questions and Answers (removed 2 questions, updated 1)
    faqQuestion1: "SkalGPT nedir ve nasıl çalışır?",
    faqAnswer1:
      "SkalGPT, Sezai Karakoç Anadolu Lisesi için özel olarak geliştirilmiş çok yönlü bir yapay zeka asistanıdır. Öğrenciler, öğretmenler ve idare personeli için akademik destek, yaratıcı yazım, özetleme, analiz ve problem çözme gibi birçok alanda hizmet sunar. Doğal dil işleme teknolojisi kullanarak sorularınızı anlayıp, okul değerleriyle uyumlu yanıtlar verir.",

    faqQuestion2: "SkalGPT'ye nasıl erişebilirim?",
    faqAnswer2:
      "SkalGPT şu anda aktif olarak geliştirilmekte olup, yakın zamanda Sezai Karakoç Anadolu Lisesi öğrencileri, öğretmenleri ve personelinin kullanımına açılacaktır. Erişim detayları ve kullanım bilgileri hazır olduğunda okul idaresi tarafından duyurulacaktır. Güncellemeler için bu web sitesini takip edebilirsiniz.",

    faqQuestion3: "SkalGPT güvenli mi? Verilerim korunuyor mu?",
    faqAnswer3:
      "Evet, SkalGPT tamamen güvenlidir. Tüm konuşmalarınız şifrelenir ve kişisel verileriniz korunur. Okul politikalarına uygun olarak tasarlanmış olup, gizlilik ve güvenlik en üst düzeyde sağlanır. Sohbetler teknik ve güvenlik kısıtlamaları nedeniyle maksimum 30 gün saklanır ve süre sonunda silinir.",

    faqQuestion4: "Hangi konularda yardım alabilirim?",
    faqAnswer4:
      "SkalGPT tüm ders konularında yardım sağlamanın yanı sıra, yaratıcı yazım, özetleme, analiz, problem çözme, dil becerileri ve fikir geliştirme gibi birçok alanda destek sunar. Ayrıca okul kuralları, etkinlikler ve genel bilgiler konusunda da yardımcı olabilir.",

    faqQuestion5: "SkalGPT 7/24 kullanılabilir mi?",
    faqAnswer5:
      "Evet, SkalGPT günün her saati kullanılabilir. İstediğiniz zaman sorularınızı sorabilir ve anında yanıt alabilirsiniz. Bu özellik özellikle sınav dönemlerinde ve ödev hazırlığında çok faydalıdır.",

    faqQuestion6: "Öğretmenler SkalGPT'yi nasıl kullanabilir?",
    faqAnswer6:
      "Öğretmenler SkalGPT'yi ders planı hazırlama, eğitim materyali geliştirme, sınav soruları oluşturma ve pedagojik konularda destek almak için kullanabilir. Ayrıca öğrenci değerlendirme kriterleri ve sınıf yönetimi stratejileri konularında da yardım alabilirler.",

    faqQuestion7: "SkalGPT yanlış bilgi verebilir mi?",
    faqAnswer7:
      "SkalGPT sürekli güncellenen ve okul müfredatıyla uyumlu bilgi kaynakları kullanır. Ancak her teknoloji gibi %100 hatasız değildir. Veri tabanı ve kaynak kısıtlamaları nedeniyle zaman zaman hatalı yanıtlar verebilir. Önemli konularda aldığınız bilgileri doğrulamanızı ve öğretmenlerinizle kontrol etmenizi öneririz.",

    faqQuestion8: "SkalGPT'de teknik sorun yaşarsam ne yapmalıyım?",
    faqAnswer8:
      "Teknik sorun yaşadığınızda önce sayfayı yenilemeyi deneyin. Sorun devam ederse durumu detaylı şekilde skalgpt.official@gmail.com adresine e-posta ile iletebilirsiniz. Sorunlarınız en kısa sürede çözülecektir.",

    // Footer
    schoolName: "Sezai Karakoç Anadolu Lisesi",
    quickLinks: "Hızlı Bağlantılar",
    schoolInfo: "Okul Bilgileri",
    copyright: "© 2024 SkalGPT - Sezai Karakoç Anadolu Lisesi. Tüm hakları saklıdır.",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About",
    features: "Features",
    faq: "FAQ",

    // Common
    comingSoon: "Coming Soon",
    learnMore: "Learn More",
    exploreFeatures: "Explore Features",

    // Home page
    heroTitle: "SkalGPT",
    heroSubtitle: "Your AI Assistant",
    heroDescription:
      "A versatile artificial intelligence assistant specially developed for students, teachers and staff of Sezai Karakoç Anadolu Lisesi. A helpful guide that facilitates access to information, supports academic processes, and assists in various topics.",
    whySkalGPT: "Why SkalGPT?",
    whySkalGPTDesc:
      "A versatile and reliable artificial intelligence assistant exclusive to Sezai Karakoç Anadolu Lisesi",
    forStudents: "For Students",
    forStudentsDesc:
      "Understanding course topics, homework help, exam preparation and personal development support. 24/7 accessible learning partner.",
    forTeachers: "For Teachers",
    forTeachersDesc:
      "Professional support in lesson planning, material development, student evaluation and educational technologies.",
    forAdmin: "For Administration",
    forAdminDesc:
      "Support in announcement management, information sharing, guidance on school policies and administrative processes.",
    reliableOfficial: "Reliable and Official",
    schoolApproved: "School Approved",
    schoolApprovedDesc:
      "An artificial intelligence assistant officially developed and approved by Sezai Karakoç Anadolu Lisesi.",
    educationFocused: "Versatile Assistant",
    educationFocusedDesc:
      "In addition to educational support, it provides services in many areas such as creative writing, summarization, analysis, and problem solving.",
    continuousDevelopment: "Continuous Development",
    continuousDevelopmentDesc:
      "Smart assistant technology that is continuously updated and developed according to school needs.",
    improveEducation: "Enhance Your Experience with SkalGPT",
    improveEducationDesc:
      "Get instant answers to your questions, receive support in your creative processes, and increase your academic success with AI-powered assistant.",
    schoolQuote:
      "Technology should be a tool that supports learning and development. SkalGPT serves our school with this understanding.",

    // About page
    aboutSkalGPT: "Who is SkalGPT?",
    aboutDesc:
      "A versatile artificial intelligence assistant specially developed for Sezai Karakoç Anadolu Lisesi. A reliable digital partner for students, teachers and administration.",
    ourMission: "Our Mission",
    missionDesc:
      "To provide reliable, ethical and effective artificial intelligence technology to support every member of the Sezai Karakoç Anadolu Lisesi family in academic processes, facilitate access to information, and assist in various topics.",
    ourVision: "Our Vision",
    visionDesc:
      "To be a pioneer in artificial intelligence technology, contribute to the development of 21st century skills of our students and create experiences suitable for the requirements of the digital age.",
    coreValues: "Our Core Values",
    coreValuesDesc: "The principles that guide the development and use of SkalGPT",
    reliability: "Reliability",
    reliabilityDesc:
      "Accurate, up-to-date and reliable information sharing. Content production compatible with school values.",
    inclusivity: "Inclusivity",
    inclusivityDesc: "Providing appropriate support for the needs of every student, teacher and administrative staff.",
    ethics: "Ethics",
    ethicsDesc: "Providing service by adhering to privacy, respect and ethical values.",
    schoolConnection: "Our Connection with Sezai Karakoç Anadolu Lisesi",
    schoolConnectionDesc1:
      "SkalGPT was developed to support the vision of Sezai Karakoç Anadolu Lisesi and contribute to the digital transformation process of the school community.",
    schoolConnectionDesc2:
      "SkalGPT, which adopts the values, rules and philosophy of our school, is designed to increase the academic success of our students, facilitate the work of our teachers and support administrative processes.",
    betaNotice: "About Development Process",
    betaNoticeDesc:
      "SkalGPT is continuously being developed and improved. We are in the process of adding new features. Your feedback is very valuable to us.",

    // Features page
    skalGPTCapabilities: "SkalGPT's Capabilities",
    capabilitiesDesc: "Comprehensive features specially designed for students and teachers",
    students: "Students",
    teachers: "Teachers",
    studentsFeatures: "Features for Students",
    studentsFeaturesDesc: "Comprehensive support system to increase your academic success",
    teachersFeatures: "Features for Teachers",
    teachersFeaturesDesc: "Professional tools to support your educational process",
    topicExplanation: "Topic Explanation",
    topicExplanationDesc: "Detailed topic explanations, examples and explanations in all courses",
    problemSolving: "Problem Solving",
    problemSolvingDesc: "Step-by-step problem solutions and different solution methods",
    homeworkHelp: "Homework Help",
    homeworkHelpDesc: "Guidance and research support on homework topics",
    examPrep: "Exam Preparation",
    examPrepDesc: "Exam strategies, summary notes and test questions",
    schoolInfo: "School Information",
    schoolInfoDesc: "Information about school rules, activities and announcements",
    access247: "24/7 Access",
    access247Desc: "Continuous support where you can ask your questions anytime",
    lessonPlan: "Lesson Plan",
    lessonPlanDesc: "Preparing detailed lesson plans and curriculum support",
    materialDevelopment: "Material Development",
    materialDevelopmentDesc: "Preparing educational materials, worksheets and presentations",
    evaluation: "Evaluation",
    evaluationDesc: "Preparing exam questions and student evaluation criteria",
    classManagement: "Class Management",
    classManagementDesc: "In-class activities and student motivation strategies",
    pedagogicalSupport: "Pedagogical Support",
    pedagogicalSupportDesc: "Guidance on teaching methods and educational technologies",
    professionalDevelopment: "Professional Development",
    professionalDevelopmentDesc: "Professional development suggestions and current educational trends",
    keyFeatures: "Key Features",
    keyFeaturesDesc: "Key features that make SkalGPT special",
    secureReliable: "Secure and Reliable",
    secureReliableDesc: "Safe and accurate information sharing compatible with school values",
    fastEffective: "Fast and Effective",
    fastEffectiveDesc: "System optimized for instant response and effective solutions",
    personalized: "Personalized",
    personalizedDesc: "Special approach and support for each user's needs",

    // New capabilities
    creativeWriting: "Creative Writing",
    creativeWritingDesc: "Support for creating creative texts such as stories, poems, scripts, and essays",
    summarization: "Summarization and Analysis",
    summarizationDesc: "Summarizing long texts and analyzing complex data",
    languageSupport: "Language Skills",
    languageSupportDesc: "Translation, grammar corrections, and communication in different languages",
    ideaGeneration: "Idea Generation",
    ideaGenerationDesc: "New perspectives and brainstorming support on various topics",

    // FAQ page
    frequentlyAsked: "What You Wonder",
    faqDesc: "Most frequently asked questions about SkalGPT and detailed answers",
    helpCategories: "Help Categories",
    helpCategoriesDesc: "Find the right help according to your needs",
    generalUsage: "General Usage",
    generalUsageDesc: "Basic usage and general features of SkalGPT",
    security: "Security",
    securityDesc: "Privacy, security and data protection issues",
    educationSupport: "Academic Support",
    educationSupportDesc: "Course topics, homework and exam preparation",
    technicalSupport: "Technical Support",
    technicalSupportDesc: "Technical problems and system usage",
    questionNotHere: "Your Question Not Here?",
    questionNotHereDesc:
      "If you couldn't find the answer you were looking for, don't hesitate to contact us. We are happy to help you.",

    // Updated FAQ Questions and Answers (removed 2 questions, updated 1)
    faqQuestion1: "What is SkalGPT and how does it work?",
    faqAnswer1:
      "SkalGPT is a versatile artificial intelligence assistant specially developed for Sezai Karakoç Anadolu Lisesi. It provides services in many areas such as academic support, creative writing, summarization, analysis, and problem solving for students, teachers, and administrative staff. Using natural language processing technology, it understands your questions and provides answers compatible with school values.",

    faqQuestion2: "How can I access SkalGPT?",
    faqAnswer2:
      "SkalGPT is currently being actively developed and will be available to students, teachers, and staff of Sezai Karakoç Anadolu Lisesi soon. Access details and usage information will be announced by the school administration when ready. You can follow this website for updates.",

    faqQuestion3: "Is SkalGPT secure? Is my data protected?",
    faqAnswer3:
      "Yes, SkalGPT is completely secure. All your conversations are encrypted and your personal data is protected. It is designed in accordance with school policies, and privacy and security are ensured at the highest level. Conversations are stored for a maximum of 30 days due to technical and security limitations and are deleted after that period.",

    faqQuestion4: "What topics can I get help with?",
    faqAnswer4:
      "In addition to providing help in all course subjects, SkalGPT offers support in many areas such as creative writing, summarization, analysis, problem solving, language skills, and idea generation. It can also help with school rules, activities, and general information.",

    faqQuestion5: "Is SkalGPT available 24/7?",
    faqAnswer5:
      "Yes, SkalGPT is available at all hours of the day. You can ask your questions anytime and get instant responses. This feature is especially useful during exam periods and homework preparation.",

    faqQuestion6: "How can teachers use SkalGPT?",
    faqAnswer6:
      "Teachers can use SkalGPT for lesson planning, developing educational materials, creating exam questions and getting support on pedagogical topics. They can also get help with student evaluation criteria and classroom management strategies.",

    faqQuestion7: "Can SkalGPT give wrong information?",
    faqAnswer7:
      "SkalGPT uses continuously updated information sources that are compatible with the school curriculum. However, like any technology, it is not 100% error-free. It may occasionally give incorrect answers due to database and source limitations. We recommend that you verify the information you receive on important topics and check with your teachers.",

    faqQuestion8: "What should I do if I experience technical problems with SkalGPT?",
    faqAnswer8:
      "When you experience technical problems, first try refreshing the page. If the problem persists, you can send a detailed email to skalgpt.official@gmail.com. Your problems will be resolved as soon as possible.",

    // Footer
    schoolName: "Sezai Karakoç Anadolu Lisesi",
    quickLinks: "Quick Links",
    schoolInfo: "School Information",
    copyright: "© 2024 SkalGPT - Sezai Karakoç Anadolu Lisesi. All rights reserved.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
