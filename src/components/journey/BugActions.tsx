import { useState } from 'react';
import { Ticket, Sparkles } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from '@/lib/utils';

interface BugActionsProps {
  bugTitle: string;
}

const BugActions = ({ bugTitle }: BugActionsProps) => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleCreateTicket = () => {
    console.log('Creating JIRA ticket for:', bugTitle);
    
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

  const handleGenerateDesign = async () => {
    console.log('Working on your designs...');
    setIsGenerating(true);
    
    await new Promise(resolve => setTimeout(resolve, 4000));
    
    setIsGenerating(false);
    toast({
      title: "Designs Generated",
      description: "New UI variations have been created based on your feedback",
      duration: 3000,
    });
  };

  return (
    <div className="flex justify-end gap-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCreateTicket();
              }}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
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
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleGenerateDesign();
              }}
              disabled={isGenerating}
              className={cn(
                "p-2 hover:bg-gray-100 rounded-full transition-colors",
                isGenerating && "animate-pulse"
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
  );
};

export default BugActions;