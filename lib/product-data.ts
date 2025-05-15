export interface Product {
  id: string
  name: string
  brand: string
  image: string
  garmentType: string
  color: string
  size: string
  fiberComposition: string
  fabricDescription: string
  dryWeight: string
  colorationMethod?: string
  finishes: string[]
  fiberLossGrade?: string
  durabilityResults?: string
  seamStrength?: string
  abrasionResistance?: string
  tensileStrength?: string
}

export const products: Product[] = [
  {
    id: "covert-cardigan",
    name: "Women's Covert Cardigan",
    brand: "Arc'teryx",
    image: "/images/1.png",
    garmentType: "Midweight fleece cardigan",
    color: "Black",
    size: "Small (S)",
    fiberComposition: "100% recycled polyester",
    fabricDescription:
      "Alpenex II™ fleece — a brused knit fabric engineered to mimic the look of wool while providing the performance of fleece",
    dryWeight: "Approximately 423.6 g",
    finishes: [
      "Brushed interior for softhess • Wicking fibers to manage moisture",
      "Heathered face for a wool-like appearance",
    ],
  },
  {
    id: "beta-jacket",
    name: "Beta Jacket",
    brand: "Arc'teryx",
    image: "/placeholder.svg?height=600&width=600",
    garmentType: "Lightweight waterproof shell",
    color: "Blue",
    size: "Medium (M)",
    fiberComposition: "100% nylon with GORE-TEX membrane",
    fabricDescription: "3-layer GORE-TEX fabric with C-KNIT backer technology for enhanced breathability and comfort",
    dryWeight: "Approximately 395 g",
    finishes: ["DWR (Durable Water Repellent) finish", "Taped seams for waterproof protection"],
  },
  {
    id: "womens-delta-jacket",
    name: "Women's Delta Jacket",
    brand: "Arc'teryx",
    image: "/placeholder.svg?height=600&width=600",
    garmentType: "Lightweight fleece jacket",
    color: "Green",
    size: "Small (S)",
    fiberComposition: "100% polyester",
    fabricDescription: "Polartec® Classic 100 micro velour small grid fleece",
    dryWeight: "Approximately 285 g",
    finishes: ["Grid pattern for improved breathability", "Flatlock seams for comfort"],
  },
  {
    id: "womens-rho-hoodie",
    name: "Women's Rho Hoodie",
    brand: "Arc'teryx",
    image: "/placeholder.svg?height=600&width=600",
    garmentType: "Midweight base layer hoodie",
    color: "Light Gray",
    size: "Medium (M)",
    fiberComposition: "95% polyester, 5% elastane",
    fabricDescription: "Torrent™ fleece with four-way stretch and moisture-wicking properties",
    dryWeight: "Approximately 270 g",
    finishes: ["Polygiene® anti-odor treatment", "Flatlock seams to minimize chafing"],
  },
  {
    id: "atom-hoody",
    name: "Atom Hoody",
    brand: "Arc'teryx",
    image: "/placeholder.svg?height=600&width=600",
    garmentType: "Insulated mid-layer",
    color: "Navy Blue",
    size: "Large (L)",
    fiberComposition: "Shell: 100% nylon, Insulation: 60g Coreloft™",
    fabricDescription: "Tyono™ 20 shell with DWR treatment and Coreloft™ synthetic insulation",
    dryWeight: "Approximately 375 g",
    finishes: ["Stretch side panels for mobility", "Insulated hood for added warmth"],
  },
  {
    id: "alpha-pant",
    name: "Alpha Pant",
    brand: "Arc'teryx",
    image: "/images/2.png",
    garmentType: "Hardshell pant",
    color: "Red",
    size: "Medium (M)",
    fiberComposition: "100% nylon with GORE-TEX Pro membrane",
    fabricDescription: "N80p-X 3L GORE-TEX Pro - durable, waterproof, breathable",
    dryWeight: "Approximately 490 g",
    finishes: ["Keprotec™ instep patches for abrasion resistance", "Full-length side zips for ventilation"],
  },
  {
    id: "alpha-parka-black",
    name: "Alpha Parka",
    brand: "Arc'teryx",
    image: "/placeholder.svg?height=600&width=600",
    garmentType: "Insulated hardshell jacket",
    color: "Black",
    size: "Large (L)",
    fiberComposition: "Shell: 100% nylon, Insulation: 120g Coreloft™",
    fabricDescription: "N40p-X GORE-TEX with Coreloft™ synthetic insulation",
    dryWeight: "Approximately 670 g",
    finishes: ["Helmet-compatible StormHood™", "WaterTight™ zippers for weather protection"],
  },
  {
    id: "alpha-parka-green",
    name: "Alpha Parka",
    brand: "Arc'teryx",
    image: "/placeholder.svg?height=600&width=600",
    garmentType: "Insulated hardshell jacket",
    color: "Green",
    size: "Medium (M)",
    fiberComposition: "Shell: 100% nylon, Insulation: 120g Coreloft™",
    fabricDescription: "N40p-X GORE-TEX with Coreloft™ synthetic insulation",
    dryWeight: "Approximately 670 g",
    finishes: ["Helmet-compatible StormHood™", "WaterTight™ zippers for weather protection"],
  },
]
