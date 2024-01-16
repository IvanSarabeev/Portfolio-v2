import { useState } from "react";
import Button from "components/HTML/Button";
import { experienceList } from "constants/data";

const jobList = [
    {id:1,title:"Septemvri"}, {id:2,title:"Hockey Coach"},
    {id:3,title:"Instructor"}, {id:4,title:"Master Class"}
] as const;

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleClick = (index:number) => {
    setCurrentIndex(index);
  }

  return (
    <section id='experience' className="max-w-[700px] overflow-x-hidden">
        <h2 className="numbered-headings">
            <span className="num-headings">02.</span>
            Where I've Worked
        </h2>
        <div className="block md:flex">
            <div
                role="tablist"
                aria-label="Job tabs"
                className="relative z-10 w-fit flex md:block mx-auto mb-8 list-none overflow-x-clip">
                    {jobList.map((item, index) => {
                        return(
                            <Button role="tab-btn" key={item.id} onClick={() => handleClick(index)} 
                                className={`list-btn  ${currentIndex === index 
                                ? "text-green bg-light-navy border-green" 
                                : "text-inherit bg-transparent border-lightest-navy"} 
                                `} >
                                {item.title}
                            </Button>
                        )
                    })}
            </div>
            <article className="relative group w-full ml-0 md:ml-5">
                {experienceList.filter((text) => text.id === jobList[currentIndex].id)
                .map((item) => {
                    return (
                        <div key={item.id} className="w-full h-auto py-2.5 px-1.5">
                            <h3 className="bold-24 text-lightest-slate font-sants font-medium mb-0.5">
                                {item.title}{" "}<strong className="text-green group-hover:underline underline-offset-4">{item.subtitle}</strong>
                            </h3>
                            <p className="font-monts regular-14 text-light-slate mb-6">
                                {item.period}
                            </p>
                            <ul className="regular-18 list-none max-w-2xl text-pretty">
                                <li className="relative pl-6 mb-2.5 before:absolute before:content-['▹'] before:left-0 before:text-green">
                                    {item.text}
                                </li>
                                <li className="relative pl-6 mb-2.5 before:absolute before:content-['▹'] before:left-0 before:text-green">
                                    {item.text2}
                                </li>
                                <li className="relative pl-6 mb-2.5 before:absolute before:content-['▹'] before:left-0 before:text-green">
                                    {item.text3}
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