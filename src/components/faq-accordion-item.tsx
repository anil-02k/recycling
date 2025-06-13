import { FAQItem } from "@/lib/types";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

type FAQAccordionItemProps = {
  faq: FAQItem;
};

export default function FAQAccordionItem({ faq }: FAQAccordionItemProps) {
  return (
    <AccordionItem value={faq.id}>
      <AccordionTrigger>{faq.question}</AccordionTrigger>
      <AccordionContent>{faq.answer}</AccordionContent>
    </AccordionItem>
  );
}
