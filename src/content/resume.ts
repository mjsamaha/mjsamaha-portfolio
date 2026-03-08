export interface AboutMe {
  intro: string;
  tagline: string;
  highlights: string[];
}

export interface Experience {
  id: string;
  organization: string;
  role?: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  tags: string[];
}

export interface Education {
  id: string;
  institution: string;
  program: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export const aboutMe: AboutMe = {
  intro: "Full-stack developer with a passion for building meaningful tools. Currently studying Computer Systems Technology while serving as a Naval Reservist.",
  tagline: "Code. Serve. Capture.",
  highlights: ["3+ years development experience", "Military leadership", "Open source contributor"]
};

export const experience: Experience[] = [
  {
    id: "naval-reservist",
    organization: "Canadian Armed Forces",
    role: "Naval Reservist",
    location: "Toronto, ON",
    startDate: "Jan 2022",
    endDate: "Present",
    description: "Holding temporary position as junior section commander, responsible for core trades training and mentorship.",
    tags: ["Leadership", "Cybersecurity", "Training"]
  },
  {
    id: "volunteer-instructor",
    organization: "Oakville Sea Cadets",
    role: "Volunteer Instructor",
    location: "Oakville, ON",
    startDate: "Sep 2023",
    endDate: "Present",
    description: "Developing learning tools for cadets to master naval signal pennants. Leading instruction sessions for youth aged 12-18.",
    tags: ["Mentorship", "Education", "Project Management"]
  }
];

export const education: Education[] = [
  {
    id: "sheridan-cst",
    institution: "Sheridan College",
    program: "Computer Systems Technology – Analysis and Design",
    location: "Oakville, ON",
    startDate: "Sep 2024",
    endDate: "Apr 2027 (Expected)",
    description: "Focused program in software development with emphasis on analysis, design, and implementation of computer systems.",
    technologies: ["Java", "Python", "C#", "Bash", "SQL"]
  }
];
