import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import StatusBadge from './test-run/StatusBadge';
import UserAvatar from './test-run/UserAvatar';
import ExpandedContent from './test-run/ExpandedContent';

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
          "grid grid-cols-5 gap-4 p-4 cursor-pointer border-b border-black bg-white",
          "hover:bg-gray-50"
        )}
      >
        <div className="font-mono">{testRun.id}</div>
        <div className="font-medium">{testRun.name}</div>
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