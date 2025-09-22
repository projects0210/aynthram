import { cn } from "@/lib/utils";
import Image from "next/image";

export function AynthramLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image src="/images/logo.png" alt="Aynthram Logo" width={40} height={40} className="h-10 w-10" />
      <div className="flex items-baseline">
        <span className="text-2xl font-bold font-headline text-primary">Aynthram</span>
        <span className="ml-2 text-sm font-medium text-foreground/70 tracking-wider">Leadership Academy</span>
      </div>
    </div>
  );
}
