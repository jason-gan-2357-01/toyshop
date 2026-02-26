// Mock API layer for toy shop data

export interface ToyCategory {
  id: string
  name: string
  description: string
  icon: string
}

export interface Toy {
  id: string
  name: string
  price: number
  description: string
  categoryId: string
  image?: string
}

// Mock categories
const categories: ToyCategory[] = [
  {
    id: 'action-figures',
    name: 'Action Figures',
    description: 'Collectible action figures from your favorite franchises',
    icon: '🦸',
  },
  {
    id: 'building-blocks',
    name: 'Building Blocks',
    description: 'Creative building sets for all ages',
    icon: '🧱',
  },
  {
    id: 'dolls',
    name: 'Dolls',
    description: 'Beautiful dolls and doll accessories',
    icon: '👧',
  },
  {
    id: 'vehicles',
    name: 'Vehicles',
    description: 'Model cars, trucks, and planes',
    icon: '🚗',
  },
  {
    id: 'board-games',
    name: 'Board Games',
    description: 'Fun games for family and friends',
    icon: '🎲',
  },
  {
    id: 'puzzles',
    name: 'Puzzles',
    description: 'Brain-teasing puzzles for all skill levels',
    icon: '🧩',
  },
]

// Mock toys
const toys: Toy[] = [
  // Action Figures
  {
    id: 'af-1',
    name: 'Super Hero Champion',
    price: 24.99,
    description: 'Highly detailed action figure with articulated joints',
    categoryId: 'action-figures',
  },
  {
    id: 'af-2',
    name: 'Ninja Master',
    price: 19.99,
    description: 'Classic ninja action figure with accessories',
    categoryId: 'action-figures',
  },
  {
    id: 'af-3',
    name: 'Space Explorer',
    price: 29.99,
    description: 'Futuristic astronaut figure with light-up features',
    categoryId: 'action-figures',
  },
  {
    id: 'af-4',
    name: 'Dragon Champion',
    price: 34.99,
    description: 'Mighty dragon figure with poseable wings',
    categoryId: 'action-figures',
  },

  // Building Blocks
  {
    id: 'bb-1',
    name: 'Classic Castle Set',
    price: 79.99,
    description: '1200 piece castle building set with minifigures',
    categoryId: 'building-blocks',
  },
  {
    id: 'bb-2',
    name: 'Modern House Kit',
    price: 89.99,
    description: 'Contemporary house with detailed interiors',
    categoryId: 'building-blocks',
  },
  {
    id: 'bb-3',
    name: 'Space Station Build',
    price: 119.99,
    description: 'Large space station with 2000+ pieces',
    categoryId: 'building-blocks',
  },
  {
    id: 'bb-4',
    name: 'Vehicle Garage',
    price: 49.99,
    description: 'Build and customize 5 different vehicles',
    categoryId: 'building-blocks',
  },

  // Dolls
  {
    id: 'dl-1',
    name: 'Fashion Princess',
    price: 34.99,
    description: 'Gorgeous doll with elegant gown and accessories',
    categoryId: 'dolls',
  },
  {
    id: 'dl-2',
    name: 'Adventure Explorer',
    price: 29.99,
    description: 'Adventurous doll with outdoor gear',
    categoryId: 'dolls',
  },
  {
    id: 'dl-3',
    name: 'Baby Doll with Accessories',
    price: 24.99,
    description: 'Soft baby doll comes with bottle, diaper, and blanket',
    categoryId: 'dolls',
  },
  {
    id: 'dl-4',
    name: 'Artist Doll Set',
    price: 39.99,
    description: 'Doll with easel, paints, and art supplies',
    categoryId: 'dolls',
  },

  // Vehicles
  {
    id: 'vh-1',
    name: 'High-Speed Race Car',
    price: 14.99,
    description: 'Fast and furious model sports car',
    categoryId: 'vehicles',
  },
  {
    id: 'vh-2',
    name: 'Fire Truck Collection',
    price: 19.99,
    description: 'Set of 3 detailed fire trucks',
    categoryId: 'vehicles',
  },
  {
    id: 'vh-3',
    name: 'Airplane Model',
    price: 22.99,
    description: 'Detailed jet aircraft with landing gear',
    categoryId: 'vehicles',
  },
  {
    id: 'vh-4',
    name: 'Helicopter Set',
    price: 17.99,
    description: 'Military-style helicopter with moving propellers',
    categoryId: 'vehicles',
  },

  // Board Games
  {
    id: 'bg-1',
    name: 'Strategy Master',
    price: 44.99,
    description: 'Turn-based strategy game for 2-4 players',
    categoryId: 'board-games',
  },
  {
    id: 'bg-2',
    name: 'Word Challenge',
    price: 19.99,
    description: 'Fast-paced word building game for ages 8+',
    categoryId: 'board-games',
  },
  {
    id: 'bg-3',
    name: 'Adventure Quest',
    price: 59.99,
    description: 'Epic fantasy adventure board game',
    categoryId: 'board-games',
  },
  {
    id: 'bg-4',
    name: 'Memory Master',
    price: 12.99,
    description: 'Classic memory matching game',
    categoryId: 'board-games',
  },

  // Puzzles
  {
    id: 'pz-1',
    name: '500 Piece Landscape',
    price: 9.99,
    description: 'Beautiful scenic landscape puzzle',
    categoryId: 'puzzles',
  },
  {
    id: 'pz-2',
    name: '1000 Piece World Map',
    price: 14.99,
    description: 'Detailed world map puzzle',
    categoryId: 'puzzles',
  },
  {
    id: 'pz-3',
    name: '3D Castle Puzzle',
    price: 34.99,
    description: 'Build a 3D standing castle puzzle',
    categoryId: 'puzzles',
  },
  {
    id: 'pz-4',
    name: 'Galaxy Puzzle',
    price: 19.99,
    description: 'Glow-in-the-dark galaxy puzzle',
    categoryId: 'puzzles',
  },
]

// API functions
export async function getCategories(): Promise<ToyCategory[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))
  return categories
}

export async function getCategoryById(id: string): Promise<ToyCategory | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200))
  return categories.find((cat) => cat.id === id) || null
}

export async function getToysByCategory(categoryId: string): Promise<Toy[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))
  return toys.filter((toy) => toy.categoryId === categoryId)
}

export async function getToyById(id: string): Promise<Toy | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200))
  return toys.find((toy) => toy.id === id) || null
}
