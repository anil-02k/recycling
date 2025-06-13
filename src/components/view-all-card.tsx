import Image from "next/image";
import { Button } from "./ui/button";

export default function ViewAllCard() {
  return (
    <div className=" bg-primary text-white rounded-4xl md:text-left p-8 flex flex-col items-center md:items-start gap-8">
      <h6 className="text-lg font-unbounded font-extrabold">View all type</h6>
      <div className="w-[167px] h-[91px] md:w-[243px] md:h-[132px] mb-auto relative ">
        <Image fill src="/logo-3.png" alt={""} />
      </div>
      <Button variant="secondary">View all</Button>
    </div>
  );
}
