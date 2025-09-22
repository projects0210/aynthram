import { cn } from "@/lib/utils";
import Image from "next/image";

export function AynthramLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center", className)}>
      <Image src="/images/logo.png" alt="Aynthram Leadership Academy Logo" width={240} height={40} className="h-10 w-auto" />
    </div>
  );
}
