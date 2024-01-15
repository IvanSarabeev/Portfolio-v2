import Button from "components/HTML/Button";
import { experienceList } from "constants/data";

const jobList = [
    {id:1,active:true,title:"Septemvri"},
    {id:2,active:false,title:"Coach"},
    {id:3,active:false,title:"Instructor"},
    {id:4,active:false,title:"Freelancer"},
] as const;


const Experience = () => {
  return (
    <section id='experience' className="w-full h-dvh">
        <h2 className="numbered-headings">Where I've Worked</h2>
        <div className="gap-5 block md:flex">
            <aside role="tablist" aria-label="Job tabs"
            className="relative z-10 w-max flex md:block pl-12 -ml-12 mb-8 list-none overflow-x-auto md:overflow-x-clip">
                {jobList.map((item) => {
                    return(
                        <Button key={item.id} className={` list-btn 
                        ${item.active ? "text-green bg-light-navy border-green" : "text-inherit bg-transparent border-lightest-navy"} `}>
                            {item.title}
                        </Button>
                    )
                })}
            </aside>
            <article className="relative w-full ml-0 md:ml-5">
                {experienceList.map((item) => {
                    return (
                        <div key={item.id} className="w-full h-auto py-2.5 px-1.5">
                            <h3 className="bold-24 text-lightest-slate font-sants font-medium mb-0.5">
                                {item.title}{" "}<strong className="text-green">{item.subtitle}</strong>
                            </h3>
                            <p className="font-monts regular-14 text-light-slate mb-6">
                                {item.period}
                            </p>
                            <ul className="regular-18 list-none">
                                {/* Map throught the array of lists */}
                                {}
                                {/* Map throught the array of lists */}
                                <li className="relative pl-6 mb-2.5 before:absolute before:content-['▹'] before:left-0 before:text-green">
                                    {}
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </article>

        </div>
    </section>
  )
}

export default Experience