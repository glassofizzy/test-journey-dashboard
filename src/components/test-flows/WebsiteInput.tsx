
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { NavigationButtons } from "./NavigationButtons";
import { CheckCircle2, ChevronDown } from 'lucide-react';
import { 
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue 
} from "@/components/ui/select";

interface WebsiteInputProps {
  websiteUrl: string;
  setWebsiteUrl: (url: string) => void;
  onNext: () => void;
}

export const WebsiteInput = ({ websiteUrl, setWebsiteUrl, onNext }: WebsiteInputProps) => {
  const [protocol, setProtocol] = useState('https://');
  
  // Handle URL input without duplicating protocol
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Remove protocol if user manually types it
    const urlWithoutProtocol = value.replace(/^https?:\/\//, '');
    setWebsiteUrl(urlWithoutProtocol);
  };

  return (
    <div className="flex flex-col justify-center h-full space-y-12">
      <div>
        <h2 className="text-2xl font-bold mb-4">Let's kick off testing. What's your website?</h2>
        <div className="flex gap-2 items-center max-w-2xl">
          <div className="w-28">
            <Select value={protocol} onValueChange={setProtocol}>
              <SelectTrigger className="h-10 border-2 border-black transition-shadow duration-200 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <SelectValue placeholder="Protocol" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="https://">https://</SelectItem>
                <SelectItem value="http://">http://</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Input 
            type="text"
            placeholder="www.carboncopies.ai"
            value={websiteUrl}
            onChange={handleUrlChange}
            className="flex-1 border-2 border-black transition-shadow duration-200 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          />
          <NavigationButtons 
            onNext={onNext} 
            showPrevious={false} 
            className="whitespace-nowrap"
          />
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-2xl">
        <h3 className="text-lg font-bold mb-3">What can you evaluate?</h3>
        
        <div className="space-y-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#bb6bd9] flex-shrink-0" />
              <span className="font-bold">Live Websites & Web Apps</span>
            </div>
            <p className="text-gray-600 italic ml-7">Public or gated, as long as you have access, we're in.</p>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#bb6bd9] flex-shrink-0" />
              <span className="font-bold">Staging Environments</span>
            </div>
            <p className="text-gray-600 italic ml-7">If it's online and testable, just bring your own login credentials.</p>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#bb6bd9] flex-shrink-0" />
              <span className="font-bold">Prototypes</span>
            </div>
            <p className="text-gray-600 italic ml-7">Whether it's Lovable, v0, BoltNew, or a Figma link, we'll put it through its paces.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
