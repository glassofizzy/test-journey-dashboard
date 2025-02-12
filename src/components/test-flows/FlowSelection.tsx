import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { NavigationButtons } from "./NavigationButtons";

interface FlowSelectionProps {
  onNext: () => void;
  onPrevious: () => void;
  selectedUserGoal?: string;
}

const flowOptions = {
  login: [
    { 
      id: 'google-login', 
      label: 'Google social login flow',
      description: 'Choose Google Login option, input username and password on Google\'s hosted pages, confirm that we are successfully logged in'
    },
    { 
      id: 'email-registration', 
      label: 'Email registration flow',
      description: 'Select to sign up for new account with email, input account information, confirm that we have successfully created an account'
    },
    { 
      id: 'password-reset', 
      label: 'Password reset flow',
      description: 'Go to sign in flow with a valid email, click on forget password, and trigger a password reset (we will not be able to access the password email)'
    },
    { 
      id: 'multiple-attempts', 
      label: 'Multiple sign in attempts',
      description: 'Select email login, type in incorrect email and password for 5 times'
    }
  ],
  profile: [
    { id: 'edit-profile', label: 'Edit profile information' },
    { id: 'change-password', label: 'Change password flow' },
    { id: 'upload-avatar', label: 'Profile picture upload' },
    { id: 'delete-account', label: 'Account deletion process' }
  ],
  checkout: [
    { id: 'guest-checkout', label: 'Guest checkout flow' },
    { id: 'saved-payment', label: 'Saved payment method' },
    { id: 'cart-abandonment', label: 'Cart abandonment' },
    { id: 'promo-code', label: 'Promo code application' }
  ]
};

export const FlowSelection = ({ onNext, onPrevious, selectedUserGoal = 'login' }: FlowSelectionProps) => {
  const [selectedFlow, setSelectedFlow] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customFlow, setCustomFlow] = useState('');
  
  const flows = flowOptions[selectedUserGoal as keyof typeof flowOptions] || [];
  
  const handleRadioChange = (value: string) => {
    setShowCustomInput(value === 'custom');
    setSelectedFlow(value);
  };

  const handleCustomFlowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomFlow(e.target.value);
    setSelectedFlow(e.target.value);
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">
          For user goal: "{selectedUserGoal}", which specific user behaviors do you want to focus on?
        </h2>
        <RadioGroup 
          value={selectedFlow}
          onValueChange={handleRadioChange}
          className="space-y-6"
        >
          {flows.map((flow) => (
            <div key={flow.id} className="space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={flow.id} id={flow.id} />
                <Label htmlFor={flow.id} className="font-medium">{flow.label}</Label>
              </div>
              <p className="text-sm text-gray-600 italic ml-6">{flow.description}</p>
            </div>
          ))}
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="custom" id="custom-flow" />
            <Label htmlFor="custom-flow">Custom flow</Label>
          </div>
        </RadioGroup>
      </div>
      <NavigationButtons 
        onNext={onNext} 
        onPrevious={onPrevious} 
        buttonText="Provide details →" 
      />
    </div>
  );
};
