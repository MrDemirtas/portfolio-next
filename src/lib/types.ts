export interface PersonalData {
  fullName: string;
  title: string;
  profileImage: string;
  biography: string;
  skills: string[];
  education: {
    degree: string;
    institution: string;
    years: string;
  }[];
  email: string;
  phone: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
  };
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  image: string;
  gallery?: string[];
  problemSolved: string;
  challenges: string;
  liveLink?: string;
  githubLink?: string;
}

export interface ProjectsResponse {
  total: number;
  documents: {
    slug: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    technologies: string[];
    image: string;
    gallery: string[];
    problemSolved: string;
    challenges: string;
    liveLink: string;
    githubLink: string;
    $id: string;
    $createdAt: string;
    $updatedAt: string;
    $permissions: string[];
    $databaseId: string;
    $collectionId: string;
  }[];
}
