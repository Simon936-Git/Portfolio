export type Project = {
  id: string
  title: string
  summary: string
  contribution: string
  tech: string[]
  image: string
  demo?: string
  video?: string
  linkLabel: string
}

const base = import.meta.env.BASE_URL

export const projects: Project[] = [
  {
    id: 'mandragora',
    title: 'Mandragora',
    summary: 'Co-op creature daycare sim — catch, throw, and deliver magical pets before they turn into monsters.',
    contribution: 'Player pickups, movement mechanics, and core gameplay code.',
    tech: ['Unity', 'C#', 'PC', 'Co-op'],
    image: `${base}projects/mandragora.png`,
    demo: 'https://sparda-blizzard.itch.io/mandragora',
    linkLabel: 'Play on itch.io',
  },
  {
    id: 'drain-dash',
    title: 'Drain Dash',
    summary: 'Co-op kayak racer through sewers — grappling hooks, boosts, and tight communication.',
    contribution: 'Boost system, ScriptableObject-driven gameplay, and debugging.',
    tech: ['Unity', 'C#', 'Mobile', 'Co-op'],
    image: `${base}projects/draindash.png`,
    demo: 'https://futuregames.itch.io/draindash',
    linkLabel: 'Play on itch.io',
  },
  {
    id: 'bloom',
    title: 'Bloom',
    summary: 'Fast-paced Unreal action — horde combat with portals and aggressive enemy waves.',
    contribution: 'Player movement and enemy spawner systems.',
    tech: ['Unreal Engine', 'C++', 'PC'],
    image: `${base}projects/bloom.png`,
    video: 'https://www.youtube.com/watch?v=PNSfh5MDwek',
    linkLabel: 'Watch trailer',
  },
]
