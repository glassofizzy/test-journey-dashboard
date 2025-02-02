import React from 'react';
import { Button } from "@/components/ui/button";

interface TestProgressProps {
  isLoading: boolean;
  onReset: () => void;
}

export const TestProgress = ({ isLoading, onReset }: TestProgressProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-12">
      {isLoading ? (
        <>
          <div className="w-32 h-32 rounded-full border-4 border-accent border-t-transparent animate-spin" />
          <h2 className="text-2xl font-bold text-center">Taking your CarbonCopy for a walk...</h2>
          <p className="text-gray-600 text-center">Your test is being processed. This might take a few minutes.</p>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-center">Test Complete!</h2>
          <p className="text-gray-600 text-center">Your CarbonCopy has finished testing the flow.</p>
          <Button 
            onClick={onReset}
            className="bg-black hover:bg-[#bb6bd9] text-white border border-black hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            Start New Test
          </Button>
        </>
      )}
    </div>
  );
};