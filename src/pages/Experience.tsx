import { useState } from "react";
import Button from "components/HTML/Button";
import { experienceList } from "constants/data";
import { motion, useAnimation, Variants } from 'framer-motion';


const jobList = [
    {id:1,title:"Septemvri"}, {id:2,title:"Hockey Coach"},
    {id:3,title:"Instructor"}, {id:4,title:"Master Class"}
] as const;

const listVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.4 },
    },
  };

const Experience = () => {
  const control = useAnimation();  
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleClick = async (index:number) => {
    await control.start('hidden');
    setCurrentIndex(index);
    control.start('visible');
  }

  return (
    <section id='experience' className="max-w-[700px] overflow-x-hidden fade-in">
        <h2 className="numbered-headings">
            <span className="num-headings">02.</span>
            Where I've Worked
        </h2>
        <div className="block md:flex">
            <nav 
                role="tablist"
                aria-label="Job tabs"
                className="relative z-10 flex md:block mx-auto mb-8"
                >
                <ul className="flex md:block list-none overflow-x-auto">
                    {jobList.map((item, index) => {
                        return (
                            <li 
                            key={item.id}
                            onClick={() => handleClick(index)} >
                                 <Button 
                                    role="tab-btn"
                                    className={`list-btn  ${currentIndex === index 
                                    ? "text-green bg-light-navy border-green" 
                                    : "text-inherit bg-transparent border-lightest-navy"} 
                                    `} >
                                    {item.title}
                                 </Button>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <motion.article 
            animate={control}
            variants={listVariants}
            className="relative group w-full ml-0 md:ml-5">
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
                                <motion.li  
                                    variants={listVariants}
                                    initial='hidden'
                                    animate='visible' 
                                    className="relative pl-6 mb-2.5 before:absolute before:content-['▹'] before:left-0 before:text-green"
                                    >
                                    {item.text}
                                </motion.li>
                                <motion.li 
                                    variants={listVariants}
                                    initial='hidden'
                                    animate='visible'
                                    className="relative pl-6 mb-2.5 before:absolute before:content-['▹'] before:left-0 before:text-green"
                                >
                                    {item.text2}
                                </motion.li>
                                <motion.li 
                                    variants={listVariants}
                                    initial='hidden'
                                    animate='visible'
                                    className="relative pl-6 mb-2.5 before:absolute before:content-['▹'] before:left-0 before:text-green"
                                >
                                    {item.text3}
                                </motion.li>
                            </ul>
                        </div>
                    )
                })}
            </motion.article>
        </div>
    </section>
  )
}

export default Experience