import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import PhonePreview from '@/components/journey/PhonePreview';
import JourneyTabs from '@/components/journey/JourneyTabs';
import { Separator } from '@/components/ui/separator';

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
  const [activeTab, setActiveTab] = useState('persona-insights');
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
    const handleHighlightArea = (event: CustomEvent<{
      x: number;
      y: number;
      width: number;
      height: number;
    } | null>) => {
      setHighlightArea(event.detail);
    };

    window.addEventListener('highlightArea', handleHighlightArea as EventListener);

    return () => {
      window.removeEventListener('highlightArea', handleHighlightArea as EventListener);
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isPaused && activeTab !== 'ux-optimization') {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => {
          const nextIndex = prev === mockScreenshots.length - 1 ? 0 : prev + 1;
          setHighlightArea(null);
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
  }, [isPaused, activeTab]);

  useEffect(() => {
    const handleUpdateCurrentImage = (event: CustomEvent<{ index: number }>) => {
      setCurrentImageIndex(event.detail.index);
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
    <div className="min-h-screen bg-[#f2f0ef]">
      <div className="max-w-7xl mx-auto flex">
        <div className="flex-1 bg-[#f2f0ef] relative p-8">
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

        <Separator orientation="vertical" className="h-[calc(100vh-64px)] bg-black" />

        <div ref={rightPanelRef} className="w-[500px] space-y-6 max-h-[800px] overflow-y-auto p-8">
          <JourneyTabs 
            currentContent={mockScreenContents[currentImageIndex]}
            currentImageIndex={currentImageIndex}
            onBugClick={handleBugClick}
            onTabChange={(tab) => setActiveTab(tab)}
          />
        </div>
      </div>
    </div>
  );
};

export default JourneyDetail;
