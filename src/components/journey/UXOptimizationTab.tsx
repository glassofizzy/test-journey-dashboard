import React from 'react';
import BugCategory from './BugCategory';
import { bugCategoriesByScreen } from './bugCategoriesData';

interface UXOptimizationTabProps {
  selectedBugTitle?: string;
  currentImageIndex: number;
  onBugClick: (area?: { x: number, y: number, width: number, height: number }) => void;
}

const UXOptimizationTab = ({ selectedBugTitle, currentImageIndex, onBugClick }: UXOptimizationTabProps) => {
  const currentBugCategories = bugCategoriesByScreen[currentImageIndex] || {};

  return (
    <div className="space-y-6">
      {Object.entries(currentBugCategories).map(([category, { color, bugs }]) => (
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