import React from 'react';
import { Button } from '@/components/ui/button';
import { Smile, Frown, Meh } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PhonePreviewProps {
  currentImage: string;
  isPaused: boolean;
  onTogglePause: () => void;
}

const PhonePreview = ({ currentImage, isPaused, onTogglePause }: PhonePreviewProps) => {
  // Mock data for thumbnails - updated to match the flow
  const mockSteps = [
    { step: 'Search NFTs', screenshot: '/lovable-uploads/b3009f6d-ec6a-48ee-be48-c903a17ab320.png', mood: 'happy' },
    { step: 'Filter Results', screenshot: '/lovable-uploads/9c8563d4-52f8-435d-a262-2a06308e4bc0.png', mood: 'neutral' },
    { step: 'View Details', screenshot: '/lovable-uploads/80662d63-8b84-401a-acb2-5d5ef0045bfb.png', mood: 'happy' },
  ];

  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case 'happy':
        return <Smile className="w-6 h-6 text-white" />;
      case 'neutral':
        return <Meh className="w-6 h-6 text-white" />;
      case 'sad':
        return <Frown className="w-6 h-6 text-white" />;
      default:
        return <Meh className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="flex flex-col items-center bg-black p-4 rounded-lg">
      {/* Main Phone Preview - reduced height from 600px to 450px */}
      <div className="w-[300px] h-[450px] border-[12px] border-black rounded-[40px] bg-white overflow-hidden relative">
        <img 
          src={currentImage}
          alt="Mobile screen"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Pause/Resume Button - reduced margin-top */}
      <Button
        onClick={onTogglePause}
        className="mt-4 border-2 border-white text-white hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px]"
      >
        {isPaused ? "Resume" : "Pause"}
      </Button>

      {/* Thumbnails Carousel - reduced margin-top and thumbnail heights */}
      <div className="mt-4 w-full max-w-[800px]">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {mockSteps.map((step, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <div 
                  className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
                  onClick={() => {
                    // Pause the auto-scroll
                    if (!isPaused) {
                      onTogglePause();
                    }
                    // Find the index of the clicked thumbnail in mockSteps
                    const stepIndex = mockSteps.findIndex(s => s.screenshot === step.screenshot);
                    // Update the parent component's currentImageIndex
                    if (typeof window !== 'undefined') {
                      const event = new CustomEvent('updateCurrentImage', { 
                        detail: { index: stepIndex } 
                      });
                      window.dispatchEvent(event);
                    }
                  }}
                >
                  <div className="w-[100px] h-[180px] border-[6px] border-white rounded-[20px] bg-white overflow-hidden relative">
                    <img 
                      src={step.screenshot}
                      alt={step.step}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2">
                      {getMoodIcon(step.mood)}
                    </div>
                  </div>
                  <div className="mt-2 text-white text-center text-sm">
                    {step.step}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-white text-white hover:bg-white hover:text-black" />
          <CarouselNext className="border-white text-white hover:bg-white hover:text-black" />
        </Carousel>
      </div>
    </div>
  );
};

export default PhonePreview;