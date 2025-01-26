import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TopNav() {
  return (
    <div className="h-16 bg-[#1A1F2C] border-b border-gray-700 flex items-center justify-between px-6">
      <div className="text-black font-['Varela_Round']">
        <span className="text-xl">CarbonCopies</span>
      </div>
      
      <div className="flex items-center gap-4">
        <Button 
          className="bg-[#bb6bd9] hover:bg-[#bb6bd9]/90 border-2 border-black rounded-md text-white"
        >
          New +
        </Button>
        
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}