
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import PriorityBadge from './PriorityBadge';
import BugActions from './BugActions';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from 'react';

interface Bug {
  title: string;
  priority: string;
  description: string;
  treatment: string;
  highlightArea?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

interface BugItemProps {
  bug: Bug;
  isSelected: boolean;
  onClick: () => void;
}

const BugItem = ({ bug, isSelected, onClick }: BugItemProps) => {
  const [isIgnored, setIsIgnored] = useState(false);
  const [ignoreReason, setIgnoreReason] = useState<string>('');

  const handleIgnore = (reason: string) => {
    setIsIgnored(true);
    setIgnoreReason(reason);
    console.log(`Bug "${bug.title}" ignored for reason: ${reason}`);
  };

  return (
    <li 
      className={cn(
        "border-[1.5px] border-black p-4 transition-all duration-200 group relative",
        "hover:translate-x-[-4px] hover:translate-y-[-4px]",
        "hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        isSelected && "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        isIgnored ? "bg-[#f2f0ef] text-gray-400" : "bg-white"
      )}
      onClick={onClick}
      onMouseEnter={() => {
        if (bug.highlightArea) {
          const event = new CustomEvent('highlightArea', { 
            detail: bug.highlightArea 
          });
          window.dispatchEvent(event);
        }
      }}
      onMouseLeave={() => {
        if (!isSelected) {
          const event = new CustomEvent('highlightArea', { 
            detail: null 
          });
          window.dispatchEvent(event);
        }
      }}
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className={cn("font-medium", isIgnored && "text-gray-400")}>{bug.title}</h4>
        <PriorityBadge priority={bug.priority} />
      </div>
      <p className={cn("text-sm mb-2", isIgnored ? "text-gray-400" : "text-gray-600")}>{bug.description}</p>
      <p className={cn("text-sm font-medium mb-4", isIgnored && "text-gray-400")}>
        Possible solution: {bug.treatment}
      </p>
      <div className="flex justify-between items-center">
        <BugActions bugTitle={bug.title} />
        {!isIgnored ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm text-gray-500 hover:text-gray-700">
              <X className="w-4 h-4 mr-1" />
              Ignore
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white border border-black p-1 w-36">
              <DropdownMenuItem onClick={() => handleIgnore("Not important")} className="cursor-pointer hover:bg-gray-100">
                Not important
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleIgnore("Not relevant")} className="cursor-pointer hover:bg-gray-100">
                Not relevant
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleIgnore("Too generic")} className="cursor-pointer hover:bg-gray-100">
                Too generic
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleIgnore("Confusing")} className="cursor-pointer hover:bg-gray-100">
                Confusing
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <span className="text-sm text-gray-400">
            Ignored: {ignoreReason}
          </span>
        )}
      </div>
    </li>
  );
};

export default BugItem;
