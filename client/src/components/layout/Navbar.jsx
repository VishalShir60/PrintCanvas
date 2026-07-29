import { useState } from "react";
import {
  Heart,
  Menu,
  Search,
  ShoppingBag,
  UserRound,
  X,
} from "lucide-react";

const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "Shop", href: "#shop" },
  { name: "Customize", href: "#customize" },
  { name: "Trending", href: "#trending" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="shrink-0">
          <div className="text-2xl font-extrabold tracking-tight text-gray-950">
            Print<span className="text-orange-500">Canvas</span>
          </div>

          <p className="hidden text-[10px] font-medium text-gray-500 sm:block">
            Where Creativity Meets Clothing.
          </p>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-700 transition hover:text-orange-500"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden w-full max-w-xs items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5 xl:flex">
          <Search size={18} className="text-gray-400" />

          <input
            type="search"
            placeholder="Search products..."
            className="ml-3 w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
          />
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            aria-label="Search"
            className="rounded-full p-2.5 text-gray-700 transition hover:bg-orange-50 hover:text-orange-500 xl:hidden"
          >
            <Search size={21} />
          </button>

          <button
            type="button"
            aria-label="Wishlist"
            className="hidden rounded-full p-2.5 text-gray-700 transition hover:bg-orange-50 hover:text-orange-500 sm:block"
          >
            <Heart size={21} />
          </button>

          <button
            type="button"
            aria-label="Shopping cart"
            className="relative rounded-full p-2.5 text-gray-700 transition hover:bg-orange-50 hover:text-orange-500"
          >
            <ShoppingBag size={21} />

            <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white">
              0
            </span>
          </button>

          <button
            type="button"
            className="hidden items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:border-orange-500 hover:text-orange-500 sm:flex"
          >
            <UserRound size={18} />
            Login
          </button>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((previousState) => !previousState)}
            className="rounded-full p-2.5 text-gray-800 transition hover:bg-gray-100 lg:hidden"
          >
            {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-5 lg:hidden">
          <div className="mx-auto max-w-7xl">
            <div className="mb-5 flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
              <Search size={18} className="text-gray-400" />

              <input
                type="search"
                placeholder="Search products..."
                className="ml-3 w-full bg-transparent text-sm outline-none"
              />
            </div>

            <nav className="flex flex-col">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="border-b border-gray-100 py-3 text-sm font-semibold text-gray-700 transition hover:text-orange-500"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <button
              type="button"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              <UserRound size={18} />
              Login or Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;