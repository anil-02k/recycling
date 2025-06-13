import { AboutInfo } from "@/lib/types";
import Image from "next/image";
import AboutInfoCard from "./about-info-card";
import H2 from "./h2";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";

export const aboutInfoData: AboutInfo[] = [
  {
    id: 1,
    title: "Giving Trash a Second Life",
    description: "Sample text. Click to select the Text Element.",
  },
  {
    id: 2,
    title: "Zero Waste, Clean Earth",
    description: "Sample text. Click to select the Text Element.",
  },
];

export default function AboutSection() {
  return (
    <section className="pb-10">
      <Wrapper>
        <div className="flex gap-6 flex-col md:flex-row ">
          <div className="rounded-4xl basis-[70%] bg-dusty-rose px-8 py-8 text-white flex items-center md:items-start flex-col gap-8 ">
            <H2 className="md:text-left">Transforming Waste into Resources</H2>
            <Button className="">About Us</Button>
            <div className="flex flex-col gap-4 md:flex-row">
              {aboutInfoData.map((item) => (
                <AboutInfoCard key={item.id} info={item} />
              ))}
            </div>
          </div>
          <div className="col basis-[30%]">
            <div className="rounded-4xl overflow-hidden relative min-h-[300px] md:h-full">
              <Image
                className="object-cover "
                fill
                src="/about-us.jpg"
                alt={""}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
