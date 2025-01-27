import React from 'react';
import { Smile, Frown, Meh } from 'lucide-react';

interface PhonePreviewProps {
  currentImage: string;
  isPaused: boolean;
  onTogglePause: () => void;
}

const PhonePreview = ({ currentImage }: PhonePreviewProps) => {
  return (
    <div className="flex flex-col items-center bg-[#f2f0ef] p-4 rounded-lg">
      {/* Main Phone Preview */}
      <div className="w-[300px] h-[450px] border-[12px] border-black rounded-[40px] bg-white overflow-hidden relative">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-b-[20px] z-10" />
        {/* Status Bar */}
        <div className="absolute top-[6px] left-[24px] right-[24px] flex justify-between items-center z-20">
          <span className="text-white text-xs">9:25</span>
          <div className="flex items-center gap-1">
            <span className="text-white text-xs">100%</span>
          </div>
        </div>
        {/* Bottom Indicator */}
        <div className="absolute bottom-[8px] left-1/2 transform -translate-x-1/2 w-[120px] h-[4px] bg-black rounded-full z-10" />
        <img 
          src={currentImage}
          alt="Mobile screen"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default PhonePreview;