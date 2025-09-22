import { cn } from "@/lib/utils";
import Image from "next/image";

export function AynthramLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-end gap-2", className)}>
      <Image src="/images/logo.png" alt="Aynthram Logo" width={140} height={24} className="h-6 w-auto" />
      <span className="text-sm font-medium text-foreground/80 tracking-wide pb-0.5">LEADERSHIP ACADEMY</span>
    </div>
  );
}
