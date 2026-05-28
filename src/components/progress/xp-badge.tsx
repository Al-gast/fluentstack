import { cn } from "@/lib/utils";

type XpBadgeProps = {
  value: number;
  className?: string;
};

export function XpBadge({ value, className }: XpBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-3 py-2 text-sm font-medium text-cyan-100",
        className,
      )}
    >
      <span className="inline-block h-2 w-2 rounded-full bg-cyan-300" />
      <span>{value} XP</span>
    </div>
  );
}
