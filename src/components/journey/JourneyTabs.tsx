import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
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
  currentImageIndex: number;
  onBugClick: (area: { x: number, y: number, width: number, height: number }) => void;
}

interface Bug {
  title: string;
  priority: string;
  description: string;
  treatment: string;
  highlightArea?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

interface BugCategories {
  [key: string]: {
    color: string;
    bugs: Bug[];
  };
}

const bugCategories: BugCategories = {
  visual: {
    color: "#F2C94C",
    bugs: [
      {
        title: "Logo is blurry on mobile",
        priority: "High",
        description: "The logo appears pixelated on mobile devices. This detracts from the app's visual appeal.",
        treatment: "Verify the correct logo is uploaded for mobile or use SVG.",
        highlightArea: { x: 10, y: 10, width: 100, height: 40 }
      },
      {
        title: "Button color inconsistency",
        priority: "Medium",
        description: "Different buttons use varied styles across the app. This makes UI feel unpolished and inconsistent.",
        treatment: "Consistently apply the correct color palette on the UI or create a design system",
        highlightArea: { x: 120, y: 200, width: 80, height: 40 }
      }
    ]
  },
  content: {
    color: "#2F80ED",
    bugs: [
      {
        title: "API integration issues",
        priority: "High",
        description: "Data is not loading correctly in certain sections of the app. The API is returning unexpected responses.",
        treatment: "Debug API endpoints and check for data transformations."
      }
    ]
  },
  usability: {
    color: "#BB6BD9",
    bugs: [
      {
        title: "Slow response time in chat feature",
        priority: "Medium",
        description: "There is a noticeable lag when sending messages in the chat. This leads to frustrating user experience.",
        treatment: "Optimize server-side and check message rendering."
      }
    ]
  },
  localization: {
    color: "#2F80ED",
    bugs: [
      {
        title: "Invalid input handling error",
        priority: "Low",
        description: "Incorrect validation message appears when handling user-provided information in localized version.",
        treatment: "Review localization files to make sure correct text is showing up or review the input validator."
      }
    ]
  }
};

const BugCategory = ({ 
  title, 
  color, 
  bugs, 
  onBugClick 
}: { 
  title: string; 
  color: string; 
  bugs: Bug[]; 
  onBugClick: (area?: { x: number, y: number, width: number, height: number }) => void;
}) => (
  <div className="mb-6">
    <h3 
      className="text-white font-bold px-4 py-2 mb-4 border-2 border-black capitalize"
      style={{ backgroundColor: color }}
    >
      {title}
    </h3>
    <ul className="space-y-4">
      {bugs.map((bug, index) => (
        <li 
          key={index} 
          className="bg-white border-2 border-black p-4 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] cursor-pointer"
          onClick={() => onBugClick(bug.highlightArea)}
        >
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-medium">{bug.title}</h4>
            <span className="text-sm px-2 py-1 bg-gray-100 rounded">{bug.priority} Priority</span>
          </div>
          <p className="text-sm text-gray-600 mb-2">{bug.description}</p>
          <p className="text-sm font-medium">Possible solution: {bug.treatment}</p>
        </li>
      ))}
    </ul>
  </div>
);

const JourneyTabs = ({ currentContent, currentImageIndex, onBugClick }: JourneyTabsProps) => (
  <Tabs defaultValue="persona-insights">
    <TabsList className="w-full justify-start bg-white p-1">
      {[
        { label: 'Persona Insights', value: 'persona-insights' },
        { label: 'UX Optimization', value: 'ux-optimization' },
        { label: 'Generated UI', value: 'generated-ui' }
      ].map((tab) => (
        <TabsTrigger
          key={tab.label}
          value={tab.value}
          className={cn(
            "text-black border-2 border-transparent transition-all duration-200",
            "hover:border-black hover:translate-x-[-4px] hover:translate-y-[-4px]",
            "flex-1 mx-1",
            "data-[state=active]:bg-[#ffc000] data-[state=active]:border-black data-[state=active]:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          )}
        >
          {tab.label}
        </TabsTrigger>
      ))}
    </TabsList>

    <TabsContent value="persona-insights" className="mt-6 space-y-6 transition-all duration-300">
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
    </TabsContent>

    <TabsContent value="ux-optimization" className="mt-6">
      <div className="space-y-6">
        {Object.entries(bugCategories).map(([category, { color, bugs }]) => (
          <BugCategory 
            key={category}
            title={category}
            color={color}
            bugs={bugs}
            onBugClick={onBugClick}
          />
        ))}
      </div>
    </TabsContent>

    <TabsContent value="generated-ui" className="mt-6">
      {/* Generated UI content will go here */}
    </TabsContent>
  </Tabs>
);

export default JourneyTabs;
