import React from 'react';
import JourneyStep from './JourneyStep';

interface ExpandedContentProps {
  journey?: string[];
  screenshots?: string[];
  mood?: ('happy' | 'neutral' | 'sad')[];
  onScreenshotClick: (e: React.MouseEvent) => void;
}

const ExpandedContent = ({ journey, screenshots, mood, onScreenshotClick }: ExpandedContentProps) => {
  return (
    <div className="p-6 border-b border-black bg-white">
      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-3">User Journey (click to see assessment details)</h3>
          <div className="flex items-center gap-4 overflow-x-auto pb-4">
            {journey?.map((step, index) => (
              <React.Fragment key={index}>
                <JourneyStep
                  step={step}
                  screenshot={screenshots?.[index]}
                  mood={mood?.[index]}
                  onScreenshotClick={onScreenshotClick}
                />
                {index < (journey?.length || 0) - 1 && (
                  <div className="w-8 h-[1px] bg-black min-w-[32px]"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedContent;