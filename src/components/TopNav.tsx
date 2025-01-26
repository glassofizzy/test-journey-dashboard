import { Button } from "./ui/button"

export function TopNav() {
  return (
    <nav className="h-16 bg-[#f2f0ef] border-r border-black flex items-center px-6 justify-between">
      <div className="font-heading text-lg font-medium">
        CarbonCopies
      </div>
      
      <div className="flex items-center gap-4">
        <Button 
          className="bg-accent hover:bg-accent/90 border-2 border-black text-white font-medium hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
        >
          + New
        </Button>
        
        <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  )
}