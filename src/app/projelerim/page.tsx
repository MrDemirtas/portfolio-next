import { FadeIn, FadeInStagger } from "@/components/fade-in";

import { CodeRain } from "@/components/code-rain";
import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { ProjectsResponse } from "@/lib/types";
import { ScrollProgress } from "@/components/scroll-progress";

export const metadata: Metadata = {
  title: "Projelerim | Kişisel Portfolyo",
  description: "Tamamladığım projeler ve çalışmalarım",
};

export default async function ProjectsPage() {
  const { documents: projects }: ProjectsResponse = await fetch(
    process.env.NEXT_PUBLIC_SITE_URL + "/api/projects"
  ).then((res) => res.json());

  return (
    <main className="relative min-h-screen">
      <ScrollProgress />

      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <CodeRain />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm dark:bg-background/40" />

        <div className="container relative z-10 px-4 py-16 text-center">
          <h1
            className="text-5xl md:text-6xl font-bold mb-4 glitch-text"
            data-text="Projelerim"
          >
            Projelerim
          </h1>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Geliştirdiğim projeler ve çalışmalarım. Her bir proje, farklı
            teknolojiler ve çözümler içerir.
          </p>
        </div>
      </section>

      <section className="py-20 bg-circuit-pattern">
        <div className="container mx-auto px-4">
          <FadeInStagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects?.map((project, index) => (
                <FadeIn key={project.$id} delay={index * 0.1}>
                  <ProjectCard project={project} />
                </FadeIn>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </section>
    </main>
  );
}
