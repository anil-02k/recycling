import { PartnerLogo } from "@/lib/types";
import PartnerItem from "./partner-item";
import Wrapper from "./wrapper";

export const partnerLogos: PartnerLogo[] = [
  {
    id: 1,
    logo: "/partner-1.png",
  },
  {
    id: 2,
    logo: "/partner-2.png",
  },
  {
    id: 3,
    logo: "/partner-3.png",
  },
  {
    id: 4,
    logo: "/partner-4.png",
  },
];

export default function PartnersSection() {
  return (
    <section className="py-20">
      <Wrapper>
        <div className="flex flex-col gap-8  items-center md:flex-row md:justify-between">
          {partnerLogos.map((partner) => (
            <PartnerItem key={partner.id} logo={partner.logo} />
          ))}
          <h4 className="text-2xl font-unbounded font-light  md:order-first">
            Our partners
          </h4>
        </div>
      </Wrapper>
    </section>
  );
}
