import React from 'react';
import { Button } from '@/components/ui/button';
import { Smile, Frown, Meh } from 'lucide-react';
import JourneyStep from '@/components/test-run/JourneyStep';

interface PhonePreviewProps {
  currentImage: string;
  isPaused: boolean;
  onTogglePause: () => void;
}

const PhonePreview = ({ currentImage, isPaused, onTogglePause }: PhonePreviewProps) => {
  // Mock data for thumbnails - in a real app this would come from props
  const mockSteps = [
    { step: 'Search NFTs', screenshot: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158', mood: 'happy' },
    { step: 'Filter Results', screenshot: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7', mood: 'neutral' },
  ];

  return (
    <div className="flex flex-col items-center bg-black p-8 rounded-lg">
      {/* Main Phone Preview */}
      <div className="w-[300px] h-[600px] border-[12px] border-black rounded-[40px] bg-white overflow-hidden relative">
        <img 
          src={currentImage}
          alt="Mobile screen"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Pause/Resume Button */}
      <Button
        onClick={onTogglePause}
        className="mt-6 border-2 border-white text-white hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px]"
      >
        {isPaused ? "Resume" : "Pause"}
      </Button>

      {/* Thumbnails */}
      <div className="mt-8 space-y-4 w-full max-w-[300px]">
        {mockSteps.map((step, index) => (
          <JourneyStep
            key={index}
            step={step.step}
            screenshot={step.screenshot}
            mood={step.mood as 'happy' | 'neutral' | 'sad'}
            onScreenshotClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default PhonePreview;