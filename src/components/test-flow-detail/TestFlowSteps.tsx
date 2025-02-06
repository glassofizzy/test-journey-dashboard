import React from 'react';
import { Link } from 'react-router-dom';

interface TestFlowStepsProps {
  description: string;
  parameters: {
    loginUsername: string;
    loginPassword: string;
    socialLoginToken: string;
    filesToUpload: string;
    others: string;
  };
}

const TestFlowSteps = ({ description, parameters }: TestFlowStepsProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border border-black">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Test flow steps and details</h2>
        <Link to="#" className="text-accent hover:underline">Edit</Link>
      </div>
      <p className="text-gray-700 mb-6">{description}</p>
      
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
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Parameter name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
              placeholder="Enter parameter name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Parameter value</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
              placeholder="Enter parameter value"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestFlowSteps;