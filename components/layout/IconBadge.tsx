import clsx from "clsx";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

interface IconBadgeProps {
  icon: LucideIcon;
  count?: number;
}

const IconBadge = ({ icon: Icon, count = 5 }: IconBadgeProps) => {
  return (
    <Link
      className={clsx(
        "relative p-1 rounded-full",
        buttonVariants({ variant: "outline", size: "lg" }),
      )}
      href={"/notifications"}
    >
      <Icon className="text-muted-foreground w-6 h-6" />
      <div className="absolute -top-2 -right-1 rounded-full h-5 p-0.5 flex justify-center items-center text-white w-5 text-xs bg-red-400">
        {count}
      </div>
    </Link>
  );
};

export default IconBadge;
