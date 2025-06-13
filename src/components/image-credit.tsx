import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ImageCredit({ className }: { className?: string }) {
  return (
    <p className={cn("font-open-sans", className)}>
      Image From{" "}
      <Link className="text-primary" href={""}>
        Freepik
      </Link>
    </p>
  );
}
