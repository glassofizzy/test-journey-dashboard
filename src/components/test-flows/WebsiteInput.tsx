
import React from 'react';
import { Input } from "@/components/ui/input";
import { NavigationButtons } from "./NavigationButtons";
import { CheckCircle2 } from 'lucide-react';

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
      
      <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-2xl">
        <h3 className="text-lg font-bold mb-3">What can you evaluate?</h3>
        
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-[#bb6bd9] mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-bold">Live Websites & Web Apps</span> – Public or gated, as long as you have access, we're in.
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-[#bb6bd9] mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-bold">Staging Environments</span> – If it's online and testable, just bring your own login credentials.
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-[#bb6bd9] mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-bold">Prototypes</span> – Whether it's Lovable, v0, BoltNew, or a Figma link, we'll put it through its paces.
            </div>
          </div>
        </div>
        
        <p className="mt-4 font-medium text-center">If you can log in, we can test it.</p>
      </div>
    </div>
  );
};
