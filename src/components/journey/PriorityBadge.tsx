import { cn } from '@/lib/utils';

interface PriorityBadgeProps {
  priority: string;
}

const PriorityBadge = ({ priority }: PriorityBadgeProps) => {
  const getPriorityStyles = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <span className={cn(
      "text-sm px-2 py-1 rounded border",
      getPriorityStyles(priority)
    )}>
      {priority}
    </span>
  );
};

export default PriorityBadge;