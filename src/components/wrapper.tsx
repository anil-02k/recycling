import { cn } from "@/lib/utils";

export default function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(
      "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      "mobile-spacing sm:tablet-spacing lg:px-8",
      className
    )}>
      {children}
    </div>
  );
}