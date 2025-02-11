
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import StatusBadge from './test-run/StatusBadge';
import UserAvatar from './test-run/UserAvatar';
import ExpandedContent from './test-run/ExpandedContent';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TestRun {
  id: string;
  name: string;
  status: 'Completed' | 'In Progress' | 'Cancelled';
  user: {
    name: string;
    type: string;
  };
  createdAt: string;
  journey?: string[];
  mood?: ('happy' | 'neutral' | 'sad')[];
  screenshots?: string[];
}

const getTestDescription = (testName: string): string => {
  const descriptions: Record<string, string> = {
    "Login, Browse": "Login with username and password, use the search bar and Input search query of stock ticker. Go to the stock page and note the stock movements in the last 2 weeks.",
    "Change Profile": "Navigate to profile settings, modify personal information including name and contact details, save changes and verify updates are reflected.",
    "Request to withdraw cash": "Access withdrawal section, input withdrawal amount, select bank account, confirm transaction details and submit withdrawal request.",
    "File a Support Ticket": "Access support section, select issue category, describe problem in detail, attach relevant screenshots and submit ticket for review.",
    "Fraudulent Deposit": "Identify suspicious transaction, document transaction details, report unauthorized deposit through security form, follow verification steps."
  };
  
  return descriptions[testName] || testName;
};

interface TestRunRowProps {
  testRun: TestRun;
  isExpanded: boolean;
  onToggle: () => void;
}

const TestRunRow: React.FC<TestRunRowProps> = ({ testRun, isExpanded, onToggle }) => {
  const navigate = useNavigate();

  const handleScreenshotClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const cleanId = testRun.id.replace('#', '');
    navigate(`/journey/${cleanId}`);
  };

  const handleNameClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (testRun.name === "Login, Browse") {
      navigate('/test-flows/login-cart');
    }
  };

  return (
    <div className="group">
      <div 
        onClick={onToggle}
        className={cn(
          "grid grid-cols-5 gap-4 p-4 cursor-pointer border-b border-black bg-white",
          "hover:bg-gray-50"
        )}
      >
        <div className="font-mono">{testRun.id}</div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div 
                className="font-medium hover:text-accent"
                onClick={handleNameClick}
              >
                {testRun.name}
              </div>
            </TooltipTrigger>
            <TooltipContent 
              side="top" 
              className="max-w-[300px] p-2 bg-black text-white border border-black"
            >
              <p>{getTestDescription(testRun.name)}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="flex items-center gap-2">
          <StatusBadge status={testRun.status} />
        </div>
        <UserAvatar name={testRun.user.name} type={testRun.user.type} />
        <div className="flex items-center justify-between">
          <span>{testRun.createdAt}</span>
          {isExpanded ? 
            <ChevronUp size={20} className="stroke-[1.5]" /> : 
            <ChevronDown size={20} className="stroke-[1.5]" />
          }
        </div>
      </div>
      
      {isExpanded && (
        <ExpandedContent
          journey={testRun.journey}
          screenshots={testRun.screenshots}
          mood={testRun.mood}
          onScreenshotClick={handleScreenshotClick}
        />
      )}
    </div>
  );
};

export default TestRunRow;
