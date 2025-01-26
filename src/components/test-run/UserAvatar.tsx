import { UserRound } from 'lucide-react';

interface UserAvatarProps {
  name: string;
  type: string;
}

const UserAvatar = ({ name, type }: UserAvatarProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center border border-black">
        <UserRound className="w-5 h-5 stroke-[1.5] text-white" />
      </div>
      <div>
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-gray-500">{type}</div>
      </div>
    </div>
  );
};

export default UserAvatar;