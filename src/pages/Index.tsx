import { Building2, Building, Factory, Landmark, Warehouse, Home, HardHat, Hammer, Ruler, ShieldCheck, Phone, Mail, MapPin, ArrowLeft, ArrowRight, CheckCircle2, Trophy, Calendar, MapPinned, Quote, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import heroImage from "@/assets/hero-construction.jpg";
import aboutImage from "@/assets/about-team.jpg";
import achievement1 from "@/assets/achievement-1.jpg";
import achievement2 from "@/assets/achievement-2.jpg";
import achievement3 from "@/assets/achievement-3.jpg";

const Index = () => {
  const { t, lang } = useI18n();
  const { toast } = useToast();
  const [isScrolled, setIsScrolled] = useState(false);
  const isRtl = lang === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: isRtl ? "تم الإرسال بنجاح" : "Message Sent Successfully",
      description: isRtl ? "سنتواصل معك في أقرب وقت ممكن." : "We will get back to you as soon as possible.",
    });
  };

  const services = [
    { icon: Building2, t: "svc1_t" as const, d: "svc1_d" as const },
    { icon: HardHat, t: "svc2_t" as const, d: "svc2_d" as const },
    { icon: Hammer, t: "svc3_t" as const, d: "svc3_d" as const },
    { icon: Ruler, t: "svc4_t" as const, d: "svc4_d" as const },
  ];

  const stats = [
    { value: "+250", label: "stat_projects" as const },
    { value: "+18", label: "stat_years" as const },
    { value: "+120", label: "stat_team" as const },
    { value: "100%", label: "stat_satisfaction" as const },
  ];

  const projects = [
    { t: "prj1_t" as const, y: "prj1_y" as const, category: "res", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" },
    { t: "prj2_t" as const, y: "prj2_y" as const, category: "com", img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80" },
    { t: "prj3_t" as const, y: "prj3_y" as const, category: "res", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" },
    { t: "ach2_t" as const, y: "prj2_y" as const, category: "com", img: "https://images.unsplash.com/photo-1541888086925-0c1022986f3d?auto=format&fit=crop&w=1200&q=80" },
    { t: "ach3_t" as const, y: "prj3_y" as const, category: "inf", img: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=1200&q=80" },
  ];

  const achievements = [
    { img: achievement1, t: "ach1_t" as const, loc: "ach1_loc" as const, desc: "ach1_d" as const, year: "2024",
      metrics: [{ v: "320", k: "ach1_m1" as const }, { v: "28", k: "ach1_m2" as const }, { v: "85K", k: "ach1_m3" as const }] },
    { img: achievement2, t: "ach2_t" as const, loc: "ach2_loc" as const, desc: "ach2_d" as const, year: "2023",
      metrics: [{ v: "180", k: "ach2_m1" as const }, { v: "120K", k: "ach2_m2" as const }, { v: "2.5K", k: "ach2_m3" as const }] },
    { img: achievement3, t: "ach3_t" as const, loc: "ach3_loc" as const, desc: "ach3_d" as const, year: "2022",
      metrics: [{ v: "12", k: "ach3_m1" as const }, { v: "6", k: "ach3_m2" as const }, { v: "18", k: "ach3_m3" as const }] },
  ];

  const testimonials = [
    { q: "test_1_q" as const, a: "test_1_a" as const, r: "test_1_r" as const },
    { q: "test_2_q" as const, a: "test_2_a" as const, r: "test_2_r" as const },
    { q: "test_3_q" as const, a: "test_3_a" as const, r: "test_3_r" as const },
  ];

  const faqs = [
    { q: "faq_1_q" as const, a: "faq_1_a" as const },
    { q: "faq_2_q" as const, a: "faq_2_a" as const },
    { q: "faq_3_q" as const, a: "faq_3_a" as const },
  ];

  return (
    <div className="min-h-screen bg-background font-display">
      {/* Nav */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? "bg-primary/90 backdrop-blur-md h-16 shadow-lg border-b border-white/10" : "bg-transparent h-20"}`}>
        <div className="container h-full flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center shadow-accent group-hover:scale-110 transition-transform">
              <Building2 className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className={`font-bold text-lg transition-colors ${isScrolled ? "text-primary-foreground" : "text-primary-foreground"}`}>{t("brand")}</span>
          </div>
          <nav className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors ${isScrolled ? "text-primary-foreground/70" : "text-primary-foreground/80"}`}>
            <a href="#home" className="hover:text-accent transition-colors">{t("nav_home")}</a>
            <a href="#services" className="hover:text-accent transition-colors">{t("nav_services")}</a>
            <a href="#projects" className="hover:text-accent transition-colors">{t("nav_projects")}</a>
            <a href="#about" className="hover:text-accent transition-colors">{t("nav_about")}</a>
            <a href="#contact" className="hover:text-accent transition-colors">{t("nav_contact")}</a>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground hidden sm:inline-flex">{t("cta_quote")}</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <img src={heroImage} alt={t("brand")} fetchpriority="high" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container relative z-10 py-24">
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              {t("hero_badge")}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 text-start flex flex-wrap gap-x-3 md:gap-x-4 gap-y-4 md:gap-y-6 leading-tight">
              <span>{t("hero_title_a")}</span>
              <span className="text-accent">{t("hero_title_b")}</span>
              <span>{t("hero_title_c")}</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">{t("hero_desc")}</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent text-base h-12 px-8">
                {t("hero_cta1")}
                <Arrow className={`w-4 h-4 ${isRtl ? "mr-2" : "ml-2"}`} />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 text-base h-12 px-8">
                {t("hero_cta2")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-dark py-12">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-1">{s.value}</div>
              <div className="text-primary-foreground/70 text-sm">{t(s.label)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm tracking-wider">{t("services_kicker")}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">{t("services_title")}</h2>
            <p className="text-muted-foreground text-lg">{t("services_desc")}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Card key={s.t} className="p-8 border-border hover:border-accent/50 hover:shadow-elegant transition-all duration-500 group cursor-pointer">
                <div className="w-14 h-14 rounded-xl bg-secondary group-hover:bg-gradient-accent flex items-center justify-center mb-6 transition-all">
                  <s.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{t(s.t)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(s.d)}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-secondary/40">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-semibold text-sm tracking-wider">{t("about_kicker")}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-6">{t("about_title")}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{t("about_desc")}</p>
            <ul className="space-y-4">
              {(["about_p1", "about_p2", "about_p3", "about_p4"] as const).map((k) => (
                <li key={k} className="flex items-center gap-3 text-primary">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-medium">{t(k)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-accent rounded-2xl opacity-20 blur-2xl" />
            <img src={aboutImage} alt={t("about_title")} loading="lazy" width={1024} height={1280} className="relative rounded-2xl shadow-elegant w-full h-[500px] object-cover" />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm tracking-wider">{t("projects_kicker")}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">{t("projects_title")}</h2>
            <p className="text-muted-foreground text-lg">{t("projects_desc")}</p>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-secondary/50 p-1">
                <TabsTrigger value="all" className="px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">{t("filter_all")}</TabsTrigger>
                <TabsTrigger value="res" className="px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">{t("filter_res")}</TabsTrigger>
                <TabsTrigger value="com" className="px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">{t("filter_com")}</TabsTrigger>
                <TabsTrigger value="inf" className="px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">{t("filter_inf")}</TabsTrigger>
              </TabsList>
            </div>

            {["all", "res", "com", "inf"].map((tab) => (
              <TabsContent key={tab} value={tab} className="mt-0">
                <div className="grid md:grid-cols-3 gap-6">
                  {projects
                    .filter((p) => tab === "all" || p.category === tab)
                    .map((p) => (
                    .map((p) => (
                      <Dialog key={p.t + p.img}>
                        <DialogTrigger asChild>
                          <div className="group relative overflow-hidden rounded-2xl shadow-elegant cursor-pointer animate-fade-up">
                            <img src={p.img} alt={t(p.t)} loading="lazy" className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                            <div className="absolute bottom-0 inset-x-0 p-6 text-primary-foreground">
                              <span className="text-accent text-sm font-medium">{t(p.y)}</span>
                              <h3 className="text-2xl font-bold mt-1">{t(p.t)}</h3>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl bg-background border-border">
                          <DialogHeader>
                            <DialogTitle className="text-3xl font-bold text-primary">{t(p.t)}</DialogTitle>
                            <DialogDescription className="text-accent font-medium">{t(p.y)}</DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-6">
                            <img src={p.img} alt={t(p.t)} className="w-full h-64 md:h-96 object-cover rounded-xl" />
                            <p className="text-muted-foreground text-lg leading-relaxed">
                              {isRtl ? "نحن في شركة البنيان فخورون بتنفيذ هذا المشروع بأعلى معايير الجودة العالمية، مع الالتزام التام بالتفاصيل المعمارية والمواعيد المحددة." : "At Al Bunyan, we are proud to have executed this project with the highest international quality standards, with full commitment to architectural details and deadlines."}
                            </p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    ))}
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-24 bg-secondary/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm tracking-wider">{t("ach_kicker")}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">
              <Trophy className={`inline-block w-10 h-10 text-accent ${isRtl ? "ml-2" : "mr-2"} -mt-2`} />
              {t("ach_title")}
            </h2>
            <p className="text-muted-foreground text-lg">{t("ach_desc")}</p>
          </div>

          <div className="space-y-12">
            {achievements.map((a, idx) => (
              <Card
                key={a.t}
                className={`overflow-hidden border-border shadow-elegant grid lg:grid-cols-2 gap-0 ${
                  idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative h-72 lg:h-auto overflow-hidden group">
                  <img src={a.img} alt={t(a.t)} loading="lazy" width={1280} height={1024} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className={`absolute top-4 ${isRtl ? "right-4" : "left-4"} bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1`}>
                    <Calendar className="w-3 h-3" />
                    {a.year}
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-background">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <MapPinned className="w-4 h-4 text-accent" />
                    {t(a.loc)}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">{t(a.t)}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">{t(a.desc)}</p>
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                    {a.metrics.map((m) => (
                      <div key={m.k}>
                        <div className="text-3xl font-bold text-accent">{m.v}</div>
                        <div className="text-xs text-muted-foreground mt-1">{t(m.k)}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 overflow-hidden">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm tracking-wider">{t("test_kicker")}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">{t("test_title")}</h2>
            <p className="text-muted-foreground text-lg">{t("test_desc")}</p>
          </div>
          <div className="max-w-4xl mx-auto px-4 md:px-12">
            <Carousel opts={{ align: "start", loop: true, direction: isRtl ? "rtl" : "ltr" }} className="w-full">
              <CarouselContent>
                {testimonials.map((test, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                    <Card className="p-8 h-full flex flex-col justify-between border-border shadow-sm hover:shadow-elegant transition-shadow bg-secondary/10">
                      <div>
                        <Quote className="w-10 h-10 text-accent/30 mb-4 rotate-180" />
                        <p className="text-lg leading-relaxed text-primary/80 mb-6 font-medium">"{t(test.q)}"</p>
                      </div>
                      <div>
                        <div className="font-bold text-primary text-lg">{t(test.a)}</div>
                        <div className="text-sm text-accent font-medium mt-1">{t(test.r)}</div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4 md:-left-12 bg-background border-border text-primary hover:bg-accent hover:text-accent-foreground" />
              <CarouselNext className="hidden md:flex -right-4 md:-right-12 bg-background border-border text-primary hover:bg-accent hover:text-accent-foreground" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-secondary/20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm tracking-wider">{t("faq_kicker")}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">{t("faq_title")}</h2>
            <p className="text-muted-foreground text-lg">{t("faq_desc")}</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-lg font-bold text-primary hover:text-accent transition-colors text-start">{t(faq.q)}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {t(faq.a)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent))_0%,transparent_50%)]" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{t("contact_title")}</h2>
              <p className="text-primary-foreground/70 text-lg mb-8">{t("contact_desc")}</p>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: "+966 11 234 5678" },
                  { icon: Mail, label: "info@albunyan.sa" },
                  { icon: MapPin, label: t("contact_address") },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-4 text-primary-foreground">
                    <div className="w-11 h-11 rounded-lg bg-accent/15 flex items-center justify-center">
                      <c.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span dir="ltr" className="text-start">{c.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="p-8 bg-background/95 backdrop-blur border-0 shadow-elegant">
              <h3 className="text-2xl font-bold text-primary mb-6">{t("form_title")}</h3>
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <input required type="text" placeholder={t("form_name")} className="w-full h-12 px-4 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none transition-colors" />
                <input required type="email" placeholder={t("form_email")} className="w-full h-12 px-4 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none transition-colors" />
                <input required type="tel" placeholder={t("form_phone")} className="w-full h-12 px-4 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none transition-colors" />
                <textarea required placeholder={t("form_msg")} rows={4} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none transition-colors resize-none" />
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 shadow-accent">{t("form_send")}</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground/60 text-sm">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-accent" />
            <span>{t("footer_rights")}</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">{t("footer_privacy")}</a>
            <a href="#" className="hover:text-accent transition-colors">{t("footer_terms")}</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/201150321340"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-accent text-accent-foreground rounded-full shadow-lg hover:bg-accent/90 hover:shadow-accent transition-all hover:scale-110 group"
        aria-label={t("whatsapp_tooltip")}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="absolute right-full mr-4 px-3 py-1.5 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {t("whatsapp_tooltip")}
        </span>
      </a>
      <Toaster />
    </div>
  );
};

export default Index;
