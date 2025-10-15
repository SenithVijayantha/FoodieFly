import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-primary text-neutral-content p-10">
      <aside>
        <div className="flex items-center gap-2">
          <img width={40} src="/logo.png" alt="" />
          <p className="text-4xl font-bold">FoodieFly</p>
        </div>
        <p className="max-w-md">
          FoodieFly brings your favorite meals straight to your doorstep. Fast,
          fresh, and full of flavor. From local favorites to international
          delights, we connect you with the best restaurants around you. Order
          now and let FoodieFly make every meal a little more special!
        </p>
      </aside>
      <nav>
        <h6 className="footer-title text-2xl">COMPANY</h6>
        <ul tabIndex="-1" className="">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Menu</a>
          </li>
          <li>
            <a>Mobile App</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
        <aside></aside>
      </nav>
      <aside>
        <h6 className="footer-title text-2xl">GET IN TOUCH</h6>
        <p>+1-452-96-5654</p>
        <p>contact@foodiefly.com</p>
      </aside>
    </footer>
  );
};

export default Footer;
