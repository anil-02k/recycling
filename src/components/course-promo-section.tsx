import { PromoStat } from "@/lib/types";
import CoursePromoCard from "./course-promo-card";
import CoursePromoImageCard from "./course-promo-image-card";
import PromoStatCard from "./promo-stat-card";
import Wrapper from "./wrapper";

const promoStats: PromoStat[] = [
  {
    id: 1,
    title: "100k",
    subtitle: "Tons of Waste Recycled",
    description: "Sample text. Click to select the Text Element.",
  },
  {
    id: 2,
    title: "8.5k",
    subtitle: "Plastic Bottles Saved",
    description: "Sample text. Click to select the Text Element.",
  },
];

export default function CoursePromoSection() {
  return (
    <section>
      <Wrapper>
        <div className="grid md:grid-cols-2  gap-6 lg:grid-cols-4">
          <div className="col-span-full lg:col-span-2 lg:row-span-2">
            <CoursePromoCard />
          </div>
          <div className="lg:col-span-2 col-span-full">
            <CoursePromoImageCard />
          </div>

          {promoStats.map((item, index) => (
            <div className="col-span-full md:col-span-1" key={item.id}>
              <PromoStatCard promoStat={item} index={index} />
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
