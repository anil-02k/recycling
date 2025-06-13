import { PromoStat } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function PromoStatCard({
  promoStat,
  index,
}: {
  promoStat: PromoStat;
  index: number;
}) {
  return (
    <div
      className={cn(
        "bg-primary flex-1 p-8 rounded-4xl text-center md:text-left text-white",
        {
          "bg-accent text-black": (index + 1) % 2 === 0,
        }
      )}
    >
      <h3 className=" font-unbounded text-2xl sm:text-3xl md:text-4xl   font-bold">
        {promoStat.title}
      </h3>
      <h6 className="font-unbounded text-lg mt-5 font-bold">
        {promoStat.subtitle}
      </h6>
      <p className="mt-5 leading-[1.6] font-open-sans  w-[85%] md:w-full mx-auto">
        {promoStat.description}
      </p>
    </div>
  );
}
