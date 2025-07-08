import type { PersonalData } from "../types/types";

export const personalData: PersonalData = {
  fullName: "Furkan Demirtaş",
  title: "Full Stack Developer",
  profileImage: "/placeholder.svg?height=400&width=400",
  biography:
    "Merhaba! Ben Furkan, 1 yıllık deneyime sahip bir Full Stack Developer. Modern web teknolojileri konusunda uzmanlaşmış olup, kullanıcı deneyimini ön planda tutan, performanslı ve ölçeklenebilir uygulamalar geliştiriyorum. React, Next.js, TypeScript teknolojilerini aktif olarak kullanmaktayım. Sürekli kendimi geliştirmeye ve yeni teknolojileri öğrenmeye odaklanıyorum.",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Supabase",
  ],
  education: [
    {
      degree: "Bilgisayar Programcılığı",
      institution: "Anadolu Üniversitesi",
      years: "2024 - 2026 (Devam Ediyor)",
    },
    {
      degree: "Frontend Uzmanlık Eğitimi",
      institution: "İstanbul Nişantaşı Üniversitesi Acunmedya Akademi",
      years: "2024 - 2025",
    },
  ],
  email: "furkan-demirtas@outlook.com",
  location: "Tekirdağ, Türkiye",
  social: {
    github: "https://github.com/mrdemirtas",
    linkedin: "https://linkedin.com/in/mrdemirtas",
  },
};
