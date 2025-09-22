import { cn } from "@/lib/utils";

export function AynthramLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("text-primary", className)}
      width="150"
      height="32"
      viewBox="0 0 150 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="24"
        fontFamily="'Lora', serif"
        fontSize="24"
        fontWeight="bold"
        fill="currentColor"
      >
        aynthram
      </text>
    </svg>
  );
}
