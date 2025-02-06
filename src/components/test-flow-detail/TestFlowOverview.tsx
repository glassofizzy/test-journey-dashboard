import React from 'react';
import { Link } from 'react-router-dom';
import { RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatusBadge from '@/components/test-run/StatusBadge';
import UserAvatar from '@/components/test-run/UserAvatar';

interface TestFlowOverviewProps {
  title: string;
  lastTestedDate: string;
  lastTestedBy: {
    name: string;
    type: string;
  };
  lastTestStatus: "Completed" | "In Progress" | "Cancelled";
  lastTestId: string;
}

const TestFlowOverview = ({
  title,
  lastTestedDate,
  lastTestedBy,
  lastTestStatus,
  lastTestId,
}: TestFlowOverviewProps) => {
  const handleRerun = () => {
    console.log('Re-running test...');
    // Add rerun logic here
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border border-black">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">{title}</h1>
        <Button 
          onClick={handleRerun}
          className="flex items-center gap-2"
        >
          <RotateCw className="h-4 w-4" />
          Re-run test
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Last tested date</p>
          <p className="font-medium">{lastTestedDate}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Last tested by</p>
          <UserAvatar name={lastTestedBy.name} type={lastTestedBy.type} />
        </div>
        <div>
          <p className="text-sm text-gray-500">Last test status</p>
          <StatusBadge status={lastTestStatus} />
        </div>
        <div>
          <p className="text-sm text-gray-500">Last test details</p>
          <Link to={`/journey/${lastTestId}`} className="text-accent hover:underline">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestFlowOverview;