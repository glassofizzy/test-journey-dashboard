import React from 'react';
import { ChevronRight } from 'lucide-react';

interface TestFlowBreadcrumbsProps {
  currentStep: number;
}

export const TestFlowBreadcrumbs = ({ currentStep }: TestFlowBreadcrumbsProps) => {
  const steps = [
    { label: 'Input webapp', step: 1 },
    { label: 'Select user goal', step: 2 },
    { label: 'Select Persona', step: 3 },
    { label: 'Change persona details', step: 4 },
    { label: 'Indicate user flow', step: 5 }
  ];

  return (
    <div className="flex items-center space-x-2 mb-8 text-sm">
      {steps.map((step, index) => (
        <React.Fragment key={step.step}>
          <div 
            className={`flex items-center ${
              currentStep === step.step 
                ? 'text-accent font-semibold' 
                : currentStep > step.step 
                  ? 'text-gray-500' 
                  : 'text-gray-300'
            }`}
          >
            <span className={`
              w-6 h-6 rounded-full flex items-center justify-center mr-1
              ${currentStep === step.step 
                ? 'bg-accent text-white' 
                : currentStep > step.step 
                  ? 'bg-gray-200' 
                  : 'bg-gray-100'
              }
            `}>
              {step.step}
            </span>
            {step.label}
          </div>
          {index < steps.length - 1 && (
            <ChevronRight className={`w-4 h-4 ${
              currentStep > step.step + 1 
                ? 'text-gray-500' 
                : 'text-gray-300'
            }`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};