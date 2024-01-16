import { noteworthProjects } from "constants/data"
import { FaRegFolder } from "react-icons/fa"
import { CiShare1 } from "react-icons/ci"
import { LuGithub } from "react-icons/lu"

const ExtendProjects = () => {
  return (
    <section className="flex flex-col items-center justify-center mx-auto">
        <h2 className="project-headings font-semibold text-lightest-slate mb-2.5">Other Noteworthy Projects</h2>
        <ul className="relative gap-3.5 grid grid-cols-1 md:grid-cols-2 mt-6 md:mt-12 list-none">
            {noteworthProjects.map((item) => {
                return (
                    <li key={item.id}>
                        <div className="relatuve group h-full flex flex-col items-start justify-between py-8 px-7 rounded bg-light-navy shadow-navy-shadow transition-all overflow-auto">
                            <div className="w-full flex items-center justify-between mb-9">
                                <FaRegFolder className="size-10 group-hover:text-green"/>
                                <div className="flex items-center text-light-slate mr-2.5">
                                    <a 
                                    target="_blank"
                                    href={item.source} 
                                    aria-label="Source-link"
                                    className="flex items-center justify-center py-1.5 px-2 hover:text-green">
                                        <LuGithub />
                                    </a>
                                    <a 
                                    target="_blank"
                                    href={item.preview} 
                                    aria-label="External-link"
                                    className="flex items-center justify-center py-1.5 px-2 hover:text-green">
                                        <CiShare1 />
                                    </a>
                                </div>
                            </div>
                            <h3 className="bold-22 font-semibold text-lightest-slate mb-2.5 group-hover:text-green">
                                {item.title}
                            </h3>
                            <p className="regular-16 text-light-slate indent-2">{item.text}</p>
                            <footer>
                                <ul className="flex flex-wrap items-end mt-5 list-none">
                                    {item.stack.map((list) => {
                                        return (
                                            <li key={list} className="mr-3 regular-14 font-monts leading-7">
                                                {list}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </footer>
                        </div>
                    </li>
                )
            })}
        </ul>
    </section>
  )
}

export default ExtendProjects