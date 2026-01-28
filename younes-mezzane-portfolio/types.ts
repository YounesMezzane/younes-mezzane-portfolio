export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  details: string[];
}

export interface Skill {
  name: string;
  category: 'Technical' | 'Soft' | 'Interest';
  level?: number; // 0-100
}

export interface Language {
  name: string;
  level: string;
  score: number; // 0-5 mapping from the dots
}

export interface Certification {
  name: string;
  issuer: string;
  url?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  linkedin: string;
  credly: string;
}
