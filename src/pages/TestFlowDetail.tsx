import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import StatusBadge from '@/components/test-run/StatusBadge';
import UserAvatar from '@/components/test-run/UserAvatar';

const TestFlowDetail = () => {
  const { id } = useParams();

  // Mock data - in a real app this would come from an API
  const testFlow = {
    title: "Login, Browse",
    lastTestedDate: "5 Feb 2024",
    lastTestedBy: {
      name: "Macy",
      type: "New User"
    },
    lastTestStatus: "Completed" as const, // Add 'as const' to ensure correct type
    lastTestId: "123",
    description: "Steps Login, Search, Input search query, Browse stock/asset",
    previousRuns: [
      {
        id: "#123",
        status: "Completed" as const,
        testedBy: {
          name: "Macy",
          type: "New User"
        },
        date: "5 Feb 2024",
        journeyId: "123"
      },
      {
        id: "#122",
        status: "In Progress" as const,
        testedBy: {
          name: "Macy",
          type: "New User"
        },
        date: "4 Feb 2024",
        journeyId: "122"
      }
    ],
    tickets: [
      {
        id: "TICK-001",
        title: "Missing Email Autofill",
        testId: "#123",
        url: "/journey/123"
      },
      {
        id: "TICK-002",
        title: "Biometric Mobile Login",
        testId: "#123",
        url: "/journey/123"
      }
    ]
  };

  return (
    <div className="space-y-8">
      {/* Section 1: Test Flow Overview */}
      <div>
        <h1 className="text-4xl font-bold mb-6">{testFlow.title}</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Last tested date</p>
            <p className="font-medium">{testFlow.lastTestedDate}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Last tested by</p>
            <UserAvatar name={testFlow.lastTestedBy.name} type={testFlow.lastTestedBy.type} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Last test status</p>
            <StatusBadge status={testFlow.lastTestStatus} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Last test details</p>
            <Link to={`/journey/${testFlow.lastTestId}`} className="text-accent hover:underline">
              View Details
            </Link>
          </div>
        </div>
      </div>

      <Separator className="bg-black" />

      {/* Section 2: View or modify test flow */}
      <div>
        <h2 className="text-2xl font-bold mb-4">View or modify test flow</h2>
        <p className="text-gray-700">{testFlow.description}</p>
      </div>

      <Separator className="bg-black" />

      {/* Section 3: Previous test runs */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Previous test runs</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Test ID</TableHead>
              <TableHead>Test Status</TableHead>
              <TableHead>Tested by</TableHead>
              <TableHead>Test date</TableHead>
              <TableHead>Test Results</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {testFlow.previousRuns.map((run) => (
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
                  <Link to={`/journey/${run.journeyId}`} className="text-accent hover:underline">
                    View Details
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Separator className="bg-black" />

      {/* Section 4: Tickets created */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Tickets created (beta)</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ticket ID</TableHead>
              <TableHead>Ticket title</TableHead>
              <TableHead>Test ID</TableHead>
              <TableHead>Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {testFlow.tickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell>{ticket.id}</TableCell>
                <TableCell>{ticket.title}</TableCell>
                <TableCell>{ticket.testId}</TableCell>
                <TableCell>
                  <Link to={ticket.url} className="text-accent hover:underline">
                    View Ticket
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Separator className="bg-black" />

      {/* Section 5: Improved UI Designs */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Improved UI Designs (beta)</h2>
        <div className="p-8 border border-dashed border-gray-300 rounded-lg text-center text-gray-500">
          Coming soon
        </div>
      </div>
    </div>
  );
};

export default TestFlowDetail;