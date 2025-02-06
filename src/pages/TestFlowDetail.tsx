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
    lastTestStatus: "Completed" as const,
    lastTestId: "123",
    description: "Steps Login, Search, Input search query, Browse stock/asset",
    parameters: {
      loginUsername: "",
      loginPassword: "",
      socialLoginToken: "",
      filesToUpload: "",
      others: ""
    },
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
      <div className="bg-white p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border border-black">
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

      {/* Section 2: Test Flow Steps and Details */}
      <div className="bg-white p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border border-black">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Test flow steps and details</h2>
          <Link to="#" className="text-accent hover:underline">Edit</Link>
        </div>
        <p className="text-gray-700 mb-6">{testFlow.description}</p>
        
        <h3 className="text-xl font-bold mb-4">Parameters</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Login username</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Login password</label>
            <input
              type="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
              placeholder="Enter password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Social login token</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
              placeholder="Enter token"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">File(s) to upload</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
              placeholder="Specify files to upload"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Others (please specify)</label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
              rows={3}
              placeholder="Enter any additional parameters"
            />
          </div>
        </div>
      </div>

      {/* Section 3: Previous test runs */}
      <div className="bg-white p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border border-black">
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

      {/* Section 4: Tickets created */}
      <div className="bg-white p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border border-black">
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

      {/* Section 5: Improved UI Designs */}
      <div className="bg-white p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border border-black">
        <h2 className="text-2xl font-bold mb-4">Improved UI Designs (beta)</h2>
        <div className="p-8 border border-dashed border-gray-300 rounded-lg text-center text-gray-500">
          Coming soon
        </div>
      </div>
    </div>
  );
};

export default TestFlowDetail;