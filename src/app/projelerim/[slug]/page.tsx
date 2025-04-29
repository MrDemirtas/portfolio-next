import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft, Globe, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { projects } from "@/lib/data"
import type { Metadata } from "next"
import { FadeIn } from "@/components/fade-in"
import { ScrollProgress } from "@/components/scroll-progress"
import { ImageGallery } from "@/components/image-gallery"
import { CodeRain } from "@/components/code-rain"
import { MarkdownContent } from "@/components/markdown-content"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return {
      title: "Proje Bulunamadı",
    }
  }

  return {
    title: `${project.title} | Projelerim`,
    description: project.shortDescription,
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  // Emoji mapping for project types
  const projectEmoji =
    {
      "E-Ticaret Platformu": "🛒",
      "Task Yönetim Uygulaması": "✅",
      "Mobil Fitness Uygulaması": "💪",
      "Blog Platformu": "✍️",
    }[project.title] || "🚀"

  return (
    <main className="relative min-h-screen">
      <ScrollProgress />

      {/* Header with Code Rain */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <CodeRain />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm dark:bg-background/40" />

        <div className="container relative z-10 px-4 py-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-5xl">{projectEmoji}</span>
            <h1 className="text-4xl md:text-5xl font-bold glitch-text" data-text={project.title}>
              {project.title}
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">{project.shortDescription}</p>
        </div>
      </section>

      <section className="py-20 bg-circuit-pattern">
        <div className="container mx-auto px-4">
          <Link
            href="/projelerim"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-8 group"
          >
            <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Tüm Projelere Dön</span>
          </Link>

          <FadeIn delay={0.2}>
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <FadeIn delay={0.3} className="lg:col-span-2">
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span>📝</span> Proje Detayları
                  </h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <MarkdownContent content={project.longDescription} />
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Card className="border-none shadow-xl overflow-hidden h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span>⚙️</span> Teknolojiler
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span>🔗</span> Bağlantılar
                  </h3>
                  <div className="space-y-4">
                    {project.liveLink && (
                      <Button variant="outline" className="w-full group" asChild>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Globe className="h-4 w-4 group-hover:text-primary transition-colors duration-300" />
                          <span className="group-hover:text-primary transition-colors duration-300">Canlı Proje</span>
                        </a>
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button variant="outline" className="w-full group" asChild>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4 group-hover:text-primary transition-colors duration-300" />
                          <span className="group-hover:text-primary transition-colors duration-300">GitHub Repo</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          {/* Problem ve Zorluklar Bölümleri */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <FadeIn delay={0.5}>
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span>🔍</span> Problem ve Çözüm
                  </h2>
                  <MarkdownContent content={project.problemSolved} />
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.6}>
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span>🧩</span> Zorluklar
                  </h2>
                  <MarkdownContent content={project.challenges} />
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          {/* Image Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <FadeIn delay={0.7}>
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <span>🖼️</span> Galeri
                </h2>
                <ImageGallery images={project.gallery} title={project.title} />
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </main>
  )
}
