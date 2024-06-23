import { socialLinks } from "constants/data";
import { IconType } from "react-icons";

const SocialBar = () => {
  return (
    <nav
      className="hidden md:block fixed z-10 left-5 lg:left-10 right-auto bottom-0 w-10 text-light-slate"
      aria-orientation="vertical"
    >
      <ul className="flex flex-col items-center justify-center list-none p-0 my-0 mx-auto after:block after:content-[''] after:w-0.5 after:h-[90px] after:my-0 after:mx-auto after:bg-light-slate">
        {socialLinks.map((item) => {
          const Icon: IconType = item.icon;
          return (
            <li key={item.id} className="h-11 w-fit mx-auto">
              <a
                target="_blank"
                href={item.link}
                aria-label={item.title}
                rel="noopener referrer"
                className="size-fit"
              >
                <Icon className="size-5 transition-all hover:text-green hover:-translate-y-1" />
              </a>
              <span className="sr-only">{item.title}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SocialBar;
