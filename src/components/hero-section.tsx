import ImageCircle from "./image-circle";
import ImageCredit from "./image-credit";
import Wrapper from "./wrapper";

// types.ts or inline
export type HeroGridImage = {
  id: string;
  src: string;
  alt?: string;
};

// heroGridImages.ts
export const heroGridImages: HeroGridImage[] = [
  {
    id: "hero-img-1",
    src: "/hero-1.jpg",
    alt: "Recycling process image 1",
  },
  {
    id: "hero-img-2",
    src: "/hero-2.jpg",
    alt: "Recycling process image 2",
  },
  {
    id: "hero-img-3",
    src: "/hero-3.jpg",
    alt: "Recycling process image 3",
  },
  {
    id: "hero-img-4",
    src: "/hero-4.jpg",
    alt: "Recycling process image 4",
  },
];

export default function HeroSection() {
  return (
    <section className="py-10">
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center gap-6 ">
          <div className="col text-center md:text-left md:py-8 ">
            <h2 className="leading-[1.2] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-unbounded">
              Recycling for a Greener Future
            </h2>
            <ImageCredit className="mt-5 md:text-xl" />
          </div>
          <div className="grid grid-cols-2 gap-6 min-w-[184px] md:min-w-[258px]   mx-auto md:mx-0 mt-8 ">
            {heroGridImages.map((item) => (
              <ImageCircle key={item.id} src={item.src} alt={item.alt} />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
