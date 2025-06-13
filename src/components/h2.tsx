import { cn } from "@/lib/utils";

export default function H2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "xs:text-3xl sm:w-[75%] md:w-full mx-auto text-2xl md:text-4xl lg:text-5xl font-unbounded font-bold text-center",
        className
      )}
    >
      {children}
    </h2>
  );
}
