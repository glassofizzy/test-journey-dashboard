import React from 'react';
import { Label } from "@/components/ui/label";
import { NavigationButtons } from "./NavigationButtons";

interface PersonaCustomizationProps {
  onNext: () => void;
  onPrevious: () => void;
}

export const PersonaCustomization = ({ onNext, onPrevious }: PersonaCustomizationProps) => {
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
              <div className="font-medium">Jordan</div>
            </div>
            <div>
              <Label className="text-gray-600">Age</Label>
              <div className="font-medium">32</div>
            </div>
            <div>
              <Label className="text-gray-600">Socioecon</Label>
              <div className="font-medium">Middle-High</div>
            </div>
            <div>
              <Label className="text-gray-600">Role</Label>
              <div className="font-medium">NFT Collector</div>
            </div>
            <div>
              <Label className="text-gray-600">City</Label>
              <div className="font-medium">San Francisco USA</div>
            </div>
            <div>
              <Label className="text-gray-600">Language</Label>
              <div className="font-medium">EN-US</div>
            </div>
            <div>
              <Label className="text-gray-600">Currency</Label>
              <div className="font-medium">USD</div>
            </div>
            <div>
              <Label className="text-gray-600">Device</Label>
              <div className="font-medium">Macbook</div>
            </div>
            <div>
              <Label className="text-gray-600">Digital Exp</Label>
              <div className="font-medium">Expert</div>
            </div>
            <div>
              <Label className="text-gray-600">Frequented Apps</Label>
              <div className="font-medium">Discord, Coinbase, X</div>
            </div>
            <div>
              <Label className="text-gray-600">Username</Label>
              <div className="font-medium">jordan987@ccmail.com</div>
            </div>
            <div>
              <Label className="text-gray-600">Password</Label>
              <div className="font-medium">**********</div>
            </div>
            <div>
              <Label className="text-gray-600">Payment Method</Label>
              <div className="font-medium">Coinbase Wallet</div>
            </div>
            <div>
              <Label className="text-gray-600">Payment Detail</Label>
              <div className="font-medium">[Token]</div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Label className="text-gray-600">Description</Label>
          <p className="text-sm mt-1">
            Jordan is a passionate digital art collector who is always on the lookout for unique NFT artworks that evoke deep emotions and artistic narratives.
          </p>
        </div>
      </div>
      <NavigationButtons onNext={onNext} onPrevious={onPrevious} />
    </div>
  );
};