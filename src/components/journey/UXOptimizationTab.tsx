import React from 'react';
import BugCategory from './BugCategory';
import { bugCategories } from './bugCategoriesData';

interface UXOptimizationTabProps {
  selectedBugTitle?: string;
  onBugClick: (area?: { x: number, y: number, width: number, height: number }) => void;
}

const UXOptimizationTab = ({ selectedBugTitle, onBugClick }: UXOptimizationTabProps) => {
  return (
    <div className="space-y-6">
      {Object.entries(bugCategories).map(([category, { color, bugs }]) => (
        <BugCategory 
          key={category}
          title={category}
          color={color}
          bugs={bugs}
          selectedBugTitle={selectedBugTitle}
          onBugClick={(area) => onBugClick(area)}
        />
      ))}
    </div>
  );
};

export default UXOptimizationTab;