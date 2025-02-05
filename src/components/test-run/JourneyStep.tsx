import React from 'react';

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
        return '/lovable-uploads/6ea23121-a4b7-47f3-9eaf-3cdadc350673.png'; // Green good status
      case 'neutral':
        return '/lovable-uploads/7b750562-d09a-4ed4-b47b-8775b7ee4064.png'; // Yellow maybe status
      case 'sad':
        return '/lovable-uploads/813ffb0b-d842-495c-a580-a17000c104dd.png'; // Red alarm status
      default:
        return '/lovable-uploads/7b750562-d09a-4ed4-b47b-8775b7ee4064.png'; // Default to yellow maybe
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 min-w-[200px]">
      {screenshot && (
        <div className="group relative cursor-pointer transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px]">
          <img 
            src={screenshot} 
            alt={step}
            className="w-full h-32 object-cover border border-black rounded bg-[#f2f0ef] group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            onClick={onScreenshotClick}
          />
        </div>
      )}
      <div className="p-3 border border-black rounded bg-white w-full text-center">
        {step}
      </div>
      {mood && (
        <div className="w-24 h-24">
          <img 
            src={getMoodImage(mood)} 
            alt={`Status: ${mood}`}
            className="w-full h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default JourneyStep;