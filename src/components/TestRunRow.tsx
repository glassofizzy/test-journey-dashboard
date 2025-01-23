import React from 'react';
import { ChevronDown, ChevronUp, UserRound } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500';
      case 'In Progress':
        return 'bg-blue-500';
      case 'Cancelled':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getMoodEmoji = (mood: 'happy' | 'neutral' | 'sad') => {
    switch (mood) {
      case 'happy':
        return '😊';
      case 'neutral':
        return '😐';
      case 'sad':
        return '😞';
      default:
        return '😐';
    }
  };

  return (
    <div className="group animate-slide-up">
      <div 
        onClick={onToggle}
        className={cn(
          "grid grid-cols-5 gap-4 p-4 cursor-pointer border-2 border-black bg-white",
          "hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200",
          "hover:translate-x-[-4px] hover:translate-y-[-4px]",
          "items-center"
        )}
      >
        <div className="font-mono">{testRun.id}</div>
        <div className="font-medium">{testRun.name}</div>
        <div className="flex items-center gap-2">
          <span className={cn(
            "px-2 py-1 rounded-full text-white text-sm border-2 border-black",
            getStatusColor(testRun.status)
          )}>
            {testRun.status}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center border-2 border-black">
            <UserRound className="w-5 h-5 stroke-[1.5]" />
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
        <div className="p-6 border-2 border-t-0 border-black bg-white">
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">User Journey</h3>
              <div className="flex items-center gap-4 overflow-x-auto pb-4">
                {testRun.journey?.map((step, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center gap-2 min-w-[200px]">
                      {testRun.screenshots && testRun.screenshots[index] && (
                        <img 
                          src={testRun.screenshots[index]} 
                          alt={step}
                          className="w-full h-32 object-cover border-2 border-black rounded"
                        />
                      )}
                      <div className="p-3 border-2 border-black rounded bg-white w-full text-center">
                        {step}
                      </div>
                      {testRun.mood && testRun.mood[index] && (
                        <div className="text-2xl">{getMoodEmoji(testRun.mood[index])}</div>
                      )}
                    </div>
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
