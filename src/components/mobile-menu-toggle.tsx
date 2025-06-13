import { MenuIcon } from "lucide-react";

export default function MobileMenuToggle({
  onToggle,
}: {
  onToggle: () => void;
}) {
  return (
    <button className="md:hidden cursor-pointer" onClick={onToggle}>
      <MenuIcon className="h-9 w-9" />
    </button>
  );
}
