
import React, { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import PhonePreview from '@/components/journey/PhonePreview';
import { WebsiteInput } from '@/components/test-flows/WebsiteInput';
import { UserGoalSelection } from '@/components/test-flows/UserGoalSelection';
import { PersonaSelection } from '@/components/test-flows/PersonaSelection';
import { PersonaCustomization } from '@/components/test-flows/PersonaCustomization';
import { FlowSelection } from '@/components/test-flows/FlowSelection';
import { FlowDetails } from '@/components/test-flows/FlowDetails';
import { TestProgress } from '@/components/test-flows/TestProgress';
import { TestFlowBreadcrumbs } from '@/components/test-flows/TestFlowBreadcrumbs';

const TestFlows = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [selectedPersona, setSelectedPersona] = useState('');
  const [selectedUserGoal, setSelectedUserGoal] = useState('login');
  const [selectedFlow, setSelectedFlow] = useState('');
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
    if (currentStep === 6) {
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
            selectedUserGoal={selectedUserGoal}
            setSelectedUserGoal={setSelectedUserGoal}
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
            selectedUserGoal={selectedUserGoal}
          />
        );
      case 6:
        return (
          <FlowDetails
            onNext={handleNext}
            onPrevious={handlePrevious}
            selectedFlow={selectedFlow}
            flowDescription="Choose Google Login option, input username and password on Google's hosted pages, confirm that we are successfully logged in"
          />
        );
      case 7:
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
      <div className="max-w-7xl mx-auto flex flex-col h-[calc(100vh-64px)]">
        <TestFlowBreadcrumbs currentStep={currentStep} />
        <div className="flex flex-1">
          {currentStep > 1 && (
            <>
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
            </>
          )}
          <div className={`${currentStep === 1 ? 'w-full' : 'w-[500px]'} p-8 flex flex-col`}>
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestFlows;
