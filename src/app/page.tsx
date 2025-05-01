import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/fade-in";

import { Button } from "@/components/ui/button";
import { CodeRain } from "@/components/code-rain";
import { ContactCard } from "@/components/contact-card";
import { EducationTimeline } from "@/components/education-timeline";
import { FloatingIcons } from "@/components/floating-icons";
import { HeroName } from "@/components/hero-name";
import Link from "next/link";
import { SkillBadge } from "@/components/skill-badge";
import { TypewriterEffect } from "@/components/typewriter-effect";
import { personalData } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="relative">
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

          <div className="absolute bottom-10 w-full flex justify-center animate-bounce">
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

          <FadeIn>
            <ContactCard
              email={personalData.email}
              location={personalData.location}
            />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
