import React from 'react';
import MessageBubble from './MessageBubble';

interface ScreenContent {
  goal: string;
  observations: string;
  thoughts: string;
  actions: string;
}

interface PersonaInsightsTabProps {
  currentContent: ScreenContent;
}

const PersonaInsightsTab = ({ currentContent }: PersonaInsightsTabProps) => {
  return (
    <div className="space-y-6">
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
  );
};

export default PersonaInsightsTab;