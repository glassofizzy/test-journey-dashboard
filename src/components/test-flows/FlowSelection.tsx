import React from 'react';
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
    { id: 'google-login', label: 'Google social login flow' },
    { id: 'email-registration', label: 'Email registration flow' },
    { id: 'password-reset', label: 'Password reset flow' },
    { id: 'multiple-attempts', label: 'Multiple sign in attempts' }
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
  const flows = flowOptions[selectedUserGoal as keyof typeof flowOptions] || flowOptions.login;
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">
          For user goal: "{selectedUserGoal}", which specific user behaviors do you want to focus on?
        </h2>
        <RadioGroup defaultValue={flows[0].id} className="space-y-3">
          {flows.map((flow) => (
            <div key={flow.id} className="flex items-center space-x-2">
              <RadioGroupItem value={flow.id} id={flow.id} />
              <Label htmlFor={flow.id}>{flow.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <NavigationButtons onNext={onNext} onPrevious={onPrevious} buttonText="Start Test!" />
    </div>
  );
};