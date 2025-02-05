import React from 'react';

interface JourneyStepProps {
  step: string;
  screenshot?: string;
  mood?: 'happy' | 'neutral' | 'sad';
  onScreenshotClick: (e: React.MouseEvent) => void;
}

const JourneyStep = ({ step, screenshot, mood, onScreenshotClick }: JourneyStepProps) => {
  const getMoodEmoji = (mood: 'happy' | 'neutral' | 'sad') => {
    switch (mood) {
      case 'happy':
        return '😊';
      case 'neutral':
        return '😐';
      case 'sad':
        return '😞';
      default:
        return '😐';
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
        <div className="text-2xl">{getMoodEmoji(mood)}</div>
      )}
    </div>
  );
};

export default JourneyStep;