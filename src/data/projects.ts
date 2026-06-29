export type Project = {
  id: string
  title: string
  summary: string
  role: string
  tech: string[]
  highlights: string[]
  github?: string
  demo?: string
  video?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'character-controller',
    title: 'Third-Person Character Controller',
    summary:
      'Modular movement system with coyote time, jump buffering, slope handling, and camera-relative input.',
    role: 'Solo gameplay programmer',
    tech: ['Unity', 'C#', 'Cinemachine'],
    highlights: [
      'Separated input, movement, and animation layers for designer-friendly tuning',
      'Used ScriptableObjects for movement presets (walk, sprint, crouch)',
      'Playtested with designers using in-editor gizmos for jump arcs',
    ],
    github: 'https://github.com/yourusername/character-controller',
    featured: true,
  },
  {
    id: 'enemy-ai',
    title: 'Enemy AI State Machine',
    summary:
      'Patrol, investigate, and chase behaviors driven by a hierarchical state machine with perception cones.',
    role: 'AI & gameplay systems',
    tech: ['Unreal Engine', 'C++', 'Behavior Trees'],
    highlights: [
      'Implemented sight and hearing stimuli with configurable alert levels',
      'Debug draw tools for designers to visualize states in PIE',
      'Reduced unnecessary tick cost by event-driven perception updates',
    ],
    github: 'https://github.com/yourusername/enemy-ai-fsm',
    featured: true,
  },
  {
    id: 'combat-system',
    title: 'Melee Combat Prototype',
    summary:
      'Light attack chains, dodge i-frames, and hit-stop feedback built around readable combat windows.',
    role: 'Combat gameplay programmer',
    tech: ['Unity', 'C#', 'Animation Rigging'],
    highlights: [
      'Frame-based hitbox activation synced to animation events',
      'Combo graph authored in data, not hard-coded branches',
      'Added hit-stop and camera shake hooks for game feel polish',
    ],
    demo: 'https://yourusername.itch.io/combat-prototype',
    featured: true,
  },
  {
    id: 'neon-drift',
    title: 'Neon Drift — Game Jam',
    summary:
      '48-hour arcade racer with drift scoring, boost pads, and procedural track segments.',
    role: 'Gameplay lead (team of 4)',
    tech: ['Unity', 'C#', 'Game Jam'],
    highlights: [
      'Built drift scoring from slip angle and speed thresholds',
      'Shipped a playable build with tutorial in under 48 hours',
      'Ranked in top 15% of jam submissions',
    ],
    demo: 'https://yourusername.itch.io/neon-drift',
    video: 'https://youtube.com/watch?v=example',
  },
  {
    id: 'physics-puzzle',
    title: 'Physics Puzzle Toolkit',
    summary:
      'Reusable grab, throw, and constraint components for a portal-inspired puzzle prototype.',
    role: 'Systems programmer',
    tech: ['Unity', 'C#', 'PhysX'],
    highlights: [
      'Stable object grabbing with predictive interpolation',
      'Constraint solver tuned to prevent jitter on stacked objects',
      'Level trigger system for puzzle validation',
    ],
    github: 'https://github.com/yourusername/physics-puzzle',
  },
]
