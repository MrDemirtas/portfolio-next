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
  location: string;
  social: {
    github: string;
    linkedin: string;
  };
}

export interface Project {
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
