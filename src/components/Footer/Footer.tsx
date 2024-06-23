import React from "react";
import { IconType } from "react-icons";
import { socialLinks } from "constants/data";

const Footer: React.FC = () => {
  return (
    <footer className="block md:hidden max-w-72 text-light-slate mb-2.5 mx-auto">
      <ul className="flex items-center justify-between list-none">
        {socialLinks.map((item) => {
          const Icon: IconType = item.icon;
          return (
            <li key={item.id} className="size-11">
              <a
                title="social links"
                href={item.link}
                target="_blank"
                rel="noopener norefferer"
                aria-label={item.title}
                className="size-5 fill-none p-2.5 transition-all hover:text-green"
              >
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
