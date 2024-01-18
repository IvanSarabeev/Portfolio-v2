import { projectShowcase } from "constants/data"
import { LuGithub } from "react-icons/lu"
import { CiShare1 } from "react-icons/ci"

const Projects = () => {
  return (
    <section id="projects" className="fade-in">
        <h2 className="numbered-headings">
            <span className="num-headings">03.</span>
            Some Things I've Built
        </h2>
            {projectShowcase.map((item) => {
                return (
                    <aside
                     key={item.id}
                     className="relative gap-2.5 flex flex-col md:flex-row items-center odd:justify-start even:justify-end mb-12 md:mb-24 text-right odd:flex-col md:odd:flex-row-reverse odd:text-left">
                        <div className="project-img">
                            <a href={item.preview} rel="noopener noreferrer" target="_blank"
                            className="size-full rounded">
                                <img 
                                    src={item.imgSrc}
                                    alt={item.title} 
                                    decoding="async"
                                    loading="lazy"
                                    className="size-full rounded aspect-auto object-cover scale-100 md:scale-125 transition-all hover:scale-110 hover:shadow-2xl hover:rounded-md"
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
                                            <li key={list} className="regular-14 font-monts text-lightest-slate whitespace-nowrap ml-5 mb-1.5 hover:text-green hover:underline transition-all cursor-default">
                                                {list}
                                            </li>
                                        )
                                    })}
                            </ul>
                            <div className="relative flex items-center justify-end text-lightest-slate mt-2.5">
                                <a
                                    target="_blank"
                                    href={item.source} 
                                    aria-label="GitHub-link"
                                    className="flex items-center justify-center p-2.5 transition-all hover:text-green"
                                    >
                                    <LuGithub />
                                </a>
                                <a
                                    target="_blank"
                                    href={item.preview} 
                                    aria-label="External-link"
                                    className="flex items-center justify-center p-2.5 transition-all hover:text-green"
                                    >
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