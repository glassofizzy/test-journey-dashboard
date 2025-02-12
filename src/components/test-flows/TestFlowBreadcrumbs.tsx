
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface TestFlowBreadcrumbsProps {
  currentStep: number;
}

export const TestFlowBreadcrumbs = ({ currentStep }: TestFlowBreadcrumbsProps) => {
  const steps = [
    { label: 'Input webapp', step: 1 },
    { label: 'Select user goal', step: 2 },
    { label: 'Select Persona', step: 3 },
    { label: 'Change persona details', step: 4 },
    { label: 'Indicate user flow', step: 5 },
    { label: 'Provide details', step: 6 }
  ];

  return (
    <div className="sticky top-0 z-50 w-full p-4 mb-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        {steps.map((step, index) => (
          <React.Fragment key={step.step}>
            <div 
              className={`flex items-center ${
                currentStep === step.step 
                  ? 'bg-accent text-white font-bold border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' 
                  : currentStep > step.step
                  ? 'text-gray-600'
                  : 'text-gray-400'
              }`}
            >
              {step.label}
            </div>
            {index < steps.length - 1 && (
              <ArrowRight 
                className={`${
                  currentStep > step.step + 1 
                    ? 'text-gray-600' 
                    : 'text-gray-400'
                }`}
                size={20}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
