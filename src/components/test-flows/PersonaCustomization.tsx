import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { NavigationButtons } from "./NavigationButtons";

interface PersonaCustomizationProps {
  onNext: () => void;
  onPrevious: () => void;
}

export const PersonaCustomization = ({ onNext, onPrevious }: PersonaCustomizationProps) => {
  const [personaData, setPersonaData] = useState({
    name: 'Jordan',
    age: '32',
    socioecon: 'Middle-High',
    role: 'NFT Collector',
    city: 'San Francisco USA',
    language: 'EN-US',
    currency: 'USD',
    device: 'Macbook',
    digitalExp: 'Expert',
    frequentedApps: 'Discord, Coinbase, X',
    username: 'jordan987@ccmail.com',
    password: '**********',
    paymentMethod: 'Coinbase Wallet',
    paymentDetail: '[Token]',
    description: 'Jordan is a passionate digital art collector who is always on the lookout for unique NFT artworks that evoke deep emotions and artistic narratives.'
  });

  const handleInputChange = (field: keyof typeof personaData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPersonaData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-6">Customize your CarbonCopy</h2>
        <div className="flex flex-col items-center mb-6">
          <img 
            src="/lovable-uploads/398f9af0-dae7-49ce-9af5-db987d8da915.png" 
            alt="Jordan's avatar" 
            className="w-24 h-24 rounded-full object-cover border border-black mb-6"
          />
          <div className="w-full grid grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <Label className="text-gray-600">Name</Label>
              <Input 
                value={personaData.name}
                onChange={handleInputChange('name')}
                className="font-medium"
              />
            </div>
            <div>
              <Label className="text-gray-600">Age</Label>
              <Input 
                value={personaData.age}
                onChange={handleInputChange('age')}
                className="font-medium"
              />
            </div>
            <div>
              <Label className="text-gray-600">Socioecon</Label>
              <Input 
                value={personaData.socioecon}
                onChange={handleInputChange('socioecon')}
                className="font-medium"
              />
            </div>
            <div>
              <Label className="text-gray-600">Role</Label>
              <Input 
                value={personaData.role}
                onChange={handleInputChange('role')}
                className="font-medium"
              />
            </div>
            <div>
              <Label className="text-gray-600">City</Label>
              <Input 
                value={personaData.city}
                onChange={handleInputChange('city')}
                className="font-medium"
              />
            </div>
            <div>
              <Label className="text-gray-600">Language</Label>
              <Input 
                value={personaData.language}
                onChange={handleInputChange('language')}
                className="font-medium"
              />
            </div>
            <div>
              <Label className="text-gray-600">Currency</Label>
              <Input 
                value={personaData.currency}
                onChange={handleInputChange('currency')}
                className="font-medium"
              />
            </div>
            <div>
              <Label className="text-gray-600">Device</Label>
              <Input 
                value={personaData.device}
                onChange={handleInputChange('device')}
                className="font-medium"
              />
            </div>
            <div>
              <Label className="text-gray-600">Digital Exp</Label>
              <Input 
                value={personaData.digitalExp}
                onChange={handleInputChange('digitalExp')}
                className="font-medium"
              />
            </div>
            <div>
              <Label className="text-gray-600">Frequented Apps</Label>
              <Input 
                value={personaData.frequentedApps}
                onChange={handleInputChange('frequentedApps')}
                className="font-medium"
              />
            </div>
            <div>
              <Label className="text-gray-600">Username</Label>
              <Input 
                value={personaData.username}
                onChange={handleInputChange('username')}
                className="font-medium"
              />
            </div>
            <div>
              <Label className="text-gray-600">Password</Label>
              <Input 
                type="password"
                value={personaData.password}
                onChange={handleInputChange('password')}
                className="font-medium"
              />
            </div>
            <div>
              <Label className="text-gray-600">Payment Method</Label>
              <Input 
                value={personaData.paymentMethod}
                onChange={handleInputChange('paymentMethod')}
                className="font-medium"
              />
            </div>
            <div>
              <Label className="text-gray-600">Payment Detail</Label>
              <Input 
                value={personaData.paymentDetail}
                onChange={handleInputChange('paymentDetail')}
                className="font-medium"
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Label className="text-gray-600">Description</Label>
          <textarea
            value={personaData.description}
            onChange={handleInputChange('description')}
            className="w-full mt-1 p-2 border rounded-md min-h-[100px] text-sm"
          />
        </div>
      </div>
      <NavigationButtons onNext={onNext} onPrevious={onPrevious} />
    </div>
  );
};