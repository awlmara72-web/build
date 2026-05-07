import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "ar" | "en";

type Dict = Record<string, { ar: string; en: string }>;

export const dict = {
  brand: { ar: "البنيان", en: "Al Bunyan" },
  nav_home: { ar: "الرئيسية", en: "Home" },
  nav_services: { ar: "خدماتنا", en: "Services" },
  nav_projects: { ar: "مشاريعنا", en: "Projects" },
  nav_about: { ar: "من نحن", en: "About" },
  nav_contact: { ar: "تواصل", en: "Contact" },
  cta_quote: { ar: "طلب عرض سعر", en: "Request a Quote" },

  hero_badge: { ar: "شركة معتمدة منذ عام 2007", en: "Certified company since 2007" },
  hero_title_a: { ar: "نبني", en: "Building the" },
  hero_title_b: { ar: "المستقبل", en: "Future" },
  hero_title_c: { ar: "بأيدٍ خبيرة", en: "with Expert Hands" },
  hero_desc: {
    ar: "شركة البنيان للمقاولات العامة — رواد في تنفيذ المشاريع الإنشائية الكبرى بمعايير عالمية وجودة لا تقبل المساومة.",
    en: "Al Bunyan General Contracting — leaders in delivering large-scale construction projects with world-class standards and uncompromising quality.",
  },
  hero_cta1: { ar: "ابدأ مشروعك معنا", en: "Start Your Project" },
  hero_cta2: { ar: "استكشف مشاريعنا", en: "Explore Our Work" },

  stat_projects: { ar: "مشروع منجز", en: "Completed Projects" },
  stat_years: { ar: "سنة خبرة", en: "Years of Experience" },
  stat_team: { ar: "مهندس وفني", en: "Engineers & Technicians" },
  stat_satisfaction: { ar: "رضا العملاء", en: "Client Satisfaction" },

  services_kicker: { ar: "خدماتنا", en: "Our Services" },
  services_title: { ar: "حلول إنشائية متكاملة", en: "Integrated Construction Solutions" },
  services_desc: {
    ar: "نقدم خدمات شاملة تغطي كافة مراحل المشروع من التخطيط إلى التسليم.",
    en: "Comprehensive services covering every project phase from planning to handover.",
  },
  svc1_t: { ar: "المباني السكنية", en: "Residential Buildings" },
  svc1_d: { ar: "تصميم وتنفيذ المجمعات السكنية والفلل بأعلى معايير الجودة.", en: "Design and execution of residential complexes and villas to the highest standards." },
  svc2_t: { ar: "المشاريع التجارية", en: "Commercial Projects" },
  svc2_d: { ar: "إنشاء المباني التجارية والمكاتب والمراكز التسويقية.", en: "Construction of commercial buildings, offices, and retail centers." },
  svc3_t: { ar: "البنية التحتية", en: "Infrastructure" },
  svc3_d: { ar: "تنفيذ مشاريع الطرق والجسور وشبكات المياه والصرف.", en: "Roads, bridges, water and drainage network projects." },
  svc4_t: { ar: "التصميم الهندسي", en: "Engineering Design" },
  svc4_d: { ar: "خدمات الاستشارات والتصميم المعماري والإنشائي.", en: "Consulting, architectural and structural design services." },

  about_kicker: { ar: "من نحن", en: "About Us" },
  about_title: { ar: "إرث من الإتقان والاحتراف", en: "A Legacy of Mastery and Professionalism" },
  about_desc: {
    ar: "منذ تأسيسنا، نلتزم بتقديم مشاريع تتجاوز توقعات عملائنا. نجمع بين الخبرة العميقة، التقنيات الحديثة، والكوادر المؤهلة لنقدم منشآت تدوم.",
    en: "Since our founding, we deliver projects that exceed client expectations — combining deep expertise, modern technology, and qualified talent to build structures that last.",
  },
  about_p1: { ar: "فريق هندسي معتمد ومتخصص", en: "Certified, specialized engineering team" },
  about_p2: { ar: "التزام تام بالمواعيد والميزانيات", en: "Full commitment to schedules and budgets" },
  about_p3: { ar: "أعلى معايير السلامة المهنية", en: "Top occupational safety standards" },
  about_p4: { ar: "ضمان شامل على جميع الأعمال", en: "Comprehensive warranty on all work" },

  projects_kicker: { ar: "أعمالنا", en: "Our Work" },
  projects_title: { ar: "مشاريع نفخر بها", en: "Projects We're Proud Of" },
  projects_desc: { ar: "نماذج من إنجازاتنا التي شكّلت ملامح المدن الحديثة.", en: "A selection of work that shaped modern cityscapes." },
  prj1_t: { ar: "برج الواحة السكني", en: "Al Waha Residential Tower" },
  prj1_y: { ar: "سكني • الرياض", en: "Residential • Riyadh" },
  prj2_t: { ar: "مجمع النخيل التجاري", en: "Al Nakheel Commercial Complex" },
  prj2_y: { ar: "تجاري • جدة", en: "Commercial • Jeddah" },
  prj3_t: { ar: "فيلا الروضة", en: "Al Rawda Villa" },
  prj3_y: { ar: "سكني فاخر • الدمام", en: "Luxury Residential • Dammam" },

  ach_kicker: { ar: "إنجازاتنا", en: "Achievements" },
  ach_title: { ar: "مشاريع شكّلت الفارق", en: "Projects That Made the Difference" },
  ach_desc: { ar: "نتائج ملموسة وأرقام تعكس حجم التزامنا وجودة التنفيذ.", en: "Tangible results and numbers reflecting our commitment and quality." },
  ach1_t: { ar: "أبراج الواحة السكنية", en: "Al Waha Residential Towers" },
  ach1_loc: { ar: "الرياض", en: "Riyadh" },
  ach1_d: { ar: "مجمع سكني فاخر يضم برجين متجاورين بإطلالات بانورامية ومرافق متكاملة.", en: "Luxury residential complex with twin towers, panoramic views and integrated amenities." },
  ach1_m1: { ar: "وحدة سكنية", en: "Units" },
  ach1_m2: { ar: "طابق", en: "Floors" },
  ach1_m3: { ar: "م² مساحة", en: "m² Area" },
  ach2_t: { ar: "مول النخيل التجاري", en: "Al Nakheel Mall" },
  ach2_loc: { ar: "جدة", en: "Jeddah" },
  ach2_d: { ar: "مركز تسوق حديث بواجهة زجاجية منحنية ومساحات تجارية متعددة الاستخدامات.", en: "Modern shopping center with curved glass facade and multi-use retail spaces." },
  ach2_m1: { ar: "متجر تجاري", en: "Stores" },
  ach2_m2: { ar: "م² مساحة", en: "m² Area" },
  ach2_m3: { ar: "موقف سيارة", en: "Parking" },
  ach3_t: { ar: "جسر الطريق السريع", en: "Highway Bridge" },
  ach3_loc: { ar: "المنطقة الشرقية", en: "Eastern Province" },
  ach3_d: { ar: "مشروع بنية تحتية استراتيجي يربط بين مدينتين رئيسيتين عبر تضاريس صعبة.", en: "Strategic infrastructure project connecting two major cities across challenging terrain." },
  ach3_m1: { ar: "كلم طول", en: "km Length" },
  ach3_m2: { ar: "مسارات", en: "Lanes" },
  ach3_m3: { ar: "شهر تنفيذ", en: "Months" },

  contact_title: { ar: "جاهز لبدء مشروعك القادم؟", en: "Ready to start your next project?" },
  contact_desc: { ar: "تواصل معنا اليوم واحصل على استشارة مجانية من فريقنا الهندسي المتخصص.", en: "Contact us today for a free consultation from our specialized engineering team." },
  contact_address: { ar: "الرياض، طريق الملك فهد، المملكة العربية السعودية", en: "Riyadh, King Fahd Road, Saudi Arabia" },
  form_title: { ar: "اطلب عرض سعر", en: "Request a Quote" },
  form_name: { ar: "الاسم الكامل", en: "Full Name" },
  form_email: { ar: "البريد الإلكتروني", en: "Email Address" },
  form_phone: { ar: "رقم الجوال", en: "Phone Number" },
  form_msg: { ar: "تفاصيل المشروع", en: "Project Details" },
  form_send: { ar: "إرسال الطلب", en: "Send Request" },

  partners_kicker: { ar: "شركاء النجاح", en: "Our Partners" },
  partners_title: { ar: "نثق بهم ويثقون بنا", en: "Trusted By The Best" },
  partners_desc: { ar: "نفخر بالعمل مع نخبة من المؤسسات الرائدة.", en: "We are proud to work with leading organizations." },

  test_kicker: { ar: "آراء العملاء", en: "Testimonials" },
  test_title: { ar: "ماذا يقول عملاؤنا", en: "What Our Clients Say" },
  test_desc: { ar: "نجاحنا يقاس برضا عملائنا عن كل مشروع ننجزه.", en: "Our success is measured by our clients' satisfaction." },
  test_1_q: { ar: "التزام لا مثيل له بالمواعيد وجودة التنفيذ فاقت توقعاتنا.", en: "Unmatched commitment to deadlines and execution quality exceeded our expectations." },
  test_1_a: { ar: "م. أحمد عبدلله", en: "Eng. Ahmed Abdullah" },
  test_1_r: { ar: "مدير مشاريع", en: "Project Manager" },
  test_2_q: { ar: "فريق عمل محترف ونتائج مذهلة في مشروعنا التجاري.", en: "A professional team and amazing results in our commercial project." },
  test_2_a: { ar: "سارة الخالد", en: "Sarah Al Khalid" },
  test_2_r: { ar: "الرئيس التنفيذي", en: "CEO" },
  test_3_q: { ar: "دقة في التفاصيل واحترافية في التعامل، ننصح بهم وبشدة.", en: "Attention to detail and professionalism. Highly recommended." },
  test_3_a: { ar: "خالد المنصور", en: "Khalid Al Mansour" },
  test_3_r: { ar: "مستثمر عقاري", en: "Real Estate Investor" },

  faq_kicker: { ar: "الأسئلة الشائعة", en: "FAQ" },
  faq_title: { ar: "إجابات لاستفساراتكم", en: "Answers to Your Questions" },
  faq_desc: { ar: "جمعنا لكم الإجابات للأسئلة الأكثر شيوعاً لتسهيل اتخاذ قراركم.", en: "We've compiled answers to the most common questions." },
  faq_1_q: { ar: "هل تقدمون ضمانات على المشاريع؟", en: "Do you provide warranties on projects?" },
  faq_1_a: { ar: "نعم، نقدم ضمانات شاملة تصل إلى 10 سنوات على الهيكل الإنشائي.", en: "Yes, we provide comprehensive warranties up to 10 years on the structural integrity." },
  faq_2_q: { ar: "ما هي المدة المتوقعة لبناء فيلا سكنية؟", en: "What is the expected duration to build a residential villa?" },
  faq_2_a: { ar: "تتراوح المدة عادة بين 8 إلى 12 شهراً حسب حجم وتفاصيل المشروع.", en: "The duration usually ranges between 8 to 12 months depending on the project details." },
  faq_3_q: { ar: "هل تتعاملون مع مشاريع خارج الرياض؟", en: "Do you handle projects outside Riyadh?" },
  faq_3_a: { ar: "بالتأكيد، لدينا مشاريع في جميع أنحاء المملكة ولدينا فرق مستعدة للتنقل.", en: "Absolutely, we have projects all over the Kingdom and teams ready to mobilize." },

  filter_all: { ar: "الكل", en: "All" },
  filter_res: { ar: "سكني", en: "Residential" },
  filter_com: { ar: "تجاري", en: "Commercial" },
  filter_inf: { ar: "بنية تحتية", en: "Infrastructure" },

  whatsapp_tooltip: { ar: "تواصل معنا عبر واتساب", en: "Contact us via WhatsApp" },

  footer_rights: { ar: "© 2026 شركة البنيان للمقاولات. جميع الحقوق محفوظة.", en: "© 2026 Al Bunyan Contracting. All rights reserved." },
  footer_privacy: { ar: "سياسة الخصوصية", en: "Privacy Policy" },
  footer_terms: { ar: "الشروط والأحكام", en: "Terms & Conditions" },
} satisfies Dict;

type Key = keyof typeof dict;

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string }>({
  lang: "ar",
  setLang: () => {},
  t: (k) => k,
});

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => (localStorage.getItem("lang") as Lang) || "ar");
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
  }, [lang]);
  return (
    <Ctx.Provider value={{ lang, setLang: setLangState, t: (k) => dict[k][lang] }}>
      {children}
    </Ctx.Provider>
  );
};

export const useI18n = () => useContext(Ctx);
