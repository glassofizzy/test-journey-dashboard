import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import MessageBubble from './MessageBubble';

interface ScreenContent {
  goal: string;
  observations: string;
  thoughts: string;
  actions: string;
}

interface JourneyTabsProps {
  currentContent: ScreenContent;
}

const JourneyTabs = ({ currentContent }: JourneyTabsProps) => (
  <Tabs defaultValue="concerns">
    <TabsList className="w-full justify-start bg-white p-1">
      {['Concerns', 'UX Improvements', 'Generated UI'].map((tab) => (
        <TabsTrigger
          key={tab}
          value={tab.toLowerCase().replace(' ', '-')}
          className={cn(
            "hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200",
            "hover:translate-x-[-4px] hover:translate-y-[-4px]",
            "flex-1 mx-1",
            tab === 'Concerns' && "!bg-[#ffc000] !shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
            tab !== 'Concerns' && "data-[state=active]:bg-black data-[state=active]:text-white"
          )}
        >
          {tab}
        </TabsTrigger>
      ))}
    </TabsList>

    <div className="mt-6 space-y-6 transition-all duration-300">
      <div>
        <h3 className="font-medium mb-2">Goal</h3>
        <MessageBubble 
          text={currentContent.goal}
          withIcon={false}
        />
      </div>

      <div>
        <h3 className="font-medium mb-2">Observations</h3>
        <MessageBubble text={currentContent.observations} />
      </div>

      <div>
        <h3 className="font-medium mb-2">Thoughts and concerns</h3>
        <MessageBubble text={currentContent.thoughts} />
      </div>

      <div>
        <h3 className="font-medium mb-2">Actions</h3>
        <MessageBubble text={currentContent.actions} />
      </div>
    </div>
  </Tabs>
);

export default JourneyTabs;