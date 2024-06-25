import React from "react";
import { headerLinks } from "constants/data";
import Button from "components/HTML/Button";
import ResumeFile from "assets/files/Resume.pdf";
import Mobile from "./Mobile";
import { useToggle } from "hooks/useToggle";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import ImgLogo from "assets/images/s-logo.png";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  const [show, handleToggle] = useToggle();

  const downloadResume = () => {
    window.open(ResumeFile);
  };

  return (
    <header className="w-full fixed top-0 z-30 h-[70px] lg:h-24 flex items-center justify-between filter-none backdrop-filter backdrop-blur-sm pointer-events-auto bg-header-bg shadow-header shadow-navy px-4 pr-8 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <nav className="w-full relative z-20 flex items-center justify-between font-monts text-lightest-slate">
        <div className="relative z-10 w-fit h-fit ease-slow-transition">
          <a href="#" aria-label="home" className="relative group">
            <img
              src={ImgLogo}
              alt="logo"
              decoding="async"
              loading="lazy"
              className="size-12 aspect-auto object-cover ease-slow-transition group-hover:outline-none group-hover:translate-y-1 group-hover:translate-x-1"
            />
            <title>Logo</title>
            <div className="size-12 -z-10 absolute top-0 left-0 ease-slow-transition group-hover:translate-y-1 group-hover:translate-x-1"></div>
          </a>
        </div>
        <div className="hidden md:flex items-center">
          <ol className="flex items-center justify-between list-none m-0 p-0">
            {headerLinks.map((link) => {
              return (
                <li key={link.id} className="relative regular-14 my-0 mx-2">
                  <Link
                    to={link.link}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    <strong className="text-green regular-12 text-right">
                      {link.label}
                    </strong>
                    <p className="inline-block relative p-2 hover:text-green">
                      {link.text}
                    </p>
                  </Link>
                  <span className="sr-only">{link.text}</span>
                </li>
              );
            })}
          </ol>
          <Button
            type="button"
            className="resume-btn"
            rel="noreferrer"
            title="Resume button"
            onClick={downloadResume}
          >
            Resume
          </Button>
        </div>
        <div className="block md:hidden pr-2.5 mb-3">
          <Button
            type="button"
            aria-label="Menu"
            className="mobile-btn"
            onClick={() => handleToggle()}
          >
            {show ? (
              <RxCross2 className="ham-icon" />
            ) : (
              <BiMenuAltRight className="ham-icon" />
            )}
          </Button>
          {show ? <Mobile isOpen={show} /> : null}
        </div>
      </nav>
    </header>
  );
};

export default Header;
