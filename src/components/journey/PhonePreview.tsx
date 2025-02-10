
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PhonePreviewProps {
  currentImage: string;
  isPaused: boolean;
  onTogglePause: () => void;
  allImages: string[];
  onImageSelect: (index: number) => void;
}

const PhonePreview = ({ currentImage, isPaused, onTogglePause, allImages, onImageSelect }: PhonePreviewProps) => {
  return (
    <div className="flex flex-col items-center bg-[#f2f0ef] p-4 rounded-lg space-y-4">
      {/* Main Desktop Preview */}
      <div className="w-[800px] h-[500px] border border-black rounded-lg bg-[#1e1e1e] overflow-hidden relative">
        <img 
          src={currentImage}
          alt="Desktop screen"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Carousel */}
      <Carousel className="w-[800px]">
        <CarouselContent>
          {allImages.map((image, index) => (
            <CarouselItem key={index} className="basis-1/4 cursor-pointer" onClick={() => onImageSelect(index)}>
              <div className={`relative border-2 ${currentImage === image ? 'border-accent' : 'border-transparent'} rounded-lg overflow-hidden`}>
                <img 
                  src={image} 
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-full object-cover aspect-video"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default PhonePreview;
