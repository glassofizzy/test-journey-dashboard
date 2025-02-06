import React from 'react';
import { useParams } from 'react-router-dom';
import TestFlowOverview from '@/components/test-flow-detail/TestFlowOverview';
import TestFlowSteps from '@/components/test-flow-detail/TestFlowSteps';
import PreviousRuns from '@/components/test-flow-detail/PreviousRuns';
import TicketsCreated from '@/components/test-flow-detail/TicketsCreated';

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
      <TestFlowOverview
        title={testFlow.title}
        lastTestedDate={testFlow.lastTestedDate}
        lastTestedBy={testFlow.lastTestedBy}
        lastTestStatus={testFlow.lastTestStatus}
        lastTestId={testFlow.lastTestId}
      />
      
      <TestFlowSteps
        description={testFlow.description}
        parameters={testFlow.parameters}
      />

      <PreviousRuns runs={testFlow.previousRuns} />

      <TicketsCreated tickets={testFlow.tickets} />

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