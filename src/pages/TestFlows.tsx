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
              className="bg-black hover:bg-[#bb6bd9] text-white border border-black hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
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
              className="bg-black hover:bg-[#bb6bd9] text-white border border-black hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
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
            <Button 
              onClick={handleNext}
              className="bg-black hover:bg-[#bb6bd9] text-white border border-black hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
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
            <Button 
              onClick={handleNext}
              className="bg-black hover:bg-[#bb6bd9] text-white border border-black hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
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
              className="bg-black hover:bg-[#bb6bd9] text-white border border-black hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
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
                  className="bg-black hover:bg-[#bb6bd9] text-white border border-black hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
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