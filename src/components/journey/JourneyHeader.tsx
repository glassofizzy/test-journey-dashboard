
import React from 'react';
import { Link } from 'react-router-dom';
import { RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import UserAvatar from '@/components/test-run/UserAvatar';
import StatusBadge from '@/components/test-run/StatusBadge';

interface JourneyHeaderProps {
  title: string;
  lastTestedDate: string;
  lastTestedBy: {
    name: string;
    type: string;
  };
  lastTestStatus: "Completed" | "In Progress" | "Cancelled";
}

const JourneyHeader = ({
  title,
  lastTestedDate,
  lastTestedBy,
  lastTestStatus,
}: JourneyHeaderProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border border-black mb-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">{title}</h1>
        <Button 
          className="border border-black bg-black text-white hover:bg-[#bb6bd9] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-4px] hover:translate-y-[-4px]"
        >
          <RotateCw className="h-4 w-4 mr-2" />
          Re-run test
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <p className="text-sm text-gray-500">Last tested date</p>
          <p className="font-medium">{lastTestedDate}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Last test status</p>
          <StatusBadge status={lastTestStatus} />
        </div>
        <div>
          <p className="text-sm text-gray-500">Last tested by</p>
          <UserAvatar name={lastTestedBy.name} type={lastTestedBy.type} />
        </div>
        <div>
          <p className="text-sm text-gray-500">Last test details</p>
          <Link to="#" className="text-[#bb6bd9] hover:underline">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JourneyHeader;
