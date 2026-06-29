export type SkillGroup = {
  category: string
  items: { name: string; level: number }[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      { name: 'C#', level: 85 },
      { name: 'C++', level: 70 },
      { name: 'Python', level: 60 },
      { name: 'HLSL / Shader basics', level: 45 },
    ],
  },
  {
    category: 'Engines & Tools',
    items: [
      { name: 'Unity', level: 85 },
      { name: 'Unreal Engine', level: 65 },
      { name: 'Git / GitHub', level: 80 },
      { name: 'Visual Studio / Rider', level: 75 },
    ],
  },
  {
    category: 'Gameplay Systems',
    items: [
      { name: 'Character controllers', level: 85 },
      { name: 'State machines & AI', level: 75 },
      { name: 'Combat & abilities', level: 70 },
      { name: 'Physics & collision', level: 70 },
      { name: 'Input & camera systems', level: 80 },
    ],
  },
]

export const concepts = [
  'Object pooling',
  'Fixed timestep',
  'Data-driven design',
  'Animation events',
  'Debug visualization',
  'Playtesting loops',
  'Performance profiling',
  'Component architecture',
]
