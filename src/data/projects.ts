export type Project = {
  id: string
  title: string
  summary: string
  role: string
  highlights: string[]
  tech: string[]
  image: string
  youtubeId: string
  demo?: string
  linkLabel: string
}

const base = import.meta.env.BASE_URL

export const projects: Project[] = [
  {
    id: 'mandragora',
    title: 'Mandragora',
    summary:
      'Co-op creature daycare sim. Play as twin witches caring for magical pets — dash, throw, and deliver them before they turn into monsters.',
    role: 'Programmer · team of 12',
    highlights: [
      'Implemented player pickup and carry/throw interactions',
      'Built movement mechanics tuned for fast co-op chasing',
      'Contributed core gameplay code across the project lifecycle',
    ],
    tech: ['Unity', 'C#', 'PC', 'Local co-op'],
    image: `${base}projects/mandragora.png`,
    youtubeId: '9sUt5_ACrO0',
    demo: 'https://sparda-blizzard.itch.io/mandragora',
    linkLabel: 'Download on itch.io',
  },
  {
    id: 'drain-dash',
    title: 'Drain Dash',
    summary:
      'Co-op kayak escape through sewers. Grapple, boost, and communicate to reach the exit while collecting coins along the way.',
    role: 'Programmer · team of 12',
    highlights: [
      'Designed and coded the boost system using ScriptableObjects',
      'Built data-driven gameplay features designers could tune in-editor',
      'Debugged co-op movement and gameplay edge cases across PC and mobile',
    ],
    tech: ['Unity', 'C#', 'Android', 'Co-op'],
    image: `${base}projects/draindash.png`,
    youtubeId: 'WmlVNzco4Q0',
    demo: 'https://futuregames.itch.io/draindash',
    linkLabel: 'Download on itch.io',
  },
  {
    id: 'bloom',
    title: 'Bloom',
    summary:
      'Fast-paced Unreal action with horde combat, portals, and aggressive enemy waves in a sci-fi industrial setting.',
    role: 'Programmer · team project',
    highlights: [
      'Implemented player movement and core locomotion feel',
      'Built enemy spawner systems for wave-based combat',
      'Worked in C++ within Unreal’s gameplay framework',
    ],
    tech: ['Unreal Engine', 'C++', 'PC'],
    image: `${base}projects/bloom.png`,
    youtubeId: 'PNSfh5MDwek',
    linkLabel: 'Watch full trailer',
  },
]
