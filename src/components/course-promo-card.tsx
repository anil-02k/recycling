import Image from "next/image";
import ImageCircle from "./image-circle";
import { Button } from "./ui/button";

export default function CoursePromoCard() {
  return (
    <div className="relative p-8 md:py-12 rounded-4xl flex flex-col gap-4 items-center md:items-start overflow-hidden">
      <Image
        fill
        className="object-cover -z-10"
        src={"/course-promo-1.jpg"}
        quality={40}
        alt={""}
      />
      <div className="text-white text-center md:text-left">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-unbounded">
          Green office management course
        </h3>
        <p className="mt-5 font-open-sans leading-[1.6]">
          Sample text. Click to select the Text Element.
        </p>
      </div>
      <div className="profiles flex justify-center md:justify-start gap-8 mt-8 flex-wrap w-[75%]">
        <ImageCircle size="fixed" src="/profile-1.jpg" />
        <ImageCircle size="fixed" src="/profile-2.jpg" />
        <ImageCircle size="fixed" src="/profile-3.jpg" />
      </div>
      <Button className="mt-[100px] " variant={"secondary"}>
        Buy Course
      </Button>
    </div>
  );
}
