
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavigationButtons } from "./NavigationButtons";

interface FlowDetailsProps {
  onNext: () => void;
  onPrevious: () => void;
  selectedFlow: string;
  flowDescription?: string;
}

export const FlowDetails = ({ onNext, onPrevious, selectedFlow, flowDescription }: FlowDetailsProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">
          You have chosen "{selectedFlow}"
        </h2>
        {flowDescription && (
          <p className="text-sm text-gray-600 italic mb-6">{flowDescription}</p>
        )}
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="login-username">Login username</Label>
            <Input
              id="login-username"
              type="text"
              placeholder="Enter your login username"
            />
          </div>
          
          <div>
            <Label htmlFor="login-password">Login Password</Label>
            <Input
              id="login-password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          
          <div>
            <Label htmlFor="custom-variable">Custom variable</Label>
            <Input
              id="custom-variable"
              type="text"
              placeholder="Enter variable value"
            />
          </div>
        </div>
      </div>
      <NavigationButtons 
        onNext={onNext} 
        onPrevious={onPrevious} 
        buttonText="Start Test!" 
      />
    </div>
  );
};
