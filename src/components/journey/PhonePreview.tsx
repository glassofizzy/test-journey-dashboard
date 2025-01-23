import React from 'react';
import { Button } from '@/components/ui/button';

interface PhonePreviewProps {
  currentImage: string;
  isPaused: boolean;
  onTogglePause: () => void;
}

const PhonePreview = ({ currentImage, isPaused, onTogglePause }: PhonePreviewProps) => (
  <div className="flex flex-col items-center">
    <div className="w-[300px] h-[600px] border-[12px] border-black rounded-[40px] bg-white overflow-hidden relative">
      <img 
        src={currentImage}
        alt="Mobile screen"
        className="w-full h-full object-cover"
      />
    </div>
    <Button
      onClick={onTogglePause}
      className="mt-6 border-2 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px]"
    >
      {isPaused ? "Resume" : "Pause"}
    </Button>
  </div>
);

export default PhonePreview;