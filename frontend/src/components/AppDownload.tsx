import { Button } from "@/components/ui/button";
import { icons } from "../assets/assets";

const AppDownload = () => {
  return (
    <section id="mobile-app" className="wrap py-14">
      <div className="grid items-center gap-8 rounded-3xl bg-brand px-8 py-14 text-brand-foreground sm:px-14 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">Order faster in the FoodieFly app</h2>
          <p className="mt-3 max-w-md text-brand-foreground/80">
            Save your addresses and keep your favourite dishes one tap away.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <Button
            variant="secondary"
            size="lg"
            className="h-auto justify-start gap-3 rounded-2xl px-5 py-3 transition-transform hover:scale-[1.02]"
          >
            <img src={icons.play_store} alt="" width={36} height={36} />
            <span className="flex flex-col items-start leading-tight">
              <span className="text-xs text-muted-foreground">Get it on</span>
              <span className="text-lg font-semibold">Google Play</span>
            </span>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="h-auto justify-start gap-3 rounded-2xl px-5 py-3 transition-transform hover:scale-[1.02]"
          >
            <img src={icons.apple} alt="" width={36} height={36} />
            <span className="flex flex-col items-start leading-tight">
              <span className="text-xs text-muted-foreground">Download on the</span>
              <span className="text-lg font-semibold">App Store</span>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
