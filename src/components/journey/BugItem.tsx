import { cn } from '@/lib/utils';
import PriorityBadge from './PriorityBadge';
import BugActions from './BugActions';

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
  return (
    <li 
      className={cn(
        "bg-white border-2 border-black p-4 transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] cursor-pointer relative",
        isSelected ? "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      )}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-medium">{bug.title}</h4>
        <PriorityBadge priority={bug.priority} />
      </div>
      <p className="text-sm text-gray-600 mb-2">{bug.description}</p>
      <p className="text-sm font-medium mb-4">Possible solution: {bug.treatment}</p>
      <BugActions bugTitle={bug.title} />
    </li>
  );
};

export default BugItem;