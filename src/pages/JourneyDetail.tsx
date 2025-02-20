import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import PhonePreview from '@/components/journey/PhonePreview';
import JourneyTabs from '@/components/journey/JourneyTabs';
import JourneyHeader from '@/components/journey/JourneyHeader';
import { Separator } from '@/components/ui/separator';
interface ScreenContent {
  goal: string;
  observations: string;
  thoughts: string;
  actions: string;
}
const JourneyDetail = () => {
  const {
    id
  } = useParams();
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
  const mockScreenshots = ['/lovable-uploads/cce84423-6de6-4352-bf23-ac3c4d8ca014.png', '/lovable-uploads/3fd815dc-c5e1-405d-88cd-1a3d0d839259.png', '/lovable-uploads/8088b33b-2d2b-418c-ab46-3ac187fa218e.png', '/lovable-uploads/23c0fe77-ffa5-421a-9b8a-b95f98f19b7b.png'];
  const mockScreenContents: ScreenContent[] = [{
    goal: "Access Robinhood account",
    observations: "Login screen loaded",
    thoughts: "Need to enter credentials",
    actions: "Enter email and password"
  }, {
    goal: "Find stock information",
    observations: "Browse screen with search functionality",
    thoughts: "Need to search for specific stock",
    actions: "Navigate to search interface"
  }, {
    goal: "Look up NVIDIA stock",
    observations: "Search results showing NVIDIA options",
    thoughts: "Found the right stock listing",
    actions: "Type 'Nvidia' in search bar"
  }, {
    goal: "Analyze NVIDIA performance",
    observations: "Stock details and chart visible",
    thoughts: "Can see price and performance metrics",
    actions: "Review stock information and charts"
  }];
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
        setCurrentImageIndex(prev => {
          const nextIndex = prev === mockScreenshots.length - 1 ? 0 : prev + 1;
          setHighlightArea(null);
          if (rightPanelRef.current) {
            const panelHeight = rightPanelRef.current.scrollHeight;
            const scrollAmount = panelHeight / mockScreenshots.length * nextIndex;
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
    const handleUpdateCurrentImage = (event: CustomEvent<{
      index: number;
    }>) => {
      setCurrentImageIndex(event.detail.index);
      setHighlightArea(null);
    };
    window.addEventListener('updateCurrentImage', handleUpdateCurrentImage as EventListener);
    return () => {
      window.removeEventListener('updateCurrentImage', handleUpdateCurrentImage as EventListener);
    };
  }, []);
  const handleBugClick = (area?: {
    x: number;
    y: number;
    width: number;
    height: number;
  }) => {
    if (area) {
      setIsPaused(true);
      setHighlightArea(area);
    } else {
      setHighlightArea(null);
    }
  };
  return <div className="min-h-screen bg-[#f2f0ef]">
      <div className="max-w-[1440px] mx-auto">
        <JourneyHeader title="Login, Browse" lastTestedDate="5 Feb 2024" lastTestedBy={{
        name: "Macy",
        type: "New User"
      }} lastTestStatus="Completed" />
        <div className="flex h-[calc(100vh-64px-140px)]">
          <div className="flex-1 bg-[#f2f0ef] relative p-8 px-0">
            <div className="relative">
              <PhonePreview currentImage={mockScreenshots[currentImageIndex]} isPaused={isPaused} onTogglePause={() => {
              setIsPaused(!isPaused);
              if (!isPaused) {
                setHighlightArea(null);
              }
            }} allImages={mockScreenshots} onImageSelect={index => {
              setCurrentImageIndex(index);
              setIsPaused(true);
            }} />
              {highlightArea && <div className="absolute border-2 border-accent pointer-events-none" style={{
              left: `${highlightArea.x}px`,
              top: `${highlightArea.y}px`,
              width: `${highlightArea.width}px`,
              height: `${highlightArea.height}px`,
              maxWidth: '800px',
              maxHeight: '500px'
            }} />}
            </div>
          </div>

          <Separator orientation="vertical" className="h-full bg-black" />

          <div ref={rightPanelRef} className="w-[500px] space-y-6 max-h-[800px] overflow-y-auto p-8">
            <JourneyTabs currentContent={mockScreenContents[currentImageIndex]} currentImageIndex={currentImageIndex} onBugClick={handleBugClick} onTabChange={tab => setActiveTab(tab)} />
          </div>
        </div>
      </div>
    </div>;
};
export default JourneyDetail;