import Image from "next/image"

export default function UserProfile() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200">
        <Image src="/placeholder.svg?height=40&width=40" alt="User profile" fill className="object-cover" />
      </div>
      <span className="font-medium text-gray-800">Neil Parker</span>
    </div>
  )
}
