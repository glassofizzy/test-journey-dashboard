import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PhonePreview from '@/components/journey/PhonePreview';
import JourneyTabs from '@/components/journey/JourneyTabs';

const JourneyDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const mockScreenshots = [
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => 
          prev === mockScreenshots.length - 1 ? 0 : prev + 1
        );
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8">
        {/* Left Panel */}
        <div className="bg-black rounded-lg">
          <PhonePreview
            currentImage={mockScreenshots[currentImageIndex]}
            isPaused={isPaused}
            onTogglePause={() => setIsPaused(!isPaused)}
          />
        </div>

        {/* Right Panel */}
        <div className="space-y-6">
          <JourneyTabs />
        </div>
      </div>
    </div>
  );
};

export default JourneyDetail;