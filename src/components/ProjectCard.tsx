import { FunctionComponent } from "react";
import { LuGithub } from "react-icons/lu";
import { CiShare1 } from "react-icons/ci";
import { ProjectCardType } from "types/index";

interface ProjectCardProps {
  item: ProjectCardType;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ item }) => {
  return (
    <aside
      key={item.id}
      className="relative gap-2.5 flex flex-col md:flex-row items-center odd:justify-start even:justify-end mb-12 md:mb-24 text-right md:odd:flex-row-reverse odd:text-left"
    >
      <div className="project-img">
        <a
          href={item.preview}
          rel="noopener noreferrer"
          target="_blank"
          className="size-full rounded"
        >
          <img
            src={item.imgSrc}
            alt={item.title}
            decoding="async"
            loading="lazy"
            className="size-full rounded aspect-auto object-cover scale-100 md:scale-125 transition-all ease-in-out hover:shadow-xl hover:rounded-md"
          />
        </a>
      </div>
      <article className="relative text-balance odd:justify-start even:justify-end lg:min-w-[445px]">
        <span className="relative inline-flex text-lightest-slate mt-2.5">
          <a
            target="_blank"
            href={item.source}
            title="Source code"
            aria-label="GitHub-link"
            className="flex items-center justify-center p-2.5 transition-all hover:text-green"
          >
            <LuGithub />
          </a>
          <a
            target="_blank"
            href={item.preview}
            title="Live Preview"
            aria-label="External-link"
            className="flex items-center justify-center p-2.5 transition-all hover:text-green"
          >
            <CiShare1 />
          </a>
        </span>
        <h3 className="project-headings text-lightest-slate font-semibold mb-3 md:mb-5">
          {item.title}
        </h3>
        <p className="relative z-20 p-6 regular-18 text-light-slate rounded bg-light-navy shadow-2xl shadow-black ease-slow-transition">
          {item.text}
        </p>
        <ul
          className={`max-w-lg relative z-10 flex flex-wrap p-0 mt-6 mb-2.5 list-none ${item.stackStyle}`}
        >
          {item.stack.map((list) => {
            return (
              <li
                key={list}
                title="tech stack"
                aria-label="tech stack"
                className="regular-14 font-monts text-lightest-slate whitespace-nowrap first:ml-5 ml-5 mb-1.5 hover:text-green hover:underline transition-all cursor-default"
              >
                {list}
              </li>
            );
          })}
        </ul>
      </article>
    </aside>
  );
};

export default ProjectCard;
