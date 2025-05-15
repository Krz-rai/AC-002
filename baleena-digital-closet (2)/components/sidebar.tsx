import Link from "next/link"
import { Home, BarChart2, FileText, Settings } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-72 bg-white border-r border-gray-200 p-4">
      <div className="mb-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <div className="absolute w-10 h-10 rounded-full bg-blue-300"></div>
            <div className="absolute top-0 left-1 w-4 h-4">
              <div className="w-4 h-4 relative">
                <div className="absolute w-2 h-3 bg-green-400 rounded-tr-full rounded-tl-full rotate-45 left-1"></div>
                <div className="absolute w-2 h-3 bg-green-400 rounded-tr-full rounded-tl-full -rotate-45 left-1"></div>
              </div>
            </div>
          </div>
          <span className="text-3xl font-semibold text-blue-500">Baleena</span>
        </Link>
      </div>

      <nav className="space-y-1">
        <Link href="/" className="flex items-center gap-3 px-4 py-3 text-blue-600 bg-blue-50 rounded-md font-medium">
          <Home size={20} />
          <span>Home</span>
        </Link>

        <Link href="/analysis" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md">
          <BarChart2 size={20} />
          <span>Analysis</span>
        </Link>

        <Link href="/reports" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md">
          <FileText size={20} />
          <span>Reports</span>
        </Link>

        <Link href="/settings" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md">
          <Settings size={20} />
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  )
}
