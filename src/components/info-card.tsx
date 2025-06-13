import { InfoCardItem } from "@/lib/types";
import Image from "next/image";
import P from "./p";

export default function InfoCard({ info }: { info: InfoCardItem }) {
  return (
    <div className="flex gap-3 p-3">
      <div className="bg-white rounded-2xl p-4 w-fit">
        <Image height={60} width={60} src={info.icon} alt={""} />
      </div>
      <div className="text">
        <h5 className="font-unbounded text-xl font-light">{info.title}</h5>
        <P className="mt-4">{info.description}</P>
      </div>
    </div>
  );
}
