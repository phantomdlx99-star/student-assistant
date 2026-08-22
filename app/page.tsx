import UniversalCard from "@/components/layout/UniversalCard";
import { Flame, Clock, CheckCircle2, TrendingUp } from "lucide-react";

export default function Page() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      <UniversalCard
        type="standard"
        title="Study Streak"
        value="12 days"
        subtitle="Keep it up! 🔥"
        theme="purple"
        icon={<Flame className="w-5 h-5" />}
      />

      {/* 2. Today's Study (Progress Variant) */}
      <UniversalCard
        type="progress"
        title="Today's Study"
        value="3h 45m"
        subtitle="of 6h goal"
        currentValue={3.75}
        maxValue={6}
        theme="blue"
        icon={<Clock className="w-5 h-5" />}
      />
      <UniversalCard
        type="ratio"
        title="Tasks Completed"
        currentCount={8}
        maxCount={12}
        subtitle="Today"
        theme="green"
        icon={<CheckCircle2 className="w-5 h-5" />}
      />

      {/* 4. Overall Progress */}
      <UniversalCard
        type="standard"
        title="Overall Progress"
        value="68%"
        subtitle="Keep going!"
        theme="orange"
        icon={<TrendingUp className="w-5 h-5" />}
      />
    </div>
  );
}
