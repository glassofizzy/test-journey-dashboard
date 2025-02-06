
import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import StatusBadge from '@/components/test-run/StatusBadge';
import UserAvatar from '@/components/test-run/UserAvatar';

interface PreviousRun {
  id: string;
  status: "Completed" | "In Progress" | "Cancelled";
  testedBy: {
    name: string;
    type: string;
  };
  date: string;
  journeyId: string;
  url: string;  // Added URL field
}

interface PreviousRunsProps {
  runs: PreviousRun[];
}

const PreviousRuns = ({ runs }: PreviousRunsProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border border-black">
      <h2 className="text-2xl font-bold mb-4">Previous test runs</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Test ID</TableHead>
            <TableHead>Test Status</TableHead>
            <TableHead>Tested by</TableHead>
            <TableHead>Test date</TableHead>
            <TableHead>Test URL</TableHead>
            <TableHead>Test Results</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {runs.map((run) => (
            <TableRow key={run.id}>
              <TableCell>{run.id}</TableCell>
              <TableCell>
                <StatusBadge status={run.status} />
              </TableCell>
              <TableCell>
                <UserAvatar name={run.testedBy.name} type={run.testedBy.type} />
              </TableCell>
              <TableCell>{run.date}</TableCell>
              <TableCell>
                <span className="text-gray-600">{run.url}</span>
              </TableCell>
              <TableCell>
                <Link to={`/journey/${run.journeyId}`} className="text-accent hover:underline">
                  View Details
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PreviousRuns;
