"use client";

import Image from "next/image";
import Link from "next/link";

import { useMobileNav } from "@/stores/mobileNavStore";
import MobileMenuToggle from "./mobile-menu-toggle";
import Navigation from "./navigation";
import SocialIcons from "./social-icons";
import Wrapper from "./wrapper";

export default function BottomNavSection() {
  const toggle = useMobileNav((state) => state.toggle);
  return (
    <section className="py-10">
      <Wrapper>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="col">
            <div className="icon">
              <Image height={100} width={200} src="/logo-2.png" alt={""} />
            </div>
            <div className="mt-5">
              <Navigation />
              {/* Toggle */}
            </div>
          </div>
          <div className="flex justify-between items-end">
            <MobileMenuToggle onToggle={toggle} />

            <div>
              <Link href="/">
                <h3 className="mt-5 text-right text-xl xs:text-2xl font-unbounded font-light">
                  Your company needs it. <br /> Let's talk.
                </h3>
              </Link>
              <SocialIcons />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
