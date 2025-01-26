import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: 'Completed' | 'In Progress' | 'Cancelled';
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
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

  return (
    <span className={cn(
      "px-4 py-1 rounded-full text-black text-sm border border-black w-28 text-center",
      getStatusColor(status)
    )}>
      {status}
    </span>
  );
};

export default StatusBadge;