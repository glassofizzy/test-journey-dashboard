
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface CustomParam {
  key: string;
  value: string;
  location: string;
}

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
  const [customParams, setCustomParams] = useState<CustomParam[]>([{
    key: '',
    value: '',
    location: ''
  }]);

  const addNewParam = () => {
    setCustomParams([...customParams, { key: '', value: '', location: '' }]);
  };

  const handleSave = () => {
    console.log('Saving custom parameters:', customParams);
    // TODO: Implement save functionality
  };

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
        <TabsList className="w-full flex mb-6 p-0 h-auto space-x-2 bg-transparent">
          <TabsTrigger 
            value="login"
            className="flex-1 bg-white data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] data-[state=active]:border data-[state=active]:border-black px-8 py-3"
          >
            Login
          </TabsTrigger>
          <TabsTrigger 
            value="search"
            className="flex-1 bg-white data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] data-[state=active]:border data-[state=active]:border-black px-8 py-3"
          >
            Search
          </TabsTrigger>
        </TabsList>

        <TabsContent value="login" className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Login username</label>
            <Input
              type="text"
              defaultValue={parameters.loginUsername}
              className="mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <Input
              type="password"
              defaultValue={parameters.loginPassword}
              className="mt-1"
            />
          </div>
          <div className="space-y-6 mt-8">
            <h4 className="text-lg font-medium">Do you need to define additional inputs to help CarbonCopy complete the test flow?</h4>
            {customParams.map((param, index) => (
              <div key={index} className="grid grid-cols-3 gap-4">
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
                <div>
                  <label className="block text-sm font-medium text-gray-700">Where in the flow is this input needed?</label>
                  <Input
                    type="text"
                    className="mt-1"
                    placeholder="e.g., Language selection on landing page"
                  />
                </div>
              </div>
            ))}
            <div className="flex justify-end gap-4 mt-6">
              <Button 
                variant="outline" 
                onClick={addNewParam}
                className="border-black hover:bg-gray-100"
              >
                Add more
              </Button>
              <Button onClick={handleSave}>
                Save
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="search" className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Query</label>
            <Input
              type="text"
              defaultValue={parameters.searchQuery}
              className="mt-1"
            />
          </div>
          <div className="space-y-6 mt-8">
            <h4 className="text-lg font-medium">Do you need to define additional inputs to help CarbonCopy complete the test flow?</h4>
            {customParams.map((param, index) => (
              <div key={index} className="grid grid-cols-3 gap-4">
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
                <div>
                  <label className="block text-sm font-medium text-gray-700">Where in the flow is this input needed?</label>
                  <Input
                    type="text"
                    className="mt-1"
                    placeholder="e.g., Language selection on landing page"
                  />
                </div>
              </div>
            ))}
            <div className="flex justify-end gap-4 mt-6">
              <Button 
                variant="outline" 
                onClick={addNewParam}
                className="border-black hover:bg-gray-100"
              >
                Add more
              </Button>
              <Button onClick={handleSave}>
                Save
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TestFlowSteps;
