import { cn } from "@/lib/utils";

export default function P({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("leading-[1.6] md:text-lg", className)}>{children}</p>
  );
}
