import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, Mail, Clock, ChevronDown, Search, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItems = [
    { label: "Home", href: "/", isRoute: true },
    { label: "About Us", href: isHome ? "#about" : "/#about", isRoute: !isHome },
    { label: "Services", href: "/services", isRoute: true },
    // { label: "Industries", href: isHome ? "#industries" : "/#industries", isRoute: !isHome },
    // { label: "Pricing", href: isHome ? "#pricing" : "/#pricing", isRoute: !isHome },
    { label: "Blog", href: "/blog", isRoute: true },
    { label: "Contact", href: "/contact", isRoute: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show near the top.
      if (currentScrollY < 20) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down -> hide.
        setIsHeaderVisible(false);
      } else {
        // Scrolling up -> show.
        setIsHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Top bar */}
      <div className="navy-section hidden md:block">
        <div className="container mx-auto flex items-center justify-between py-2.5 text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 opacity-80">
              <Phone size={14} /> +919509069357
            </span>
            <span className="flex items-center gap-2 opacity-80">
              <Mail size={14} /> lpfincorpsolution@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 opacity-80">
              <Clock size={14} /> Mon - Fri: 9:00 AM - 6:00 PM
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-card shadow-sm border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "auto" })}
            className="flex items-center gap-2"
          >
            {/* <div className="w-10 h-10 rounded-lg stats-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg font-heading">IT</span>
            </div>
            <span className="text-xl font-bold font-heading text-foreground">
              itfirm<span className="text-primary">.</span>
            </span> */}
            <img src="/logos/01_primary_horizontal.svg" alt="" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 text-foreground/60 hover:text-primary transition-colors">
              <Search size={20} />
            </button>
            <a href="#contact" className="btn-primary text-sm rounded-full">
              Get Started
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-card pb-4">
            <div className="container mx-auto flex flex-col gap-3 pt-4">
              {navItems.map((item) =>
                item.isRoute ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-sm font-medium text-foreground/80 hover:text-primary py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium text-foreground/80 hover:text-primary py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
              <a href="#contact" className="btn-primary text-sm text-center mt-2 rounded-full">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
