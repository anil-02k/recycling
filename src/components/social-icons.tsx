import { SocialLink } from "@/lib/types";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import SocialItem from "./social-item";
export const socialLinks: SocialLink[] = [
  {
    id: 1,
    icon: FaFacebookF,
    url: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: FaTwitter,
    url: "https://x.com", // Twitter is now X.com
  },
  {
    id: 3,
    icon: FaInstagram,
    url: "https://www.instagram.com",
  },
];

export default function SocialIcons() {
  return (
    <ul className="flex gap-6 justify-end mt-5">
      {socialLinks.map((social) => (
        <SocialItem key={social.id} social={social} />
      ))}
    </ul>
  );
}
