import { useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, ShoppingBag } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { StoreContext } from "../context/StoreContext";
import ProfileAvatar from "./ProfileAvatar";

const sectionLinks = [
  { href: "/#menu", label: "Menu" },
  { href: "/#mobile-app", label: "Mobile app" },
  { href: "/#footer", label: "Contact" },
];

interface NavbarProps {
  onSignIn: () => void;
}

const Navbar = ({ onSignIn }: NavbarProps) => {
  const { cartItemsCount, isAuthenticated } = useContext(StoreContext);

  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu" />
              }
            >
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-44">
              {sectionLinks.map((link) => (
                <DropdownMenuItem key={link.href} render={<a href={link.href} />}>
                  {link.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/" className="flex items-center gap-2 font-heading text-xl font-semibold">
            <img src="/logo.png" alt="" width={32} height={32} />
            FoodieFly
          </Link>
        </div>

        <nav aria-label="Main" className="hidden items-center gap-8 text-sm font-medium md:flex">
          {sectionLinks.map((link) => (
            <a key={link.href} href={link.href} className="link-draw">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            to="/cart"
            aria-label={`Cart, ${cartItemsCount} items`}
            className={buttonVariants({ variant: "ghost", size: "icon", className: "relative" })}
          >
            <ShoppingBag />
            {cartItemsCount > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 min-w-5 px-1">{cartItemsCount}</Badge>
            )}
          </Link>
          {isAuthenticated ? (
            <ProfileAvatar />
          ) : (
            <Button variant="outline" onClick={onSignIn}>
              Sign in
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
