import React from 'react';
import BugItem from './BugItem';

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

interface BugCategoryProps {
  title: string;
  color: string;
  bugs: Bug[];
  onBugClick: (area?: { x: number, y: number, width: number, height: number }) => void;
  selectedBugTitle?: string;
}

const BugCategory = ({ 
  title, 
  color, 
  bugs, 
  onBugClick,
  selectedBugTitle 
}: BugCategoryProps) => {
  return (
    <div className="mb-6">
      <h3 
        className="text-white font-bold px-4 py-2 mb-4 border-2 border-black capitalize"
        style={{ backgroundColor: color }}
      >
        {title}
      </h3>
      <ul className="space-y-4">
        {bugs.map((bug, index) => (
          <BugItem
            key={index}
            bug={bug}
            isSelected={selectedBugTitle === bug.title}
            onClick={() => {
              if (selectedBugTitle === bug.title) {
                onBugClick(undefined);
              } else {
                onBugClick(bug.highlightArea);
              }
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default BugCategory;