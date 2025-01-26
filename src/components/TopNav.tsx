import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TopNav() {
  return (
    <div className="h-16 bg-[#f2f0ef] border-b border-black px-6 flex items-center justify-between">
      <div className="font-heading text-xl font-semibold">
        CarbonCopies
      </div>
      
      <div className="flex items-center gap-4">
        <Button 
          className="bg-accent hover:bg-accent/90 text-white border-2 border-black rounded-[40px] px-6"
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