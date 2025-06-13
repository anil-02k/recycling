import { WasteService } from "@/lib/types";
import H2 from "./h2";
import ServiceCard from "./service-card";
import ViewAllCard from "./view-all-card";
import Wrapper from "./wrapper";

export const wasteServices: WasteService[] = [
  {
    id: 1,
    title: "Battery Recycling",
    icon: "/service-icon.png",
    image: "/service-1.jpg",
  },
  {
    id: 2,
    title: "Industrial Waste Management",
    icon: "/service-icon.png",
    image: "/service-2.jpg",
  },
  {
    id: 3,
    title: "Organic Waste Composting",
    icon: "/service-icon.png",
    image: "/service-3.jpg",
  },
  {
    id: 4,
    title: "Electronic Waste Recycling",
    icon: "/service-icon.png",
    image: "/service-4.jpg",
  },
  {
    id: 5,
    title: "Plastic Recycling",
    icon: "/service-icon.png",
    image: "/service-5.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-10">
      <Wrapper>
        <header>
          <H2>Our waste services</H2>
        </header>
        <div className="pt-10 grid-cols-1 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {wasteServices.map((item) => (
            <ServiceCard key={item.id} service={item} />
          ))}
          <ViewAllCard />
        </div>
      </Wrapper>
    </section>
  );
}
