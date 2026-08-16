import { LucideIcon } from "lucide-react";
import { Badge } from "../ui/badge";

interface IconBadgeProps {
  icon: LucideIcon;
  count?: number;
}

const IconBadge = ({ icon: Icon, count = 5 }: IconBadgeProps) => {
  return (
    <div className="relative inline-flex items-center">
      <Icon className="w-6 h-6 text-gray-700" />
      {count > 0 && (
        <Badge
          variant={"destructive"}
          className="absolute -top-2 -right-2 flex justify-center items-center rounded-full h-5 min-w-5 px-1 text-sm leading-none bg-red-400 text-white"
        >
          {count > 99 ? "99+" : count}
        </Badge>
      )}
    </div>
  );
};

export default IconBadge;
