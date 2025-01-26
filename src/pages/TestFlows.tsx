import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import PhonePreview from '@/components/journey/PhonePreview';
import { ArrowRight } from 'lucide-react';

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
      id: 'jane',
      name: 'Jane',
      description: 'Female, 46, Premium, Daily User',
      avatar: '/lovable-uploads/7c7085f8-e7ed-4e2f-968d-da0ed7d8e4bd.png'
    },
    {
      id: 'john',
      name: 'John',
      description: 'Male, 34, Free, Intermittent User',
      avatar: '/lovable-uploads/4efb6fde-7c07-4a4f-aac7-707a520a4e27.png'
    }
  ];

  const handleNext = () => {
    if (currentStep === 6) {
      setIsLoading(true);
      // Simulate loading
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Let's kick off testing. What's your website?</h2>
              <Input 
                type="url" 
                placeholder="www.carboncopies.ai"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                className="max-w-md"
              />
            </div>
            <Button 
              onClick={handleNext}
              className="bg-accent hover:bg-accent/90"
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Tell us about your user goal</h2>
              <p className="text-gray-600 mb-4">What jobs do your users need to get done?</p>
              <RadioGroup defaultValue="login" className="space-y-3">
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
              </RadioGroup>
            </div>
            <Button 
              onClick={handleNext}
              className="bg-accent hover:bg-accent/90"
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Create your CarbonCopy</h2>
              <p className="text-gray-600 mb-4">Select the closest user persona to start with:</p>
              <div className="grid gap-4">
                {personas.map((persona) => (
                  <div 
                    key={persona.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedPersona === persona.id 
                        ? 'border-accent bg-accent/10' 
                        : 'border-gray-200 hover:border-accent'
                    }`}
                    onClick={() => setSelectedPersona(persona.id)}
                  >
                    <div className="flex items-center gap-3">
                      <img 
                        src={persona.avatar} 
                        alt={persona.name} 
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-medium">{persona.name}</div>
                        <div className="text-sm text-gray-500">{persona.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Button 
              onClick={handleNext}
              className="bg-accent hover:bg-accent/90"
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Customize your carbon copy</h2>
              <div className="grid gap-4 max-w-md">
                <div>
                  <Label>Name</Label>
                  <Input defaultValue="Jane" />
                </div>
                <div>
                  <Label>Country</Label>
                  <Input defaultValue="United States" />
                </div>
                <div>
                  <Label>Digital Expertise</Label>
                  <Input defaultValue="Advanced" />
                </div>
                <div>
                  <Label>Language</Label>
                  <Input defaultValue="English" />
                </div>
              </div>
            </div>
            <Button 
              onClick={handleNext}
              className="bg-accent hover:bg-accent/90"
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Which user flow would you like to test?</h2>
              <RadioGroup defaultValue="login" className="space-y-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="login" id="login-flow" />
                  <Label htmlFor="login-flow">Login Flow</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="signup" id="signup-flow" />
                  <Label htmlFor="signup-flow">Sign Up Flow</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="checkout" id="checkout-flow" />
                  <Label htmlFor="checkout-flow">Checkout Flow</Label>
                </div>
              </RadioGroup>
            </div>
            <Button 
              onClick={handleNext}
              className="bg-accent hover:bg-accent/90"
            >
              Start Test!
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );
      case 6:
        return (
          <div className="flex flex-col items-center justify-center space-y-6 py-12">
            {isLoading ? (
              <>
                <div className="w-32 h-32 rounded-full border-4 border-accent border-t-transparent animate-spin" />
                <h2 className="text-2xl font-bold text-center">Taking your CarbonCopy for a walk...</h2>
                <p className="text-gray-600 text-center">Your test is being processed. This might take a few minutes.</p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-center">Test Complete!</h2>
                <p className="text-gray-600 text-center">Your CarbonCopy has finished testing the flow.</p>
                <Button 
                  onClick={() => setCurrentStep(1)}
                  className="bg-accent hover:bg-accent/90"
                >
                  Start New Test
                </Button>
              </>
            )}
          </div>
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
            />
          </div>
        </div>

        <Separator orientation="vertical" className="h-full bg-black" />

        <div className="w-[500px] p-8">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default TestFlows;