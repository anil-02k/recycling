import { WasteService } from "@/lib/types";
import Image from "next/image";

export default function ServiceCard({ service }: { service: WasteService }) {
  return (
    <div className="card text-center bg-light-gray rounded-4xl flex flex-col gap-8 ">
      <header className="mb-auto">
        <div className="mx-auto w-fit pt-8">
          <Image width={64} height={64} src={service.icon} alt={""} />
        </div>
        <h3 className="font-unbounded text-xl  font-light px-4 mt-5 ">
          {service.title}
        </h3>
      </header>

      <div className="relative  min-h-[238px] w-full rounded-4xl overflow-hidden ">
        <Image
          className="block h-full w-full object-cover"
          fill
          src={service.image}
          alt={""}
        />
      </div>
    </div>
  );
}
