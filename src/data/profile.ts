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
    "I'm a Gameplay Programmer from Sweden who recently graduated from Futuregames.",
    'I enjoy building responsive gameplay systems, solving technical problems, and collaborating with designers to create engaging player experiences. During my internship at Akribian Edtech AB, I worked on Count on Me, implementing gameplay mechanics and interactive features in Unity, primarily using Playmaker alongside C#.',
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
