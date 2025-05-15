import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Sidebar from "@/components/sidebar"
import UserProfile from "@/components/user-profile"
import { products } from "@/lib/product-data"

export default function ProductDetail({ params }: { params: { id: string } }) {
  // Find the product by ID
  const product = products.find((p) => p.id === params.id) || products[0]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="mr-2" size={20} />
              <span>Back to Digital Closet</span>
            </Link>
            <UserProfile />
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative aspect-square">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain rounded-md"
                  priority
                />
              </div>

              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                  {product.brand} {product.name} — Technical Overview
                </h1>

                <div className="space-y-4">
                  <div className="grid grid-cols-[180px_1fr] gap-2">
                    <span className="font-semibold text-gray-900">Garment Type:</span>
                    <span>{product.garmentType}</span>
                  </div>

                  <div className="grid grid-cols-[180px_1fr] gap-2">
                    <span className="font-semibold text-gray-900">Color:</span>
                    <span>{product.color}</span>
                  </div>

                  <div className="grid grid-cols-[180px_1fr] gap-2">
                    <span className="font-semibold text-gray-900">Size:</span>
                    <span>{product.size}</span>
                  </div>

                  <div className="grid grid-cols-[180px_1fr] gap-2">
                    <span className="font-semibold text-gray-900">Fiber Composition:</span>
                    <span>{product.fiberComposition}</span>
                  </div>

                  <div className="grid grid-cols-[180px_1fr] gap-2">
                    <span className="font-semibold text-gray-900">Fabric Description:</span>
                    <span>{product.fabricDescription}</span>
                  </div>

                  <div className="grid grid-cols-[180px_1fr] gap-2">
                    <span className="font-semibold text-gray-900">Dry Weight:</span>
                    <span>{product.dryWeight}</span>
                  </div>

                  <div className="grid grid-cols-[180px_1fr] gap-2">
                    <span className="font-semibold text-gray-900">Coloration Method:</span>
                    <span>
                      {product.colorationMethod || "Not specified"}
                      {!product.colorationMethod && (
                        <Link
                          href={`/analysis/${product.id}/coloration-method`}
                          className="ml-2 text-blue-600 hover:underline"
                        >
                          [Request Update]
                        </Link>
                      )}
                    </span>
                  </div>

                  <div className="grid grid-cols-[180px_1fr] gap-2">
                    <span className="font-semibold text-gray-900">Mechanical and Chemical Finishes:</span>
                    <div>
                      <ul className="list-disc pl-5 space-y-1">
                        {product.finishes?.map((finish, index) => (
                          <li key={index}>{finish}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-[180px_1fr] gap-2">
                    <span className="font-semibold text-gray-900">Fiber Loss Grade:</span>
                    <span>
                      {product.fiberLossGrade || "Not specified"}
                      {!product.fiberLossGrade && (
                        <Link
                          href={`/analysis/${product.id}/fiber-loss-grade`}
                          className="ml-2 text-blue-600 hover:underline"
                        >
                          [Request Update]
                        </Link>
                      )}
                    </span>
                  </div>

                  <div className="grid grid-cols-[180px_1fr] gap-2">
                    <span className="font-semibold text-gray-900">Durability Testing Results:</span>
                    <span>
                      {product.durabilityResults || "Not specified"}
                      {!product.durabilityResults && (
                        <Link
                          href={`/analysis/${product.id}/durability-testing`}
                          className="ml-2 text-blue-600 hover:underline"
                        >
                          [Request Update]
                        </Link>
                      )}
                    </span>
                  </div>

                  <div className="pl-[180px] space-y-2">
                    <div>
                      <span className="font-semibold text-gray-900">Seam Strength:</span>
                      <span className="ml-2">
                        {product.seamStrength || "Not specified"}
                        {!product.seamStrength && (
                          <Link
                            href={`/analysis/${product.id}/seam-strength`}
                            className="ml-2 text-blue-600 hover:underline"
                          >
                            [Request Update]
                          </Link>
                        )}
                      </span>
                    </div>

                    <div>
                      <span className="font-semibold text-gray-900">Abrasion Resistance:</span>
                      <span className="ml-2">
                        {product.abrasionResistance || "Not specified"}
                        {!product.abrasionResistance && (
                          <Link
                            href={`/analysis/${product.id}/abrasion-resistance`}
                            className="ml-2 text-blue-600 hover:underline"
                          >
                            [Request Update]
                          </Link>
                        )}
                      </span>
                    </div>

                    <div>
                      <span className="font-semibold text-gray-900">Tensile Strength:</span>
                      <span className="ml-2">
                        {product.tensileStrength || "Not specified"}
                        {!product.tensileStrength && (
                          <Link
                            href={`/analysis/${product.id}/tensile-strength`}
                            className="ml-2 text-blue-600 hover:underline"
                          >
                            [Request Update]
                          </Link>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
