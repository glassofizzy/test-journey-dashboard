import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { NavigationButtons } from "./NavigationButtons";
import { Input } from "@/components/ui/input";

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
  const [selectedFlow, setSelectedFlow] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customFlow, setCustomFlow] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    authOption: 'sms'
  });
  
  const flows = flowOptions[selectedUserGoal as keyof typeof flowOptions] || [];
  
  const handleRadioChange = (value: string) => {
    setShowCustomInput(value === 'custom');
    setSelectedFlow(value);
  };

  const handleCustomFlowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomFlow(e.target.value);
    setSelectedFlow(e.target.value);
  };

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const renderAdditionalFields = () => {
    switch (selectedFlow) {
      case 'google-login':
        return (
          <div className="space-y-4 mt-6">
            <div>
              <Label htmlFor="email">Email for Google Login</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                placeholder="Enter Google email"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange('password')}
                placeholder="Enter password"
              />
            </div>
          </div>
        );
      
      case 'email-registration':
        return (
          <div className="space-y-4 mt-6">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange('fullName')}
                placeholder="Enter full name"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                placeholder="Enter email"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange('password')}
                placeholder="Enter password"
              />
            </div>
          </div>
        );

      case 'password-reset':
        return (
          <div className="space-y-4 mt-6">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                placeholder="Enter email for password reset"
              />
            </div>
          </div>
        );

      case 'multiple-attempts':
        return (
          <div className="space-y-4 mt-6">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                placeholder="Enter email"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange('password')}
                placeholder="Enter password"
              />
            </div>
            <div>
              <Label htmlFor="authOption">Authentication Option</Label>
              <RadioGroup 
                value={formData.authOption}
                onValueChange={(value) => setFormData(prev => ({ ...prev, authOption: value }))}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sms" id="sms" />
                  <Label htmlFor="sms">SMS</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="email-auth" />
                  <Label htmlFor="email-auth">Email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="authenticator" id="authenticator" />
                  <Label htmlFor="authenticator">Authenticator</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      default:
        return null;
    }
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">
          For user goal: "{selectedUserGoal}", which specific user behaviors do you want to focus on?
        </h2>
        <RadioGroup 
          defaultValue={flows[0]?.id} 
          value={selectedFlow}
          onValueChange={handleRadioChange}
          className="space-y-3"
        >
          {flows.map((flow) => (
            <div key={flow.id} className="flex items-center space-x-2">
              <RadioGroupItem value={flow.id} id={flow.id} />
              <Label htmlFor={flow.id}>{flow.label}</Label>
            </div>
          ))}
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="custom" id="custom-flow" />
            <Label htmlFor="custom-flow">Custom flow</Label>
          </div>
          {showCustomInput && (
            <div className="ml-6">
              <Input
                type="text"
                placeholder="Describe your custom flow"
                value={customFlow}
                onChange={handleCustomFlowChange}
                className="max-w-md"
              />
            </div>
          )}
        </RadioGroup>

        {renderAdditionalFields()}
      </div>
      <NavigationButtons onNext={onNext} onPrevious={onPrevious} buttonText="Start Test!" />
    </div>
  );
};