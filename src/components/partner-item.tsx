import { cn } from "@/lib/utils";
import Image from "next/image";

export default function PartnerItem({
  logo,
  className,
}: {
  logo: string;
  className?: string;
}) {
  return (
    <div className={cn("relative h-24 w-24", className)}>
      <Image fill className="object-contain" src={logo} alt={""} />
    </div>
  );
}
