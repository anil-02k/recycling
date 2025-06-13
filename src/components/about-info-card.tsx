import { AboutInfo } from "@/lib/types";
import Image from "next/image";
import P from "./p";

export default function AboutInfoCard({ info }: { info: AboutInfo }) {
  return (
    <div className="py-3 px-3 md:px-0 text-center md:text-left text-white">
      <div className="w-fit mx-auto md:mx-0">
        <Image width={64} height={64} src="/about-us-icon.png" alt={""} />
      </div>
      <h6 className="text-lg font-unbounded mt-5">{info.title}</h6>
      <P className="mt-5 w-[75%] mx-auto md:mx-0">{info.description}</P>
    </div>
  );
}
