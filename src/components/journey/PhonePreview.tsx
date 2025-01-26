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
    <div className="flex flex-col items-center bg-[#f2f0ef] p-4 rounded-lg">
      {/* Main Phone Preview */}
      <div className="w-[300px] h-[450px] border-[12px] border-black rounded-[40px] bg-white overflow-hidden relative">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-b-[20px] z-10" />
        {/* Status Bar */}
        <div className="absolute top-[6px] left-[24px] right-[24px] flex justify-between items-center z-20">
          <span className="text-white text-xs">9:25</span>
          <div className="flex items-center gap-1">
            <span className="text-white text-xs">100%</span>
          </div>
        </div>
        {/* Bottom Indicator */}
        <div className="absolute bottom-[8px] left-1/2 transform -translate-x-1/2 w-[120px] h-[4px] bg-black rounded-full z-10" />
        <img 
          src={currentImage}
          alt="Mobile screen"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Pause/Resume Button */}
      <Button
        onClick={onTogglePause}
        className="mt-4 border-2 border-black text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px]"
      >
        {isPaused ? "Resume" : "Pause"}
      </Button>

      {/* Thumbnails Carousel */}
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
                    if (!isPaused) {
                      onTogglePause();
                    }
                    const stepIndex = mockSteps.findIndex(s => s.screenshot === step.screenshot);
                    if (typeof window !== 'undefined') {
                      const event = new CustomEvent('updateCurrentImage', { 
                        detail: { index: stepIndex } 
                      });
                      window.dispatchEvent(event);
                    }
                  }}
                >
                  <div className="w-[100px] h-[180px] border-[6px] border-black rounded-[20px] bg-white overflow-hidden relative">
                    {/* Mini Notch for thumbnails */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[40px] h-[8px] bg-black rounded-b-[10px] z-10" />
                    <img 
                      src={step.screenshot}
                      alt={step.step}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2">
                      {getMoodIcon(step.mood)}
                    </div>
                  </div>
                  <div className="mt-2 text-black text-center text-sm">
                    {step.step}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-black text-black hover:bg-black hover:text-white" />
          <CarouselNext className="border-black text-black hover:bg-black hover:text-white" />
        </Carousel>
      </div>
    </div>
  );
};

export default PhonePreview;