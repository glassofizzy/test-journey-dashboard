import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { NavigationButtons } from "./NavigationButtons";
import { Input } from "@/components/ui/input";

interface UserGoalSelectionProps {
  onNext: () => void;
  onPrevious: () => void;
  selectedUserGoal: string;
  setSelectedUserGoal: (goal: string) => void;
}

export const UserGoalSelection = ({ onNext, onPrevious, selectedUserGoal, setSelectedUserGoal }: UserGoalSelectionProps) => {
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customGoal, setCustomGoal] = useState("");

  const handleCustomGoalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomGoal(e.target.value);
    setSelectedUserGoal(e.target.value);
  };

  const handleRadioChange = (value: string) => {
    setShowCustomInput(value === "custom");
    setSelectedUserGoal(value === "custom" ? customGoal : value);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Tell us about your user goal</h2>
        <p className="text-gray-600 mb-4">What jobs do your users need to get done?</p>
        <RadioGroup 
          defaultValue={selectedUserGoal} 
          value={selectedUserGoal === customGoal ? "custom" : selectedUserGoal}
          onValueChange={handleRadioChange}
          className="space-y-3"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="login" id="login" />
            <Label htmlFor="login">Login</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="profile" id="profile" />
            <Label htmlFor="profile">Tweaking Profile</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="checkout" id="checkout" />
            <Label htmlFor="checkout">Add to cart, checkout</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="custom" id="custom" />
            <Label htmlFor="custom">Custom goal</Label>
          </div>
          {showCustomInput && (
            <div className="ml-6">
              <Input
                type="text"
                placeholder="Enter your custom goal"
                value={customGoal}
                onChange={handleCustomGoalChange}
                className="max-w-md"
              />
            </div>
          )}
        </RadioGroup>
      </div>
      <NavigationButtons onNext={onNext} onPrevious={onPrevious} />
    </div>
  );
};