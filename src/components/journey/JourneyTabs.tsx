import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import PersonaInsightsTab from './PersonaInsightsTab';
import UXOptimizationTab from './UXOptimizationTab';

interface ScreenContent {
  goal: string;
  observations: string;
  thoughts: string;
  actions: string;
}

interface JourneyTabsProps {
  currentContent: ScreenContent;
  currentImageIndex: number;
  onBugClick: (area?: { x: number, y: number, width: number, height: number }) => void;
  onTabChange: (tab: string) => void;
}

const JourneyTabs = ({ currentContent, currentImageIndex, onBugClick, onTabChange }: JourneyTabsProps) => {
  const [selectedBugTitle, setSelectedBugTitle] = useState<string>();

  const handleBugClick = (area?: { x: number, y: number, width: number, height: number }, bugTitle?: string) => {
    setSelectedBugTitle(area ? bugTitle : undefined);
    onBugClick(area);
  };

  const tabs = [
    { id: 'persona-insights', label: 'Persona Insights', value: 'persona-insights' },
    { id: 'ux-optimization', label: 'UX Optimization', value: 'ux-optimization' },
    { 
      id: 'generated-ui',
      label: <span>Generated UI <span className="text-xs opacity-60">(coming soon)</span></span>,
      value: 'generated-ui'
    }
  ];

  return (
    <Tabs defaultValue="persona-insights" onValueChange={onTabChange}>
      <TabsList className="w-full justify-start bg-[#f2f0ef] p-1">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.value}
            className={cn(
              "text-black border-[1.5px] border-transparent transition-all duration-200",
              "hover:border-black hover:translate-x-[-4px] hover:translate-y-[-4px]",
              "flex-1 mx-1",
              "data-[state=active]:bg-[#ffc000] data-[state=active]:border-black data-[state=active]:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            )}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="persona-insights" className="mt-6">
        <PersonaInsightsTab currentContent={currentContent} />
      </TabsContent>

      <TabsContent value="ux-optimization" className="mt-6">
        <UXOptimizationTab 
          selectedBugTitle={selectedBugTitle}
          currentImageIndex={currentImageIndex}
          onBugClick={(area) => handleBugClick(area)}
        />
      </TabsContent>

      <TabsContent value="generated-ui" className="mt-6">
        {/* Generated UI content will go here */}
      </TabsContent>
    </Tabs>
  );
};

export default JourneyTabs;