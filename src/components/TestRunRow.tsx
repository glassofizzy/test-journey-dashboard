import React from 'react';
import { ChevronDown, ChevronUp, UserRound } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface TestRun {
  id: string;
  name: string;
  status: 'Completed' | 'In Progress' | 'Cancelled';
  user: {
    name: string;
    type: string;
  };
  createdAt: string;
  journey: string[];
  mood: ('happy' | 'neutral' | 'sad')[];
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
        return '😢';
      default:
        return '';
    }
  };

  return (
    <div className="border-2 border-black bg-white animate-slide-up">
      <div
        className="grid grid-cols-5 gap-4 p-4 cursor-pointer hover:bg-gray-50"
        onClick={onToggle}
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
          <div className="size-8 rounded-full border-2 border-black bg-white flex items-center justify-center">
            <UserRound className="size-5 stroke-[1.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium">{testRun.user.name}</span>
            <span className="text-sm text-gray-500">{testRun.user.type}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span>{testRun.createdAt}</span>
          {isExpanded ? (
            <ChevronUp className="size-5" />
          ) : (
            <ChevronDown className="size-5" />
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="p-4 border-t-2 border-black bg-gray-50 space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-medium">Journey:</span>
            <div className="flex items-center gap-2">
              {testRun.journey.map((step, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span>→</span>}
                  <span className="bg-white px-2 py-1 rounded border-2 border-black">
                    {step} {getMoodEmoji(testRun.mood[index])}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {testRun.screenshots && (
            <div>
              <span className="font-medium block mb-2">Screenshots:</span>
              <div className="grid grid-cols-5 gap-4">
                {testRun.screenshots.map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`Step ${index + 1}`}
                    className="w-full aspect-video object-cover rounded border-2 border-black cursor-pointer hover:opacity-75 transition-opacity"
                    onClick={() => navigate(`/journey/${testRun.id}`)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TestRunRow;