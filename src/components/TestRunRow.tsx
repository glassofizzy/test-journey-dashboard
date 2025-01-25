import React from 'react';
import { ChevronDown, ChevronUp, UserRound } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import JourneyStep from './test-run/JourneyStep';

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

interface TestRunRowProps {
  testRun: TestRun;
  isExpanded: boolean;
  onToggle: () => void;
}

const TestRunRow: React.FC<TestRunRowProps> = ({ testRun, isExpanded, onToggle }) => {
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-status-completed';
      case 'In Progress':
        return 'bg-status-progress';
      case 'Cancelled':
        return 'bg-status-failed';
      default:
        return 'bg-gray-500';
    }
  };

  const handleScreenshotClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const cleanId = testRun.id.replace('#', '');
    navigate(`/journey/${cleanId}`);
  };

  return (
    <div className="group">
      <div 
        onClick={onToggle}
        className={cn(
          "grid grid-cols-5 gap-4 p-4 cursor-pointer border-b-2 border-black bg-white",
          "hover:bg-gray-50"
        )}
      >
        <div className="font-mono">{testRun.id}</div>
        <div className="font-medium">{testRun.name}</div>
        <div className="flex items-center gap-2">
          <span className={cn(
            "px-4 py-1 rounded-full text-black text-sm border-2 border-black w-28 text-center",
            getStatusColor(testRun.status)
          )}>
            {testRun.status}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center border-2 border-black">
            <UserRound className="w-5 h-5 stroke-[1.5] text-white" />
          </div>
          <div>
            <div className="text-sm font-medium">{testRun.user.name}</div>
            <div className="text-xs text-gray-500">{testRun.user.type}</div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span>{testRun.createdAt}</span>
          {isExpanded ? <ChevronUp size={20} className="stroke-[1.5]" /> : <ChevronDown size={20} className="stroke-[1.5]" />}
        </div>
      </div>
      
      {isExpanded && (
        <div className="p-6 border-b-2 border-black bg-white">
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">User Journey</h3>
              <div className="flex items-center gap-4 overflow-x-auto pb-4">
                {testRun.journey?.map((step, index) => (
                  <React.Fragment key={index}>
                    <JourneyStep
                      step={step}
                      screenshot={testRun.screenshots?.[index]}
                      mood={testRun.mood?.[index]}
                      onScreenshotClick={handleScreenshotClick}
                    />
                    {index < (testRun.journey?.length || 0) - 1 && (
                      <div className="w-8 h-[2px] bg-black min-w-[32px]"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestRunRow;