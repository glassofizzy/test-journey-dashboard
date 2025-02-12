
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavigationButtons } from "./NavigationButtons";
import { Plus } from 'lucide-react';

interface CustomVariable {
  key: string;
  value: string;
}

interface FlowDetailsProps {
  onNext: () => void;
  onPrevious: () => void;
  selectedFlow: string;
  flowDescription?: string;
}

export const FlowDetails = ({ onNext, onPrevious, selectedFlow, flowDescription }: FlowDetailsProps) => {
  const [customVariables, setCustomVariables] = useState<CustomVariable[]>([
    { key: '', value: '' }
  ]);

  const handleAddVariable = () => {
    setCustomVariables([...customVariables, { key: '', value: '' }]);
  };

  const handleVariableChange = (index: number, field: 'key' | 'value', value: string) => {
    const updatedVariables = customVariables.map((variable, i) => {
      if (i === index) {
        return { ...variable, [field]: value };
      }
      return variable;
    });
    setCustomVariables(updatedVariables);
  };

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
          
          <div className="space-y-3">
            <Label>Custom variables</Label>
            {customVariables.map((variable, index) => (
              <div key={index} className="space-y-2">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-1">Variable Name/Key</p>
                    <Input
                      value={variable.key}
                      onChange={(e) => handleVariableChange(index, 'key', e.target.value)}
                      placeholder="e.g., Language, or Payment Method"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-1">Variable value</p>
                    <Input
                      value={variable.value}
                      onChange={(e) => handleVariableChange(index, 'value', e.target.value)}
                      placeholder="e.g., English (UK) or Credit card"
                    />
                  </div>
                  {index === customVariables.length - 1 && (
                    <button
                      type="button"
                      onClick={handleAddVariable}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors self-end"
                      aria-label="Add more variables"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
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
