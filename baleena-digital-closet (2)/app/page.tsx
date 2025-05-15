import { Search } from "lucide-react"
import ProductCard from "@/components/product-card"
import Sidebar from "@/components/sidebar"
import FilterButton from "@/components/filter-button"
import UserProfile from "@/components/user-profile"
import { products } from "@/lib/product-data"

export default function DigitalCloset() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Digital Closet</h1>
              <p className="text-gray-600 mt-1">Explore fiber shedding data across your: SKUs</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 rounded-full border border-gray-200 w-64 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <UserProfile />
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            <FilterButton label="Season" />
            <FilterButton label="Garment Type" />
            <FilterButton label="Activity" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} id={product.id} image={product.image} name={product.name} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
