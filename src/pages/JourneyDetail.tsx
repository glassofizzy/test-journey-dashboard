import React, { useState, useEffect, useRef } from 'react';
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
  const [highlightArea, setHighlightArea] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

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
        setCurrentImageIndex((prev) => {
          const nextIndex = prev === mockScreenshots.length - 1 ? 0 : prev + 1;
          // Reset highlight area when changing screens
          setHighlightArea(null);
          // Scroll the right panel to show the corresponding content
          if (rightPanelRef.current) {
            const panelHeight = rightPanelRef.current.scrollHeight;
            const scrollAmount = (panelHeight / mockScreenshots.length) * nextIndex;
            rightPanelRef.current.scrollTo({
              top: scrollAmount,
              behavior: 'smooth'
            });
          }
          return nextIndex;
        });
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const handleUpdateCurrentImage = (event: CustomEvent<{ index: number }>) => {
      setCurrentImageIndex(event.detail.index);
      // Reset highlight area when manually changing screens
      setHighlightArea(null);
    };

    window.addEventListener('updateCurrentImage', handleUpdateCurrentImage as EventListener);

    return () => {
      window.removeEventListener('updateCurrentImage', handleUpdateCurrentImage as EventListener);
    };
  }, []);

  const handleBugClick = (area?: { x: number, y: number, width: number, height: number }) => {
    if (area) {
      setIsPaused(true);
      setHighlightArea(area);
    } else {
      setHighlightArea(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8">
        <div className="bg-black rounded-lg relative">
          <div className="relative">
            <PhonePreview
              currentImage={mockScreenshots[currentImageIndex]}
              isPaused={isPaused}
              onTogglePause={() => {
                setIsPaused(!isPaused);
                if (!isPaused) {
                  setHighlightArea(null);
                }
              }}
            />
            {highlightArea && (
              <div 
                className="absolute border-2 border-accent pointer-events-none"
                style={{
                  left: `${highlightArea.x}px`,
                  top: `${highlightArea.y}px`,
                  width: `${highlightArea.width}px`,
                  height: `${highlightArea.height}px`,
                  maxWidth: '300px',
                  maxHeight: '450px'
                }}
              />
            )}
          </div>
        </div>

        <div ref={rightPanelRef} className="space-y-6 max-h-[800px] overflow-y-auto">
          <JourneyTabs 
            currentContent={mockScreenContents[currentImageIndex]}
            currentImageIndex={currentImageIndex}
            onBugClick={handleBugClick}
          />
        </div>
      </div>
    </div>
  );
};

export default JourneyDetail;