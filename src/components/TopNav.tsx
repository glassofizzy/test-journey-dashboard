import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TopNav() {
  return (
    <header className="h-16 bg-[#f2f0ef] border-b border-black">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="font-heading text-xl font-semibold">
          CarbonCopies
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            className="bg-accent hover:bg-accent/90 text-white border border-black rounded-[40px] px-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px]"
          >
            New +
          </Button>
          
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}