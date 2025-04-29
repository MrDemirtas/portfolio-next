import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/fade-in";

import { Button } from "@/components/ui/button";
import { CodeRain } from "@/components/code-rain";
import { ContactCard } from "@/components/contact-card";
import { EducationTimeline } from "@/components/education-timeline";
import { FloatingIcons } from "@/components/floating-icons";
import { HeroName } from "@/components/hero-name";
import Link from "next/link";
import { ScrollProgress } from "@/components/scroll-progress";
import { SkillBadge } from "@/components/skill-badge";
import { TypewriterEffect } from "@/components/typewriter-effect";
import { personalData } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="relative">
      <ScrollProgress />

      {/* Hero Section with Code Rain Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <CodeRain />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm dark:bg-background/40" />

        <div className="container relative z-10 px-4 py-20 flex flex-col items-center justify-center text-center">
          <FloatingIcons />

          <div className="mb-6">
            <HeroName name={personalData.fullName} />
          </div>

          <div className="mb-8 h-20">
            <TypewriterEffect text={personalData.title} />
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="group rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300"
            >
              <Link href="/projelerim" className="flex items-center gap-2">
                Projelerim
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="rounded-full border-2 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                İletişime Geç
              </a>
            </Button>
          </div>

          <div className="flex gap-6 mt-4">
            <a
              href={personalData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card hover:bg-primary/20 p-3 rounded-full transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href={personalData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card hover:bg-primary/20 p-3 rounded-full transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted-foreground"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-code-pattern">
        <FadeIn>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3 border-b pb-4">
              <span className="text-4xl">🧠</span> Hakkımda
            </h2>
            <div className="bg-card rounded-3xl p-8 shadow-xl border border-border hover:border-primary/40 transition-all duration-300">
              <p className="text-lg md:text-xl leading-relaxed">
                {personalData.biography}
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-circuit-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3 border-b pb-4">
            <span className="text-4xl">🚀</span> Yeteneklerim
          </h2>

          <FadeInStagger>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {personalData.skills.map((skill, index) => (
                <FadeIn key={index}>
                  <SkillBadge skill={skill} index={index} />
                </FadeIn>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-binary-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3 border-b pb-4">
            <span className="text-4xl">🎓</span> Eğitim
          </h2>

          <FadeIn>
            <EducationTimeline education={personalData.education} />
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-code-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3 border-b pb-4">
            <span className="text-4xl">📱</span> İletişim
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn>
              <ContactCard
                email={personalData.email}
                location={personalData.location}
              />
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-card rounded-3xl p-8 shadow-xl border border-border h-full">
                <h3 className="text-2xl font-bold mb-6">Mesaj Gönder</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                      >
                        Adınız
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                      >
                        E-posta Adresiniz
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-1"
                      >
                        Mesajınız
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      ></textarea>
                    </div>
                  </div>
                  <Button className="w-full">Gönder</Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
