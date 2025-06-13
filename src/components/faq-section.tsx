import { FAQItem } from "@/lib/types";
import { Accordion } from "@radix-ui/react-accordion";
import Image from "next/image";
import FAQAccordionItem from "./faq-accordion-item";
import H2 from "./h2";
import Wrapper from "./wrapper";

export const faqData: FAQItem[] = [
  {
    id: "item-1",
    question: "What materials can be recycled under plastic recycling?",
    answer:
      "Common recyclable plastics include PET (bottles), HDPE (containers), and PP (food tubs). Always check local recycling guidelines as rules may vary.",
  },
  {
    id: "item-2",
    question: "Can I recycle all types of paper and cardboard?",
    answer:
      "Most clean paper and cardboard can be recycled, including newspapers, boxes, and office paper. Avoid recycling wax-coated or greasy cardboard like pizza boxes.",
  },
  {
    id: "item-3",
    question: "Which metals are commonly accepted for recycling?",
    answer:
      "Aluminum (cans, foil), steel (tin cans), and copper (wires, pipes) are widely recyclable. Ensure items are clean and free from food residue before recycling.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-10">
      <Wrapper>
        <header className="mb-10">
          <H2>Sustainable Waste Management</H2>
        </header>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="w-full">
            <Accordion
              defaultValue="item-1"
              className="bg-dusty-rose p-5 rounded-4xl text-white md:min-h-[400px]"
              type="single"
              collapsible
            >
              {faqData.map((faq) => (
                <FAQAccordionItem key={faq.id} faq={faq} />
              ))}
            </Accordion>
          </div>
          <div className="w-full">
            <div className="relative min-h-[300px] md:min-h-[400px] h-full w-full rounded-4xl overflow-hidden">
              <Image
                fill
                className="object-cover"
                src="/faq-img.jpg"
                alt={""}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
