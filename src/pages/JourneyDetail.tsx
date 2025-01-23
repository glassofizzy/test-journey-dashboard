import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PhonePreview from '@/components/journey/PhonePreview';
import JourneyTabs from '@/components/journey/JourneyTabs';

interface ScreenContent {
  goal: string;
  observations: string;
  thoughts: string;
  actions: string;
}

const JourneyDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const mockScreenshots = [
    '/lovable-uploads/b3009f6d-ec6a-48ee-be48-c903a17ab320.png',
    '/lovable-uploads/9c8563d4-52f8-435d-a262-2a06308e4bc0.png',
    '/lovable-uploads/80662d63-8b84-401a-acb2-5d5ef0045bfb.png',
  ];

  const mockScreenContents: ScreenContent[] = [
    {
      goal: "Find the cheapest Bored Ape Yacht Club NFT with bunny ears",
      observations: "Initial search screen loaded",
      thoughts: "Need to enter the right search terms",
      actions: "Type 'Bored Ape Yacht Club' in the search bar"
    },
    {
      goal: "Find the cheapest Bored Ape Yacht Club NFT with bunny ears",
      observations: "Search results are showing BAYC NFTs",
      thoughts: "Need to filter for bunny ears specifically",
      actions: "Apply 'Bunny Ears' trait filter from the filters menu"
    },
    {
      goal: "Find the cheapest Bored Ape Yacht Club NFT with bunny ears",
      observations: "Now, the NFT results have bunny ears",
      thoughts: "Need to sort the NFTs by price to find the cheapest one",
      actions: "Tap on [031] to ensure the sorting is set to 'Price: Low to High'"
    }
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

  useEffect(() => {
    const handleUpdateCurrentImage = (event: CustomEvent<{ index: number }>) => {
      setCurrentImageIndex(event.detail.index);
    };

    window.addEventListener('updateCurrentImage', handleUpdateCurrentImage as EventListener);

    return () => {
      window.removeEventListener('updateCurrentImage', handleUpdateCurrentImage as EventListener);
    };
  }, []);

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
          <JourneyTabs currentContent={mockScreenContents[currentImageIndex]} />
        </div>
      </div>
    </div>
  );
};

export default JourneyDetail;