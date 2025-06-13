"use client";

import { useLockBodyScroll } from "@/lib/hooks";
import { useMobileNav } from "@/stores/mobileNavStore";
import { AnimatePresence } from "motion/react";
import Logo from "./logo";
import MobileMenuToggle from "./mobile-menu-toggle";
import MobileNav from "./mobile-nav";
import Navigation from "./navigation";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";

export default function Header() {
  const isOpen = useMobileNav((state) => state.isOpen);
  const close = useMobileNav((state) => state.close);
  const toggle = useMobileNav((state) => state.toggle);

  useLockBodyScroll(isOpen);

  return (
    <header className="py-5 border-b border-black">
      <Wrapper>
        <div className="flex justify-between  md:items-center flex-wrap  items-end gap-6">
          <Logo />
          {/* Desktop */}
          <Navigation />

          {/* Toggle */}
          <MobileMenuToggle onToggle={toggle} />

          <Button className="rounded-full cursor-pointer py-8 px-6  text-base font-unbounded mx-auto xs:mx-0">
            Contact Us
          </Button>
        </div>
      </Wrapper>

      <AnimatePresence>
        {isOpen && <MobileNav onClose={close} />}
      </AnimatePresence>
    </header>
  );
}
