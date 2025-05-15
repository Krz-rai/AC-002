import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Sidebar from "@/components/sidebar"
import UserProfile from "@/components/user-profile"
import { products } from "@/lib/product-data"
import FiberLossChart from "@/components/charts/fiber-loss-chart"
import CompositionChart from "@/components/charts/composition-chart"
import QualityMetricsChart from "@/components/charts/quality-metrics-chart"
import MicrographImage from "@/components/micrograph-image"

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
            <p className="text-gray-600 mb-6">Analysis Dashboard • {formattedMetricName}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Image with Hotspots */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="relative aspect-square">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
                  {/* Hotspots */}
                  <div className="absolute top-[15%] right-[25%] w-16 h-16 rounded-full border-2 border-dashed border-orange-400"></div>
                  <div className="absolute top-[40%] left-[15%] w-16 h-16 rounded-full border-2 border-dashed border-orange-400"></div>
                  <div className="absolute bottom-[25%] left-[25%] w-16 h-16 rounded-full border-2 border-dashed border-orange-400"></div>
                </div>
              </div>

              {/* Micrograph */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-3">Micrograph</h2>
                <div className="h-[300px]">
                  <MicrographImage productId={params.id} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* Fiber Loss Chart */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">Fiber Loss</h2>
              <FiberLossChart productId={params.id} />
            </div>

            {/* Composition Chart */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">Composition</h2>
              <CompositionChart productId={params.id} />
            </div>

            {/* Quality Metrics Chart */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">Comparing Fiber Loss with Quality Metrics</h2>
              <QualityMetricsChart productId={params.id} />
            </div>
          </div>

          {/* Analysis Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4">What this means for the team</h2>
            <p className="text-gray-700 leading-relaxed">
              Though shedding is somewhat elevated initially, the fiber loss curve quickly flattens. It correlates
              strongly with pilling scores and is within acceptable abrasion and tensile strength thresholds. The{" "}
              {product.name}'s {metricName} performance indicates that while there is room for improvement in initial
              fiber retention, the long-term durability meets our quality standards.
            </p>
            <div className="mt-6 flex justify-end">
              <button className="flex items-center text-blue-600 hover:text-blue-800">
                <span className="mr-2">Export Report</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
