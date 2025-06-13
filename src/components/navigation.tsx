import Link from "next/link";
type Route = {
  name: string;
  href: string;
};

const routes: Route[] = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];
export default function Navigation() {
  return (
    <nav className="hidden md:block">
      <ul className="flex">
        {routes.map((route) => (
          <li key={route.href} className=" ">
            <Link
              className="font-unbounded py-3 px-5 hover:text-dusty-rose"
              href={route.href}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
