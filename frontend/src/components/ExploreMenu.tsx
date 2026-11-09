import type { Dispatch, SetStateAction } from "react";

import { menu_list } from "../assets/assets";

interface ExploreMenuProps {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
}

const ExploreMenu = ({ category, setCategory }: ExploreMenuProps) => {
  return (
    <section id="menu" className="wrap py-14">
      <div>
        <h2 className="text-3xl font-semibold sm:text-4xl">Explore by category</h2>
        <p className="mt-2 text-muted-foreground">
          Pick a category to filter the dishes below.
        </p>
      </div>
      <div className="no-scrollbar mt-8 flex gap-4 overflow-x-auto py-2 md:justify-between">
        {menu_list.map((item) => {
          const selected = category === item.menu_name;
          return (
            <button
              key={item.menu_name}
              type="button"
              aria-pressed={selected}
              onClick={() =>
                setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))
              }
              className="group relative h-44 w-40 shrink-0 cursor-pointer overflow-hidden rounded-2xl text-left transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-48"
            >
              <span className="photo-frame absolute inset-0 block">
                <img src={item.menu_image} alt="" className="size-full object-cover" loading="lazy" />
              </span>
              <span className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
              <span className="absolute inset-x-4 bottom-3 font-semibold text-white">
                {item.menu_name}
              </span>
              {selected && (
                <span className="absolute inset-0 rounded-2xl ring-4 ring-primary ring-inset" />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default ExploreMenu;
