import React from 'react';
import { NavigationButtons } from "./NavigationButtons";

interface Persona {
  id: string;
  name: string;
  age: number;
  role: string;
  city: string;
  language: string;
  description: string;
  avatar: string;
}

interface PersonaSelectionProps {
  personas: Persona[];
  selectedPersona: string;
  setSelectedPersona: (id: string) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const PersonaSelection = ({ 
  personas, 
  selectedPersona, 
  setSelectedPersona, 
  onNext, 
  onPrevious 
}: PersonaSelectionProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Create your CarbonCopy</h2>
        <p className="text-gray-600 mb-4">Select the closest user persona to start with:</p>
        <div className="grid gap-4">
          {personas.map((persona) => (
            <div 
              key={persona.id}
              className={`p-4 rounded-lg cursor-pointer transition-all duration-200 border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                selectedPersona === persona.id 
                  ? 'border-accent bg-accent/10' 
                  : 'border-black hover:border-accent'
              }`}
              onClick={() => setSelectedPersona(persona.id)}
            >
              <div className="flex items-center gap-3">
                <img 
                  src={persona.avatar} 
                  alt={persona.name} 
                  className="w-12 h-12 rounded-full object-cover border border-black"
                />
                <div className="space-y-1">
                  <div className="font-bold">
                    {persona.name} ({persona.age})
                  </div>
                  <div className="text-sm text-gray-600">
                    {persona.role}, {persona.city}, {persona.language}
                  </div>
                  <div className="text-xs text-gray-500">
                    {persona.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NavigationButtons onNext={onNext} onPrevious={onPrevious} />
    </div>
  );
};