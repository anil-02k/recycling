import { InfoCardItem } from "@/lib/types";
import H2 from "./h2";
import InfoCard from "./info-card";
import P from "./p";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";
export const infoCardsData: InfoCardItem[] = [
  {
    id: 1,
    icon: "/contact-icon-1.png",
    title: "Zero Waste, Clean Earth",
    description: "Sample text. Click to select the Text Element.",
  },
  {
    id: 2,
    icon: "/contact-icon-2.png",
    title: "Giving Trash a Second Life",
    description: "Sample text. Click to select the Text Element.",
  },
  {
    id: 3,
    icon: "/contact-icon-3.png",
    title: "Better Recycling, Better Future",
    description: "Sample text. Click to select the Text Element.",
  },
];

export default function ContactSection() {
  return (
    <section className="py-20 bg-accent">
      <Wrapper>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full  text-center md:text-left">
            <H2 className="md:text-left">Transforming Waste into Resources</H2>
            <P className="mt-5">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </P>
            <Button className="mt-8">Contact Us</Button>
          </div>
          <div className="w-full  pt-10 md:pt-0 flex flex-col gap-8">
            {infoCardsData.map((item) => (
              <InfoCard key={item.id} info={item} />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
