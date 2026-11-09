const Footer = () => {
  return (
    <footer id="footer" className="border-t border-border bg-background">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="" width={36} height={36} />
            <span className="font-heading text-2xl font-semibold">FoodieFly</span>
          </div>
          <p className="mt-4 max-w-md text-muted-foreground">
            FoodieFly connects you with local restaurants and delivers their food to your
            door. Browse, order and track in one place.
          </p>
        </div>
        <nav aria-label="Company">
          <h3 className="text-sm font-semibold tracking-wider uppercase">Company</h3>
          <ul className="mt-4 grid gap-3 text-muted-foreground">
            <li>
              <a href="/#menu" className="link-draw hover:text-foreground">
                Menu
              </a>
            </li>
            <li>
              <a href="/#mobile-app" className="link-draw hover:text-foreground">
                Mobile app
              </a>
            </li>
            <li>
              <a href="/#footer" className="link-draw hover:text-foreground">
                Contact us
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <h3 className="text-sm font-semibold tracking-wider uppercase">Get in touch</h3>
          <ul className="mt-4 grid gap-3 text-muted-foreground">
            <li>+1-452-96-5654</li>
            <li>contact@foodiefly.com</li>
          </ul>
        </div>
      </div>
      <div className="wrap border-t border-border py-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} FoodieFly. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
