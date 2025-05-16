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
            {/* Grade Banner */}
            <div className="bg-orange-50 border border-orange-200 rounded-md p-4 mb-6 flex items-center">
              <div className="bg-orange-100 text-orange-700 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">C</div>
              <div>
                <h2 className="text-lg font-semibold text-orange-800">Fiber Loss Grade: C</h2>
                <p className="text-orange-700 text-sm">Moderate shedding detected. Recommendations available below.</p>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.brand} {product.name}
            </h1>
            <p className="text-gray-600 mb-6">Analysis Dashboard • {formattedMetricName}</p>

            {/* Row 1: Product Image and Fiber Loss Chart */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Product Image - Made slightly smaller */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="relative mx-auto" style={{ width: "85%", height: "400px" }}>
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
                  {/* Hotspots */}
                  <div className="absolute top-[15%] right-[25%] w-16 h-16 rounded-full border-2 border-dashed border-orange-400"></div>
                  <div className="absolute top-[40%] left-[15%] w-16 h-16 rounded-full border-2 border-dashed border-orange-400"></div>
                  <div className="absolute bottom-[25%] left-[25%] w-16 h-16 rounded-full border-2 border-dashed border-orange-400"></div>
                </div>
              </div>

              {/* Fiber Loss Chart */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-4">Fiber Loss Over Time</h2>
                <div className="h-[400px]">
                  <FiberLossChart productId={params.id} />
                </div>
                <div className="mt-3 flex justify-between text-sm text-gray-500">
                  <span>Initial Washes</span>
                  <span>Extended Use Period</span>
                </div>
              </div>
            </div>

            {/* Row 2: Composition Chart and Additional Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Composition Chart */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-4">Composition</h2>
                <div className="h-64">
                  <CompositionChart productId={params.id} />
                </div>
              </div>

              {/* Additional Metrics Image */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-4">Additional Metrics</h2>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image 
                    src="/images/5.png" 
                    alt="Additional fiber metrics visualization" 
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Full-width Image */}
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-4">Detailed Analysis</h2>
                <div className="relative w-full h-auto rounded-lg overflow-hidden">
                  <Image 
                    src="/images/Screenshot.png" 
                    alt="Detailed fiber analysis visualization" 
                    width={1200}
                    height={450}
                    className="w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
