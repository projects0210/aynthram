import { cn } from "@/lib/utils";
import Image from "next/image";

export function AynthramLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-end gap-2", className)}>
      <Image src="/images/logo.png" alt="Aynthram Logo" width={300} height={53} className="h-11 w-auto" />
      <span className="text-xs font-medium text-foreground/80 tracking-wider pb-1">LEADERSHIP ACADEMY</span>
    </div>
  );
}
