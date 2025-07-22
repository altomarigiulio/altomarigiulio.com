type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  description: string
  logo: string
  link: string
  id: string
}

type Education = {
  university: string
  title: string
  start: string
  end: string
  description: string
  link: string
  id: string
}


type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Gravity Gardens',
    title: 'Embedded Engineer',
    logo: '/gravity-gardens-logo.png',
    start: '2025',
    end: 'Present',
    description: 'Currently helping to build the future of agriculture.',
    link: 'https://gravity-gardens.com/',
    id: 'work1',
  },
  {
    company: 'IIS Janello Torriani',
    title: 'Electronics and Automation Teacher    ',
    logo: '/miur.png',
    start: '2023',
    end: '2025',
    description: 'Worked as a teacher in the Electronics and Automation department, while pursued my Bachelor\'s degree in Computer Science Engineering.',
    link: 'https://iistorriani.it',
    id: 'work2',
  },
]


export const EDUCATION: Education[] = [
   {
    university: 'KTH Royal Institute of Technology',
    title: 'Master\'s Degree in Computer Science Engineering      ',
    start: '2025',
    end: 'Present',
    description: 'Sweden\'s largest technical university, known for its cutting-edge research and innovation in technology.',
    link: 'https://www.kth.se/en',
    id: 'edu1',
  },
  {
    university: 'Politecnico di Milano',
    title: 'Bachelor\'s Degree in Computer Science Engineering    ',
    start: '2021',
    end: '2025',
    description: 'Italy\'s leading engineering university, recognized for its excellence in engineering and architecture. Developed a strong foundation in computer science and engineering principles, while being a student-worker.',
    link: 'https://polimi.it',
    id: 'edu2',
  },
  {
    university: 'IIS Janello Torriani',
    title: 'High School Diploma in IT',
    start: '2016',
    end: '2021',
    description: 'IT high school with a focus on software and programming, where I developed a strong foundation in programming.',
    link: 'https://iistorriani.it',
    id: 'work2',
  },
]


export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]



export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/altomarigiulio',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/giulio-altomari/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/giulioaltomari',
  },
]

export const EMAIL = 'altomari.giulio@gmail.com'
