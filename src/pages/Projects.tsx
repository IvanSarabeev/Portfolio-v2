import { projectShowcase } from "constants/data"
import { LuGithub } from "react-icons/lu"
import { CiShare1 } from "react-icons/ci"

const Projects = () => {
  return (
    <section id="projects">
        <h2 className="numbered-headings">
            <span className="num-headings">03.</span>
            Some Things I've Built
        </h2>
            {projectShowcase.map((item) => {
                return (
                    <aside
                     key={item.id}
                     className="relative gap-2.5 flex flex-col md:flex-row items-center odd:justify-start even:justify-end mb-12 md:mb-24 text-right odd:flex-row-reverse odd:text-left">
                        <div className="project-img">
                            <a href={item.preview} rel="noopener noreferrer" target="_blank"
                            className="size-full rounded align-middle bg-green before:absolute before:content-[''] before:size-full before:z-10 before:bg-navy before:mix-blend-screen">
                                <img 
                                    src={item.imgSrc}
                                    alt={item.title} 
                                    decoding="async"
                                    loading="lazy"
                                    className="size-full rounded aspect-auto object-cover"
                                />
                            </a>
                        </div>
                        <article className="relative">
                            <p className="font-monts regular-14 text-green my-2.5">
                                Featured Project
                            </p>
                            <h3 className="project-headings text-lightest-slate font-semibold mb-3 md:mb-5">
                                {item.title}
                            </h3>
                            <p className="relative z-20 p-6 regular-18 text-light-slate rounded bg-light-navy shadow-2xl shadow-black ease-slow-transition">
                                {item.text}
                            </p>
                            <ul className="relative z-10 flex flex-wrap items-center p-0 mt-6 mb-2.5 list-none">
                                    {item.stack.map((list) => {
                                        return(
                                            <li key={list} className="regular-14 font-monts text-lightest-slate whitespace-nowrap ml-5 mb-1.5">
                                                {list}
                                            </li>
                                        )
                                    })}
                            </ul>
                            <div className="relative flex items-center justify-end text-lightest-slate mt-2.5">
                                <a
                                target="_blank"
                                href={item.preview} 
                                aria-label="GitHub-link"
                                className="flex items-center justify-center p-2.5 transition-all hover:text-green">
                                    <LuGithub />
                                </a>
                                <a
                                target="_blank"
                                href={item.source} 
                                aria-label="External-link"
                                className="flex items-center justify-center p-2.5 transition-all hover:text-green">
                                    <CiShare1 />
                                </a>
                            </div>
                        </article>
                    </aside>
                )
            })}
    </section>
  )
}

export default Projects