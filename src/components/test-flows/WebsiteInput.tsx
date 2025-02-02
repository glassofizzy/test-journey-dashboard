import React from 'react';
import { Input } from "@/components/ui/input";
import { NavigationButtons } from "./NavigationButtons";

interface WebsiteInputProps {
  websiteUrl: string;
  setWebsiteUrl: (url: string) => void;
  onNext: () => void;
}

export const WebsiteInput = ({ websiteUrl, setWebsiteUrl, onNext }: WebsiteInputProps) => {
  return (
    <div className="flex flex-col justify-center h-full space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Let's kick off testing. What's your website?</h2>
        <Input 
          type="url" 
          placeholder="www.carboncopies.ai"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          className="max-w-md"
        />
      </div>
      <NavigationButtons onNext={onNext} showPrevious={false} />
    </div>
  );
};