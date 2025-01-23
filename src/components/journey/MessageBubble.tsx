import React from 'react';
import { UserRound } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MessageBubbleProps {
  text: string;
  withIcon?: boolean;
}

const MessageBubble = ({ text, withIcon = true }: MessageBubbleProps) => (
  <div className="flex items-start gap-3 mb-4">
    {withIcon && (
      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center border-2 border-black flex-shrink-0">
        <UserRound className="w-5 h-5 stroke-[1.5]" />
      </div>
    )}
    <div className={cn(
      "p-4 bg-white rounded-lg border-2 border-black",
      "hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200",
      "hover:translate-x-[-4px] hover:translate-y-[-4px]"
    )}>
      {text}
    </div>
  </div>
);

export default MessageBubble;