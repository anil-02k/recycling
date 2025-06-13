import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ImageCircle({
  className,
  src,
  alt = "",
  size = "fluid",
}: {
  className?: string;
  src: string;
  alt?: string;
  size?: "fixed" | "fluid";
}) {
  return (
    <div
      className={cn("relative w-20 h-20  rounded-full overflow-hidden", {
        "md:h-28 md:w-28": size === "fluid",
      })}
    >
      <Image fill src={src} className="object-cover" alt={alt} />
    </div>
  );
}
