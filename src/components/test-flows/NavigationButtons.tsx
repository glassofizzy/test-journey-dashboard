import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavigationButtonsProps {
  onNext: () => void;
  onPrevious?: () => void;
  showPrevious?: boolean;
  buttonText?: string;
}

export const NavigationButtons = ({ 
  onNext, 
  onPrevious, 
  showPrevious = true,
  buttonText = "Next"
}: NavigationButtonsProps) => {
  return (
    <div className="flex gap-4">
      {showPrevious && onPrevious && (
        <Button 
          onClick={onPrevious}
          variant="outline"
          className="border-black hover:bg-[#bb6bd9] hover:text-white hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
      )}
      <Button 
        onClick={onNext}
        className="bg-black hover:bg-[#bb6bd9] text-white border border-black hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
      >
        {buttonText}
        {buttonText === "Next" && <ArrowRight className="ml-2 h-4 w-4" />}
      </Button>
    </div>
  );
};