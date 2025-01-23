import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Ticket, Sparkles } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

interface BugCategoryProps {
  title: string;
  color: string;
  bugs: Bug[];
  onBugClick: (area?: { x: number, y: number, width: number, height: number }) => void;
  selectedBugTitle?: string;
}

const BugCategory = ({ 
  title, 
  color, 
  bugs, 
  onBugClick,
  selectedBugTitle 
}: BugCategoryProps) => {
  const { toast } = useToast();
  const [generatingDesigns, setGeneratingDesigns] = useState<{ [key: string]: boolean }>({});

  const handleCreateTicket = (bug: Bug) => {
    // This is a placeholder for the actual JIRA integration
    console.log('Creating JIRA ticket for:', bug.title);
    
    // Simulate API call with random success/failure
    const isSuccess = Math.random() > 0.3;
    
    if (isSuccess) {
      console.log('JIRA Ticket has been successfully created');
      toast({
        title: "Success",
        description: "JIRA ticket has been created successfully",
        duration: 3000,
      });
    } else {
      console.error('Error creating JIRA ticket');
      toast({
        title: "Error",
        description: "Failed to create JIRA ticket. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const handleGenerateDesign = async (bug: Bug) => {
    console.log('Working on your designs...');
    setGeneratingDesigns(prev => ({ ...prev, [bug.title]: true }));
    
    // Simulate API call with 4 second delay
    await new Promise(resolve => setTimeout(resolve, 4000));
    
    setGeneratingDesigns(prev => ({ ...prev, [bug.title]: false }));
    toast({
      title: "Designs Generated",
      description: "New UI variations have been created based on your feedback",
      duration: 3000,
    });
  };

  return (
    <div className="mb-6">
      <h3 
        className="text-white font-bold px-4 py-2 mb-4 border-2 border-black capitalize"
        style={{ backgroundColor: color }}
      >
        {title}
      </h3>
      <ul className="space-y-4">
        {bugs.map((bug, index) => (
          <li 
            key={index} 
            className={cn(
              "bg-white border-2 border-black p-4 transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] cursor-pointer relative",
              selectedBugTitle === bug.title ? "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            )}
            onClick={() => {
              if (selectedBugTitle === bug.title) {
                onBugClick(undefined); // Unselect the bug
              } else {
                onBugClick(bug.highlightArea);
              }
            }}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium">{bug.title}</h4>
              <div className="flex items-center gap-2">
                <span className="text-sm px-2 py-1 bg-gray-100 rounded">
                  {bug.priority} Priority
                </span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent triggering the li onClick
                          handleCreateTicket(bug);
                        }}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Create JIRA ticket"
                      >
                        <Ticket className="h-4 w-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Create bug ticket in JIRA</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2">{bug.description}</p>
            <p className="text-sm font-medium mb-4">Possible solution: {bug.treatment}</p>
            <div className="flex justify-end">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering the li onClick
                        handleGenerateDesign(bug);
                      }}
                      disabled={generatingDesigns[bug.title]}
                      className={cn(
                        "p-2 hover:bg-gray-100 rounded-full transition-all",
                        generatingDesigns[bug.title] && "animate-pulse"
                      )}
                      aria-label="Fix UI with AI"
                    >
                      <Sparkles className="h-4 w-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Fix UI with AI</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BugCategory;