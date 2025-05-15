import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Sidebar from "@/components/sidebar"
import UserProfile from "@/components/user-profile"
import { products } from "@/lib/product-data"
import FiberLossChart from "@/components/charts/fiber-loss-chart"
import CompositionChart from "@/components/charts/composition-chart"

export default function AnalysisDashboard({
  params,
}: {
  params: { id: string; metric: string }
}) {
  // Find the product by ID
  const product = products.find((p) => p.id === params.id) || products[0]
  const metricName = params.metric.replace(/-/g, " ")

  // Capitalize the metric name
  const formattedMetricName = metricName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Link href={`/product/${params.id}`} className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="mr-2" size={20} />
              <span>Back to Product Overview</span>
            </Link>
            <UserProfile />
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.brand} {product.name}
            </h1>
            <div className="flex items-center mb-6">
              <p className="text-gray-600">Analysis Dashboard • {formattedMetricName}</p>
              <div className="ml-auto px-4 py-2 bg-amber-100 rounded-full border border-amber-300">
                <span className="font-bold text-amber-800">Grade: C</span>
              </div>
            </div>

            {/* Row 1: Product Image and Fiber Loss Chart */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Product Image - Slightly smaller */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="relative aspect-square w-11/12 mx-auto">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
                  {/* Hotspots */}
                  <div className="absolute top-[15%] right-[25%] w-14 h-14 rounded-full border-2 border-dashed border-orange-400"></div>
                  <div className="absolute top-[40%] left-[15%] w-14 h-14 rounded-full border-2 border-dashed border-orange-400"></div>
                  <div className="absolute bottom-[25%] left-[25%] w-14 h-14 rounded-full border-2 border-dashed border-orange-400"></div>
                </div>
              </div>

              {/* Fiber Loss Chart - Improved styling */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <span>Fiber Loss</span>
                  <span className="ml-2 px-2 py-0.5 text-sm bg-blue-100 text-blue-800 rounded">Critical Metric</span>
                </h2>
                <div className="h-[380px] bg-gradient-to-b from-white to-blue-50/30 rounded-lg p-4"> 
                  <FiberLossChart productId={params.id} />
                </div>
                <div className="mt-3 text-sm text-gray-500 flex justify-between">
                  <span>Initial shedding: High</span>
                  <span>Long-term stability: Good</span>
                </div>
              </div>
            </div>

            {/* Row 2: Composition Chart and Placeholder Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Composition Chart */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-4">Composition</h2>
                <div className="h-64">
                  <CompositionChart productId={params.id} />
                </div>
              </div>

              {/* Placeholder Image */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-4">Additional Metrics</h2>
                <div className="relative h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-gray-400 text-lg">Placeholder Image</div>
                </div>
              </div>
            </div>

            {/* Row 3: Full-width Placeholder Image */}
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-4">Detailed Analysis</h2>
                <div className="relative h-72 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-gray-400 text-lg">Large Placeholder Image</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
