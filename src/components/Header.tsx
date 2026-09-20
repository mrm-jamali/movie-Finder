import { Search } from "lucide-react";


function Header() {
  return (
  <div className="relative bg-blue-800 py-10">
  <div className="flex items-center justify-center gap-2 mb-4">
    <Search size={28} className="text-white" />
    <h1 className="text-3xl font-bold text-white">
      فیلم موردنظرتو پیدا کن
    </h1>
  </div>

 
</div>
  )
}

export default Header