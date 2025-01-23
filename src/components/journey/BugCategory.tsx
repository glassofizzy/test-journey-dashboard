import React from 'react';
import { cn } from '@/lib/utils';

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
}: BugCategoryProps) => (
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
          className={cn(
            "bg-white border-2 border-black p-4 transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] cursor-pointer",
            selectedBugTitle === bug.title ? "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          )}
          onClick={() => {
            if (selectedBugTitle === bug.title) {
              onBugClick(undefined); // Unselect the bug
            } else {
              onBugClick(bug.highlightArea);
            }
          }}
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

export default BugCategory;