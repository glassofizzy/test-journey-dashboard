import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import MessageBubble from './MessageBubble';

const JourneyTabs = () => (
  <Tabs defaultValue="concerns">
    <TabsList className="w-full justify-start border-2 border-black bg-white p-1">
      {['Concerns', 'UX Improvements', 'Generated UI'].map((tab) => (
        <TabsTrigger
          key={tab}
          value={tab.toLowerCase().replace(' ', '-')}
          className={cn(
            "border-2 border-black data-[state=active]:bg-black data-[state=active]:text-white",
            "hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200",
            "hover:translate-x-[-4px] hover:translate-y-[-4px]",
            "flex-1 mx-1"
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
);

export default JourneyTabs;