interface FilterButtonProps {
  label: string
}

export default function FilterButton({ label }: FilterButtonProps) {
  return (
    <button className="px-5 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-gray-50 font-medium">
      {label}
    </button>
  )
}
