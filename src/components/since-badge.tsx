import { cn } from "@/lib/utils";

export function SinceBadge({ className }: { className?: string }) {
  return (
    <div className={cn("inline-block", className)}>
      <div className="inline-flex items-center gap-x-2 rounded-full border border-yellow-300/60 bg-yellow-400/20 px-4 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
        <p className="text-sm font-medium text-yellow-100">
          Transforming Leaders Since 2023
        </p>
      </div>
    </div>
  );
}
