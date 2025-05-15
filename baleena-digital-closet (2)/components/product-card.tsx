import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  image: string
  name: string
  id: string
}

export default function ProductCard({ image, name, id }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <div className="p-4">
          <div className="aspect-square relative mb-3">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-contain rounded-md" />
          </div>
          <h3 className="font-medium text-gray-900 text-lg">{name}</h3>
        </div>
      </div>
    </Link>
  )
}
