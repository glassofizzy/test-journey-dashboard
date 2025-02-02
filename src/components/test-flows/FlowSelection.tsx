import React from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { NavigationButtons } from "./NavigationButtons";

interface FlowSelectionProps {
  onNext: () => void;
  onPrevious: () => void;
}

export const FlowSelection = ({ onNext, onPrevious }: FlowSelectionProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Which user flow would you like to test?</h2>
        <RadioGroup defaultValue="login" className="space-y-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="login" id="login-flow" />
            <Label htmlFor="login-flow">Login Flow</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="signup" id="signup-flow" />
            <Label htmlFor="signup-flow">Sign Up Flow</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="checkout" id="checkout-flow" />
            <Label htmlFor="checkout-flow">Checkout Flow</Label>
          </div>
        </RadioGroup>
      </div>
      <NavigationButtons onNext={onNext} onPrevious={onPrevious} buttonText="Start Test!" />
    </div>
  );
};