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
        <img 
          src={screenshot} 
          alt={step}
          className="w-full h-32 object-cover border-2 border-black rounded cursor-pointer"
          onClick={onScreenshotClick}
        />
      )}
      <div className="p-3 border-2 border-black rounded bg-white w-full text-center">
        {step}
      </div>
      {mood && (
        <div className="text-2xl">{getMoodEmoji(mood)}</div>
      )}
    </div>
  );
};

export default JourneyStep;