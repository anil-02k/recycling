import Image from "next/image";

export default function CoursePromoImageCard() {
  return (
    <div className="relative py-30 rounded-4xl overflow-hidden">
      <Image
        fill
        className="object-cover -z-10"
        src={"/course-promo-2.jpg"}
        alt={""}
        quality={40}
      />
    </div>
  );
}
