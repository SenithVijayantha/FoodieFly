import { buttonVariants } from "@/components/ui/button";
import { header_bg } from "../assets/assets";

const Header = () => {
  return (
    <section
      id="home"
      className="wrap grid items-center gap-10 pt-12 pb-16 md:grid-cols-[1.05fr_1fr] md:pt-20 md:pb-24"
    >
      <div className="animate-slide-up">
        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
          Online food marketplace
        </p>
        <h1 className="mt-4 text-5xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl">
          Order food from local kitchens, delivered to your door.
        </h1>
        <p className="mt-6 max-w-md text-lg text-muted-foreground">
          Browse dishes from restaurants near you and pay online. Delivery is a
          flat $2 on every order.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#menu" className={buttonVariants({ size: "lg" })}>
            Browse the menu
          </a>
          <a href="#mobile-app" className={buttonVariants({ size: "lg", variant: "outline" })}>
            Get the app
          </a>
        </div>
      </div>
      <div
        className="photo-frame aspect-4/3 rounded-3xl animate-slide-up md:aspect-5/4"
        style={{ animationDelay: "150ms" }}
      >
        <img
          src={header_bg}
          alt="A plated dish served at a restaurant table"
          className="size-full object-cover"
        />
      </div>
    </section>
  );
};

export default Header;
