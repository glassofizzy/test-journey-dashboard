import React from 'react';
import { Link } from 'react-router-dom';
import StatusBadge from '@/components/test-run/StatusBadge';
import UserAvatar from '@/components/test-run/UserAvatar';

interface TestFlowOverviewProps {
  title: string;
  lastTestedDate: string;
  lastTestedBy: {
    name: string;
    type: string;
  };
  lastTestStatus: "Completed" | "In Progress" | "Failed";
  lastTestId: string;
}

const TestFlowOverview = ({
  title,
  lastTestedDate,
  lastTestedBy,
  lastTestStatus,
  lastTestId,
}: TestFlowOverviewProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border border-black">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
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