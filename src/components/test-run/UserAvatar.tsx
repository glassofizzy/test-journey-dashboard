import { UserRound } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface UserAvatarProps {
  name: string;
  type: string;
  showImage?: boolean;
}

const UserAvatar = ({ name, type, showImage = true }: UserAvatarProps) => {
  return (
    <div className="flex items-center gap-2">
      {showImage ? (
        <Avatar className="w-8 h-8 border border-black">
          <AvatarImage src="/lovable-uploads/0c27f2c9-f81c-461f-8393-2d5ff930fd0a.png" alt={name} />
          <AvatarFallback className="bg-accent">
            <UserRound className="w-5 h-5 stroke-[1.5] text-white" />
          </AvatarFallback>
        </Avatar>
      ) : (
        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center border border-black">
          <UserRound className="w-5 h-5 stroke-[1.5] text-white" />
        </div>
      )}
      <div>
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-gray-500">{type}</div>
      </div>
    </div>
  );
};

export default UserAvatar;