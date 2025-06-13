import H2 from "./h2";
import P from "./p";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";

export default function CTASection() {
  return (
    <section className="py-20 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/cta-bg.jpg')] bg-cover bg-center bg-fixed ">
      <Wrapper>
        <div className="flex flex-col items-center text-center gap-4 text-white">
          <H2>Talk to an expert</H2>
          <P>
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet.
          </P>
          <Button variant="secondary">Let's talk</Button>
        </div>
      </Wrapper>
    </section>
  );
}
