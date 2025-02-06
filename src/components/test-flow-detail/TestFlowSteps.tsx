
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from '@/components/ui/input';

interface TestFlowStepsProps {
  description: string;
  parameters: {
    loginUsername: string;
    loginPassword: string;
    searchQuery: string;
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

      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Description</h3>
        <p className="text-gray-700">{description}</p>
      </div>
      
      <h3 className="text-xl font-bold mb-4">Parameters</h3>
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="bg-secondary w-full flex mb-6 p-0 h-auto flex-col space-y-2">
          <TabsTrigger 
            value="login"
            className="w-full data-[state=active]:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] data-[state=active]:border data-[state=active]:border-black"
          >
            Login
          </TabsTrigger>
          <TabsTrigger 
            value="search"
            className="w-full data-[state=active]:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] data-[state=active]:border data-[state=active]:border-black"
          >
            Search
          </TabsTrigger>
          <TabsTrigger 
            value="custom"
            className="w-full data-[state=active]:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] data-[state=active]:border data-[state=active]:border-black"
          >
            Custom Parameter
          </TabsTrigger>
        </TabsList>

        <TabsContent value="login" className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Login username</label>
            <Input
              type="text"
              defaultValue="macy@ccmail.com"
              className="mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <Input
              type="password"
              defaultValue="********"
              className="mt-1"
            />
          </div>
        </TabsContent>

        <TabsContent value="search" className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Query</label>
            <Input
              type="text"
              defaultValue="Nvidia"
              className="mt-1"
            />
          </div>
        </TabsContent>

        <TabsContent value="custom">
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Do you need to define additional inputs to help CarbonCopy complete the test flow?</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name of input variable/key</label>
                <Input
                  type="text"
                  className="mt-1"
                  placeholder="e.g., Language, or Payment Method"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Specify the value</label>
                <Input
                  type="text"
                  className="mt-1"
                  placeholder="e.g., English (UK) or Credit card"
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TestFlowSteps;
