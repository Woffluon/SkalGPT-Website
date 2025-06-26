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
    demo: "Demo",

    // Common
    beta: "BETA",
    comingSoon: "Yakında",
    learnMore: "Daha Fazla Bilgi",
    exploreFeatures: "Özellikleri Keşfet",
    tryDemo: "Demo'yu Deneyin",

    // Home page
    heroTitle: "SkalGPT",
    heroSubtitle: "Yapay Zeka Asistanınız",
    heroDescription:
      "Öğrenciler, öğretmenler ve idare için özel olarak geliştirilmiş güvenilir yapay zeka asistanı. Eğitim sürecinizi destekleyen, sorularınızı yanıtlayan ve okulunuzla bağlantınızı güçlendiren akıllı çözüm.",
    whySkalGPT: "Neden SkalGPT?",
    whySkalGPTDesc: "Eğitim sürecinizin her aşamasında yanınızda olan, güvenilir ve etkili yapay zeka asistanı",
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
    educationFocused: "Eğitim Odaklı",
    educationFocusedDesc:
      "Sadece eğitim ve öğretim amaçlı kullanım için tasarlanmış, okul değerlerine uygun içerik üretimi.",
    continuousDevelopment: "Sürekli Gelişim",
    continuousDevelopmentDesc:
      "Okul ihtiyaçlarına göre sürekli güncellenen ve geliştirilen akıllı asistan teknolojisi.",
    improveEducation: "SkalGPT ile Eğitim Deneyiminizi Geliştirin",
    improveEducationDesc:
      "Yapay zeka destekli eğitim asistanı ile öğrenme sürecinizi hızlandırın, sorularınıza anında yanıt alın ve akademik başarınızı artırın.",
    schoolQuote:
      "Eğitimde teknoloji, öğrenmeyi destekleyen bir araç olmalıdır. SkalGPT, bu anlayışla okulumuzun hizmetinde.",

    // About page
    aboutSkalGPT: "SkalGPT Kimdir?",
    aboutDesc:
      "Sezai Karakoç Anadolu Lisesi için özel olarak geliştirilmiş, eğitim odaklı yapay zeka asistanı. Öğrenciler, öğretmenler ve idare için güvenilir bir dijital partner.",
    ourMission: "Misyonumuz",
    missionDesc:
      "Sezai Karakoç Anadolu Lisesi ailesinin her üyesine eğitim sürecinde destek olmak, öğrenmeyi kolaylaştırmak ve akademik başarıyı artırmak için güvenilir, etik ve etkili yapay zeka teknolojisi sunmak.",
    ourVision: "Vizyonumuz",
    visionDesc:
      "Eğitimde yapay zeka teknolojisinin öncüsü olmak, öğrencilerimizin 21. yüzyıl becerilerini geliştirmelerine katkıda bulunmak ve dijital çağın gereksinimlerine uygun eğitim deneyimi yaratmak.",
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
      "SkalGPT, Sezai Karakoç Anadolu Lisesi'nin eğitim vizyonunu desteklemek ve okul topluluğunun dijital dönüşüm sürecine katkıda bulunmak amacıyla geliştirilmiştir.",
    schoolConnectionDesc2:
      "Okulumuzun değerlerini, kurallarını ve eğitim felsefesini benimseyen SkalGPT, öğrencilerimizin akademik başarısını artırmak, öğretmenlerimizin işini kolaylaştırmak ve idari süreçleri desteklemek için tasarlanmıştır.",
    betaNotice: "Beta Sürümü Hakkında",
    betaNoticeDesc:
      "SkalGPT şu anda geliştirme aşamasındadır. Sürekli iyileştirme ve yeni özellikler ekleme sürecindeyiz. Geri bildirimleriniz bizim için çok değerlidir.",

    // Features page
    skalGPTCapabilities: "SkalGPT'nin Yetkinlikleri",
    capabilitiesDesc: "Öğrenciler, öğretmenler ve idare için özel olarak tasarlanmış kapsamlı özellikler",
    students: "Öğrenciler",
    teachers: "Öğretmenler",
    administration: "İdare",
    studentsFeatures: "Öğrenciler İçin Özellikler",
    studentsFeaturesDesc: "Akademik başarınızı artıracak kapsamlı destek sistemi",
    teachersFeatures: "Öğretmenler İçin Özellikler",
    teachersFeaturesDesc: "Eğitim sürecinizi destekleyecek profesyonel araçlar",
    adminFeatures: "İdare İçin Özellikler",
    adminFeaturesDesc: "Okul yönetimini destekleyecek kapsamlı araçlar",
    topicExplanation: "Konu Anlatımı",
    topicExplanationDesc: "Tüm derslerde detaylı konu anlatımları, örnekler ve açıklamalar",
    problemSolving: "Soru Çözme",
    problemSolvingDesc: "Adım adım soru çözümleri ve farklı çözüm yöntemleri",
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
    announcementManagement: "Duyuru Yönetimi",
    announcementManagementDesc: "Okul duyurularının hazırlanması ve paylaşılması",
    policyGuidance: "Politika Rehberliği",
    policyGuidanceDesc: "Okul kuralları ve politikaları hakkında bilgilendirme",
    documentation: "Dokümantasyon",
    documentationDesc: "Resmi evrak ve formların hazırlanmasında yardım",
    communicationSupport: "İletişim Desteği",
    communicationSupportDesc: "Veli ve öğrenci iletişiminde rehberlik ve destek",
    processManagement: "Süreç Yönetimi",
    processManagementDesc: "İdari süreçlerin planlanması ve yönetilmesi",
    consulting: "Danışmanlık",
    consultingDesc: "Eğitim yönetimi ve okul gelişimi konularında danışmanlık",
    keyFeatures: "Temel Özellikler",
    keyFeaturesDesc: "SkalGPT'yi özel kılan temel özellikler",
    secureReliable: "Güvenli ve Güvenilir",
    secureReliableDesc: "Okul değerleriyle uyumlu, güvenli ve doğru bilgi paylaşımı",
    fastEffective: "Hızlı ve Etkili",
    fastEffectiveDesc: "Anında yanıt alma ve etkili çözümler için optimize edilmiş sistem",
    personalized: "Kişiselleştirilmiş",
    personalizedDesc: "Her kullanıcının ihtiyaçlarına özel yaklaşım ve destek",

    // FAQ page
    frequentlyAsked: "Merak Ettikleriniz",
    faqDesc: "SkalGPT hakkında en çok sorulan sorular ve detaylı yanıtları",
    helpCategories: "Yardım Kategorileri",
    helpCategoriesDesc: "İhtiyacınıza göre doğru yardımı bulun",
    generalUsage: "Genel Kullanım",
    generalUsageDesc: "SkalGPT'nin temel kullanımı ve genel özellikler",
    security: "Güvenlik",
    securityDesc: "Gizlilik, güvenlik ve veri koruma konuları",
    educationSupport: "Eğitim Desteği",
    educationSupportDesc: "Ders konuları, ödevler ve sınav hazırlığı",
    technicalSupport: "Teknik Destek",
    technicalSupportDesc: "Teknik sorunlar ve sistem kullanımı",
    questionNotHere: "Sorunuz Burada Yok mu?",
    questionNotHereDesc:
      "Aradığınız cevabı bulamadıysanız, bizimle iletişime geçmekten çekinmeyin. Size yardımcı olmaktan memnuniyet duyarız.",

    // FAQ Questions and Answers
    faqQuestion1: "SkalGPT nedir ve nasıl çalışır?",
    faqAnswer1:
      "SkalGPT, Sezai Karakoç Anadolu Lisesi için özel olarak geliştirilmiş yapay zeka asistanıdır. Öğrenciler, öğretmenler ve idare personeli için eğitim odaklı destek sağlar. Doğal dil işleme teknolojisi kullanarak sorularınızı anlayıp, okul değerleriyle uyumlu yanıtlar verir.",
    faqQuestion2: "SkalGPT'ye nasıl erişebilirim?",
    faqAnswer2:
      "SkalGPT'ye okul tarafından sağlanan özel bağlantı veya platform üzerinden erişebilirsiniz. Giriş için okul kimlik bilgilerinizi kullanmanız gerekebilir. Detaylı erişim bilgileri için okul idaresi ile iletişime geçebilirsiniz.",
    faqQuestion3: "SkalGPT güvenli mi? Verilerim korunuyor mu?",
    faqAnswer3:
      "Evet, SkalGPT tamamen güvenlidir. Tüm konuşmalarınız şifrelenir ve kişisel verileriniz korunur. Okul politikalarına uygun olarak tasarlanmış olup, sadece eğitim amaçlı kullanım için optimize edilmiştir. Gizlilik ve güvenlik en üst düzeyde sağlanır.",
    faqQuestion4: "Hangi konularda yardım alabilirim?",
    faqAnswer4:
      "SkalGPT tüm ders konularında (matematik, fen, sosyal, dil dersleri vb.) yardım sağlar. Ayrıca ödev desteği, sınav hazırlığı, okul kuralları, etkinlikler ve genel eğitim konularında da destek alabilirsiniz. Öğretmenler için ders planı ve materyal hazırlama desteği de mevcuttur.",
    faqQuestion5: "SkalGPT 7/24 kullanılabilir mi?",
    faqAnswer5:
      "Evet, SkalGPT günün her saati kullanılabilir. İstediğiniz zaman sorularınızı sorabilir ve anında yanıt alabilirsiniz. Bu özellik özellikle sınav dönemlerinde ve ödev hazırlığında çok faydalıdır.",
    faqQuestion6: "SkalGPT ödevlerimi yapabilir mi?",
    faqAnswer6:
      "SkalGPT ödevlerinizi doğrudan yapmaz, ancak ödev konularında rehberlik sağlar. Size konuları açıklar, araştırma yöntemleri önerir ve öğrenme sürecinizi destekler. Amacımız sizin öğrenmenizi kolaylaştırmak, yerinize yapmak değil.",
    faqQuestion7: "Öğretmenler SkalGPT'yi nasıl kullanabilir?",
    faqAnswer7:
      "Öğretmenler SkalGPT'yi ders planı hazırlama, eğitim materyali geliştirme, sınav soruları oluşturma ve pedagojik konularda destek almak için kullanabilir. Ayrıca öğrenci değerlendirme kriterleri ve sınıf yönetimi stratejileri konularında da yardım alabilirler.",
    faqQuestion8: "SkalGPT yanlış bilgi verebilir mi?",
    faqAnswer8:
      "SkalGPT sürekli güncellenen ve okul müfredatıyla uyumlu bilgi kaynakları kullanır. Ancak her teknoloji gibi %100 hatasız değildir. Önemli konularda aldığınız bilgileri doğrulamanızı ve öğretmenlerinizle kontrol etmenizi öneririz.",
    faqQuestion9: "SkalGPT'de teknik sorun yaşarsam ne yapmalıyım?",
    faqAnswer9:
      "Teknik sorun yaşadığınızda önce sayfayı yenilemeyi deneyin. Sorun devam ederse okul BT destek ekibi ile iletişime geçin veya iletişim sayfamızdan bize ulaşın. Sorunlarınız en kısa sürede çözülecektir.",
    faqQuestion10: "SkalGPT'nin kullanım kuralları nelerdir?",
    faqAnswer10:
      "SkalGPT sadece eğitim amaçlı kullanılmalıdır. Saygılı dil kullanın, kişisel bilgilerinizi paylaşmayın ve okul değerlerine uygun davranın. Sistemi kötüye kullanmak yasaktır ve takip edilmektedir.",

    // Demo page
    skalGPTDemo: "SkalGPT Demo",
    demoDesc:
      "SkalGPT ile etkileşime geçin ve yapay zeka asistanımızın yeteneklerini keşfedin. Bu demo sürümüdür ve gerçek SkalGPT'nin tüm özelliklerini içermeyebilir.",
    exampleQuestions: "Örnek Sorular",
    online: "Çevrimiçi",
    aiAssistant: "Yapay Zeka Asistanı",
    demoVersion: "Demo Sürümü",
    typeMessage: "Mesajınızı yazın...",
    demoNotice: "Bu demo sürümüdür. Gerçek SkalGPT daha gelişmiş özellikler sunacaktır.",
    aboutBetaVersion: "Beta Sürümü Hakkında",
    betaVersionDesc:
      "Bu demo, SkalGPT'nin beta sürümüdür. Gerçek ürün daha gelişmiş özellikler, daha doğru yanıtlar ve okul sistemiyle entegrasyon sunacaktır. Geri bildirimleriniz geliştirme sürecimiz için çok değerlidir.",
    initialGreeting:
      "Merhaba! Ben SkalGPT, Sezai Karakoç Anadolu Lisesi'nin yapay zeka asistanıyım. Size nasıl yardımcı olabilirim?",
    exampleQuestion1: "Matematik dersinde türev konusunu anlatır mısın?",
    exampleQuestion2: "Okul kuralları nelerdir?",
    exampleQuestion3: "Sınav hazırlığı için öneriler verir misin?",
    exampleQuestion4: "Fizik ödevim için yardım alabilir miyim?",

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
    demo: "Demo",

    // Common
    beta: "BETA",
    comingSoon: "Coming Soon",
    learnMore: "Learn More",
    exploreFeatures: "Explore Features",
    tryDemo: "Try Demo",

    // Home page
    heroTitle: "SkalGPT",
    heroSubtitle: "Your AI Assistant",
    heroDescription:
      "A reliable artificial intelligence assistant specially developed for students, teachers and administration. An intelligent solution that supports your educational process, answers your questions and strengthens your connection with your school.",
    whySkalGPT: "Why SkalGPT?",
    whySkalGPTDesc:
      "A reliable and effective artificial intelligence assistant that is with you at every stage of your educational process",
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
    educationFocused: "Education Focused",
    educationFocusedDesc:
      "Designed only for educational and teaching purposes, producing content compatible with school values.",
    continuousDevelopment: "Continuous Development",
    continuousDevelopmentDesc:
      "Smart assistant technology that is continuously updated and developed according to school needs.",
    improveEducation: "Improve Your Educational Experience with SkalGPT",
    improveEducationDesc:
      "Accelerate your learning process with AI-supported educational assistant, get instant answers to your questions and increase your academic success.",
    schoolQuote:
      "Technology in education should be a tool that supports learning. SkalGPT serves our school with this understanding.",

    // About page
    aboutSkalGPT: "Who is SkalGPT?",
    aboutDesc:
      "An education-focused artificial intelligence assistant specially developed for Sezai Karakoç Anadolu Lisesi. A reliable digital partner for students, teachers and administration.",
    ourMission: "Our Mission",
    missionDesc:
      "To provide reliable, ethical and effective artificial intelligence technology to support every member of the Sezai Karakoç Anadolu Lisesi family in the educational process, facilitate learning and increase academic success.",
    ourVision: "Our Vision",
    visionDesc:
      "To be a pioneer in artificial intelligence technology in education, contribute to the development of 21st century skills of our students and create an educational experience suitable for the requirements of the digital age.",
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
      "SkalGPT was developed to support the educational vision of Sezai Karakoç Anadolu Lisesi and contribute to the digital transformation process of the school community.",
    schoolConnectionDesc2:
      "SkalGPT, which adopts the values, rules and educational philosophy of our school, is designed to increase the academic success of our students, facilitate the work of our teachers and support administrative processes.",
    betaNotice: "About Beta Version",
    betaNoticeDesc:
      "SkalGPT is currently in the development phase. We are in the process of continuous improvement and adding new features. Your feedback is very valuable to us.",

    // Features page
    skalGPTCapabilities: "SkalGPT's Capabilities",
    capabilitiesDesc: "Comprehensive features specially designed for students, teachers and administration",
    students: "Students",
    teachers: "Teachers",
    administration: "Administration",
    studentsFeatures: "Features for Students",
    studentsFeaturesDesc: "Comprehensive support system to increase your academic success",
    teachersFeatures: "Features for Teachers",
    teachersFeaturesDesc: "Professional tools to support your educational process",
    adminFeatures: "Features for Administration",
    adminFeaturesDesc: "Comprehensive tools to support school management",
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
    announcementManagement: "Announcement Management",
    announcementManagementDesc: "Preparation and sharing of school announcements",
    policyGuidance: "Policy Guidance",
    policyGuidanceDesc: "Information about school rules and policies",
    documentation: "Documentation",
    documentationDesc: "Assistance in preparing official documents and forms",
    communicationSupport: "Communication Support",
    communicationSupportDesc: "Guidance and support in parent and student communication",
    processManagement: "Process Management",
    processManagementDesc: "Planning and management of administrative processes",
    consulting: "Consulting",
    consultingDesc: "Consulting on educational management and school development",
    keyFeatures: "Key Features",
    keyFeaturesDesc: "Key features that make SkalGPT special",
    secureReliable: "Secure and Reliable",
    secureReliableDesc: "Safe and accurate information sharing compatible with school values",
    fastEffective: "Fast and Effective",
    fastEffectiveDesc: "System optimized for instant response and effective solutions",
    personalized: "Personalized",
    personalizedDesc: "Special approach and support for each user's needs",

    // FAQ page
    frequentlyAsked: "What You Wonder",
    faqDesc: "Most frequently asked questions about SkalGPT and detailed answers",
    helpCategories: "Help Categories",
    helpCategoriesDesc: "Find the right help according to your needs",
    generalUsage: "General Usage",
    generalUsageDesc: "Basic usage and general features of SkalGPT",
    security: "Security",
    securityDesc: "Privacy, security and data protection issues",
    educationSupport: "Education Support",
    educationSupportDesc: "Course topics, homework and exam preparation",
    technicalSupport: "Technical Support",
    technicalSupportDesc: "Technical problems and system usage",
    questionNotHere: "Your Question Not Here?",
    questionNotHereDesc:
      "If you couldn't find the answer you were looking for, don't hesitate to contact us. We are happy to help you.",

    // FAQ Questions and Answers
    faqQuestion1: "What is SkalGPT and how does it work?",
    faqAnswer1:
      "SkalGPT is an artificial intelligence assistant specially developed for Sezai Karakoç Anadolu Lisesi. It provides education-focused support for students, teachers and administrative staff. Using natural language processing technology, it understands your questions and provides answers compatible with school values.",
    faqQuestion2: "How can I access SkalGPT?",
    faqAnswer2:
      "You can access SkalGPT through the special link or platform provided by the school. You may need to use your school credentials to log in. For detailed access information, you can contact the school administration.",
    faqQuestion3: "Is SkalGPT secure? Is my data protected?",
    faqAnswer3:
      "Yes, SkalGPT is completely secure. All your conversations are encrypted and your personal data is protected. It is designed in accordance with school policies and optimized for educational use only. Privacy and security are ensured at the highest level.",
    faqQuestion4: "What topics can I get help with?",
    faqAnswer4:
      "SkalGPT provides help in all course subjects (mathematics, science, social studies, language courses, etc.). You can also get support in homework assistance, exam preparation, school rules, activities and general educational topics. Lesson planning and material preparation support is also available for teachers.",
    faqQuestion5: "Is SkalGPT available 24/7?",
    faqAnswer5:
      "Yes, SkalGPT is available at all hours of the day. You can ask your questions anytime and get instant responses. This feature is especially useful during exam periods and homework preparation.",
    faqQuestion6: "Can SkalGPT do my homework?",
    faqAnswer6:
      "SkalGPT does not do your homework directly, but provides guidance on homework topics. It explains topics to you, suggests research methods and supports your learning process. Our aim is to facilitate your learning, not to do it for you.",
    faqQuestion7: "How can teachers use SkalGPT?",
    faqAnswer7:
      "Teachers can use SkalGPT for lesson planning, developing educational materials, creating exam questions and getting support on pedagogical topics. They can also get help with student evaluation criteria and classroom management strategies.",
    faqQuestion8: "Can SkalGPT give wrong information?",
    faqAnswer8:
      "SkalGPT uses continuously updated information sources that are compatible with the school curriculum. However, like any technology, it is not 100% error-free. We recommend that you verify the information you receive on important topics and check with your teachers.",
    faqQuestion9: "What should I do if I experience technical problems with SkalGPT?",
    faqAnswer9:
      "When you experience technical problems, first try refreshing the page. If the problem persists, contact the school IT support team or reach us through our contact page. Your problems will be resolved as soon as possible.",
    faqQuestion10: "What are the usage rules of SkalGPT?",
    faqAnswer10:
      "SkalGPT should only be used for educational purposes. Use respectful language, do not share your personal information and behave in accordance with school values. Misuse of the system is prohibited and monitored.",

    // Demo page
    skalGPTDemo: "SkalGPT Demo",
    demoDesc:
      "Interact with SkalGPT and discover the capabilities of our artificial intelligence assistant. This is a demo version and may not include all features of the real SkalGPT.",
    exampleQuestions: "Example Questions",
    online: "Online",
    aiAssistant: "AI Assistant",
    demoVersion: "Demo Version",
    typeMessage: "Type your message...",
    demoNotice: "This is a demo version. Real SkalGPT will offer more advanced features.",
    aboutBetaVersion: "About Beta Version",
    betaVersionDesc:
      "This demo is the beta version of SkalGPT. The real product will offer more advanced features, more accurate answers and integration with the school system. Your feedback is very valuable for our development process.",
    initialGreeting:
      "Hello! I'm SkalGPT, the artificial intelligence assistant of Sezai Karakoç Anadolu Lisesi. How can I help you?",
    exampleQuestion1: "Can you explain the concept of derivatives in mathematics?",
    exampleQuestion2: "What are the school rules?",
    exampleQuestion3: "Can you give suggestions for exam preparation?",
    exampleQuestion4: "Can I get help with my physics homework?",

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
