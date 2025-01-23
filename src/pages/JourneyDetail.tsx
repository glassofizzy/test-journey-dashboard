import React, { useState, useEffect } from 'react';
import { UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { useParams } from 'react-router-dom';

const JourneyDetail = () => {
  const { id } = useParams(); // Get the journey ID from URL
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

  const MessageBubble = ({ text, withIcon = true }: { text: string, withIcon?: boolean }) => (
    <div className="flex items-start gap-3 mb-4">
      {withIcon && (
        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center border-2 border-black flex-shrink-0">
          <UserRound className="w-5 h-5 stroke-[1.5]" />
        </div>
      )}
      <div className={cn(
        "p-4 bg-white rounded-lg border-2 border-black",
        "hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200",
        "hover:translate-x-[-4px] hover:translate-y-[-4px]"
      )}>
        {text}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8">
        {/* Left Panel */}
        <div className="flex flex-col items-center">
          <div className="w-[300px] h-[600px] border-[12px] border-black rounded-[40px] bg-white overflow-hidden relative">
            <img 
              src={mockScreenshots[currentImageIndex]}
              alt="Mobile screen"
              className="w-full h-full object-cover"
            />
          </div>
          <Button
            onClick={() => setIsPaused(!isPaused)}
            className="mt-6 border-2 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px]"
          >
            {isPaused ? "Resume" : "Pause"}
          </Button>
        </div>

        {/* Right Panel */}
        <div className="space-y-6">
          <Tabs defaultValue="concerns">
            <TabsList className="w-full justify-start border-2 border-black bg-white p-1">
              {['Concerns', 'UX Improvements', 'Generated UI'].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab.toLowerCase().replace(' ', '-')}
                  className={cn(
                    "border-2 border-black data-[state=active]:bg-black data-[state=active]:text-white",
                    "hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200",
                    "hover:translate-x-[-4px] hover:translate-y-[-4px]"
                  )}
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-medium mb-2">Goal</h3>
                <MessageBubble 
                  text="Find the cheapest Bored Ape Yacht Club NFT with bunny ears"
                  withIcon={false}
                />
              </div>

              <div>
                <h3 className="font-medium mb-2">Observations</h3>
                <MessageBubble text="Now, the NFT results have bunny ears." />
              </div>

              <div>
                <h3 className="font-medium mb-2">Thoughts and concerns</h3>
                <MessageBubble text="Need to sort the NFTs by price to find the cheapest one" />
              </div>

              <div>
                <h3 className="font-medium mb-2">Actions</h3>
                <MessageBubble text="Tap on [031] to ensure the sorting is set to 'Price: Low to High'. Scroll through the results by swiping up to browse through other NFTs and compare prices" />
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default JourneyDetail;