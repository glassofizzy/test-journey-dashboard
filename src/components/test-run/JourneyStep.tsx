
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface JourneyStepProps {
  step: string;
  screenshot?: string;
  mood?: 'happy' | 'neutral' | 'sad';
  onScreenshotClick: (e: React.MouseEvent) => void;
}

const JourneyStep = ({ step, screenshot, mood, onScreenshotClick }: JourneyStepProps) => {
  const getMoodImage = (mood: 'happy' | 'neutral' | 'sad') => {
    switch (mood) {
      case 'happy':
        return '/lovable-uploads/79b2d3bd-702d-4062-ad74-0b13e04bc5c7.png'; // Green checkmark for no bugs
      case 'neutral':
        return '/lovable-uploads/e80ca9ce-ab36-432a-852f-31b2a964a119.png'; // Yellow question marks for mixed priority
      case 'sad':
        return '/lovable-uploads/e9f7eaab-e99d-4200-81d5-59e30f8488b2.png'; // Red alarm for high priority
      default:
        return '/lovable-uploads/e80ca9ce-ab36-432a-852f-31b2a964a119.png';
    }
  };

  const getMoodTooltip = (mood: 'happy' | 'neutral' | 'sad') => {
    switch (mood) {
      case 'happy':
        return 'Looking great! No major issues detected—just minor tweaks';
      case 'neutral':
        return 'Medium-priority issues found. Worth reviewing.';
      case 'sad':
        return 'Critical issues detected! Immediate attention needed';
      default:
        return '';
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 min-w-[400px]">
      {screenshot && (
        <div className="group relative cursor-pointer transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px]">
          <img 
            src={screenshot} 
            alt={step}
            className="w-[400px] h-[250px] object-cover border border-black rounded bg-[#f2f0ef] group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            onClick={onScreenshotClick}
          />
        </div>
      )}
      <div className="text-center w-full">
        {step}
      </div>
      {mood && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="w-12 h-12">
                <img 
                  src={getMoodImage(mood)} 
                  alt={`Status: ${mood}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent 
              side="top" 
              className="max-w-[300px] p-2 bg-black text-white border border-black"
            >
              <p>{getMoodTooltip(mood)}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
};

export default JourneyStep;

