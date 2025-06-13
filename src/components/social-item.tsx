import { SocialLink } from "@/lib/types";
import Link from "next/link";

export default function SocialItem({ social }: { social: SocialLink }) {
  return (
    <li>
      <Link
        className="block bg-black p-2 rounded-full border"
        href={social.url}
        target="_blank"
      >
        <social.icon className="h-9 text-white w-9" />
      </Link>
    </li>
  );
}
