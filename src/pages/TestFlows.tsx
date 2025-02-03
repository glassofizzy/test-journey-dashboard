import React, { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import PhonePreview from '@/components/journey/PhonePreview';
import { WebsiteInput } from '@/components/test-flows/WebsiteInput';
import { UserGoalSelection } from '@/components/test-flows/UserGoalSelection';
import { PersonaSelection } from '@/components/test-flows/PersonaSelection';
import { PersonaCustomization } from '@/components/test-flows/PersonaCustomization';
import { FlowSelection } from '@/components/test-flows/FlowSelection';
import { TestProgress } from '@/components/test-flows/TestProgress';

const TestFlows = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [selectedPersona, setSelectedPersona] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const mockScreenshots = [
    '/lovable-uploads/b3009f6d-ec6a-48ee-be48-c903a17ab320.png',
  ];

  const personas = [
    {
      id: 'jordan',
      name: 'Jordan',
      age: 32,
      role: 'NFT Collector',
      city: 'San Francisco USA',
      language: 'EN-US',
      description: 'Jordan is a passionate digital art collector who is always on the lookout for unique NFT artworks that evoke deep emotions and artistic narratives.',
      avatar: '/lovable-uploads/b9870b76-a18c-410d-8bc2-596b8a1c4b7e.png'
    },
    {
      id: 'mina',
      name: 'Mina',
      age: 28,
      role: 'Creative Art Teacher',
      city: 'Seoul South Korea',
      language: 'KR',
      description: 'Mina is an art teacher interested in exploring innovative ways to integrate digital art into her curriculum and inspire her students.',
      avatar: '/lovable-uploads/6da9b3f2-e38b-4c0c-a519-4947d90e9f4f.png'
    }
  ];

  const handleNext = () => {
    if (currentStep === 5) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <WebsiteInput 
            websiteUrl={websiteUrl}
            setWebsiteUrl={setWebsiteUrl}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <UserGoalSelection
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 3:
        return (
          <PersonaSelection
            personas={personas}
            selectedPersona={selectedPersona}
            setSelectedPersona={setSelectedPersona}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 4:
        return (
          <PersonaCustomization
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 5:
        return (
          <FlowSelection
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 6:
        return (
          <TestProgress
            isLoading={isLoading}
            onReset={() => setCurrentStep(1)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f2f0ef]">
      <div className="max-w-7xl mx-auto flex h-[calc(100vh-64px)]">
        <div className="flex-1 bg-[#f2f0ef] relative p-8">
          <div className="relative">
            <PhonePreview
              currentImage={mockScreenshots[0]}
              isPaused={true}
              onTogglePause={() => {}}
              allImages={mockScreenshots}
              onImageSelect={() => {}}
            />
          </div>
        </div>

        <Separator orientation="vertical" className="h-full bg-black" />

        <div className="w-[500px] p-8 flex flex-col">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default TestFlows;