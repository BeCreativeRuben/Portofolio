/**
 * Project data structure for the portfolio showcase
 * 
 * To add a new project, simply add a new object to the projects array below.
 * All fields except 'liveUrl' and 'image' are required.
 * 
 * @example
 * {
 *   id: 4,
 *   title: 'My New Project',
 *   description: 'A brief description of what the project does and its key features.',
 *   technologies: ['React', 'TypeScript', 'Node.js'],
 *   githubUrl: 'https://github.com/username/repo',
 *   liveUrl: 'https://myproject.com', // Optional: if project has a live demo
 *   image: 'https://example.com/screenshot.png', // Optional: custom screenshot
 *   featured: true, // Optional: defaults to true if not specified
 * }
 */
export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  image?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'BK Overview Demo',
    description:
      'A demo dashboard system for Battlekart task overview. Features real-time data sync from Google Sheets via Google Apps Script API, offline support with localStorage caching, and automated tracking of operational metrics. Zero-cost serverless architecture.',
    technologies: ['JavaScript', 'Google Apps Script', 'Google Sheets API', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/BeCreativeRuben/BattleDashboard_DEMO',
    liveUrl: 'https://becreativeruben.github.io/BattleDashboard_DEMO/',
    image: '/sources/BK Overview Picture.png',
    featured: true,
  },
  {
    id: 2,
    title: 'Chrommatic',
    description:
      'A creative web project showcasing modern development techniques, interactive design patterns, and innovative user experiences.',
    technologies: ['React', 'TypeScript', 'CSS', 'Web Development'],
    githubUrl: 'https://github.com/BeCreativeRuben/Chrommatic',
    liveUrl: 'https://chrommatic-band.vercel.app/',
    image: '/sources/Chromattic logo.jpg',
    featured: true,
  },
  {
    id: 3,
    title: 'Vlindertuin 3D',
    description:
      'An interactive 3D web experience featuring a butterfly garden. Built with WebGL and Three.js, showcasing immersive 3D graphics and modern web technologies.',
    technologies: ['Three.js', 'WebGL', 'JavaScript', '3D Graphics', 'Interactive Design'],
    githubUrl: 'https://github.com/BeCreativeRuben/Vlindertuin_3D',
    liveUrl: 'https://becreativeruben.github.io/Vlindertuin_3D/',
    image: '/sources/ButterflyGarden Picture.png',
    featured: true,
  },
]

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured !== false)
}

// Helper function to get project by ID
export const getProjectById = (id: number): Project | undefined => {
  return projects.find((project) => project.id === id)
}

