export type SkillRating = {
  name: string
  level: number
}

export type CurrentlyItem = {
  label: string
}

export const profile = {
  name: 'Simon Olsson',
  title: 'Gameplay Programmer',
  photo: `${import.meta.env.BASE_URL}simon.jpg`,
  tagline:
    'Gameplay Programmer focused on player movement, gameplay systems, and creating satisfying player experiences in Unity and Unreal.',
  location: 'Skåne, Ängelholm, Sweden',
  availability: 'Open',
  availabilityDetail: 'Open to on-site in Skåne and remote roles across Sweden',
  lookingFor: [
    'Junior Gameplay Programmer',
    'Gameplay Systems Programmer',
    'AI Programmer',
  ],
  email: 'SimonOlsson9231@gmail.com',
  github: 'https://github.com/Simon936-Git',
  linkedin: 'https://www.linkedin.com/in/simon-olsson-036a93233/',
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
  education: 'Game Programmer, Futuregames Malmö (2023-2025)',
  languages: 'English (fluent), Swedish (native)',
  focusAreas: ['Player movement', 'Gameplay systems', 'Unity', 'Unreal Engine'],
  currently: [
    { label: 'Graduated from Futuregames (2025)' },
    { label: 'Completed internship at Akribian Edtech AB' },
    { label: 'Based in Ängelholm, Sweden' },
    { label: 'Looking for a Junior Gameplay Programmer position' },
  ] satisfies CurrentlyItem[],
  skillRatings: [
    { name: 'Gameplay Programming', level: 4 },
    { name: 'Unity', level: 5 },
    { name: 'Unreal Engine', level: 3 },
    { name: 'C#', level: 5 },
    { name: 'C++', level: 3 },
  ] satisfies SkillRating[],
  about: [
    'I’m a recently graduated Gameplay Programmer from Futuregames in Malmö with a passion for creating gameplay that feels responsive, fun, and rewarding to play. I enjoy turning ideas into working game mechanics and collaborating closely with designers and artists to build engaging player experiences.',
    'During my studies, I worked with both Unity (C#) and Unreal Engine (C++) in several team projects, where I developed gameplay features such as player movement, pickups, boosts, enemy behavior, and game systems. Working in multidisciplinary teams taught me how to communicate ideas, iterate on feedback, and contribute throughout the entire development process.',
    'I also completed my internship at Akribian Edtech AB, working on the educational game Count on Me. I implemented gameplay mechanics and interactive features in Unity, primarily using Playmaker alongside C#, and collaborated with the development team to create and improve gameplay systems.',
    'I’m always looking to improve as a programmer and enjoy learning new technologies, solving technical challenges, and building gameplay that creates a great player experience.',
  ],
  internship: {
    company: 'Akribian Edtech AB',
    role: 'Gameplay Programming Intern',
    period: '2025',
    summary:
      'Count on Me is a science-based educational math game for children used in schools and at home.',
    highlights: [
      'Worked on the educational game Count on Me using Unity, Playmaker, and C#.',
      'Implemented gameplay mechanics and interactive features.',
      'Collaborated with the development team throughout development.',
    ],
    url: 'https://www.akribian.com/count-on-me',
    urlLabel: 'Count on Me at Akribian',
    youtubeId: 'MhOm9ZiTtv8',
  },
}
