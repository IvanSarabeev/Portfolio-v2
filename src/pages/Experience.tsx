import { useState } from "react";
import Button from "components/HTML/Button";
import { experienceList } from "constants/data";
import { motion, useAnimation, Variants } from "framer-motion";
import ExperienceCard from "components/ExperienceCard";

const jobList = [
  { id: 1, title: "myPOS" },
  { id: 2, title: "Septemvri" },
  { id: 3, title: "Hockey Coach" },
  { id: 4, title: "Instructor" },
  { id: 5, title: "Master Class" },
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

  const handleClick = async (index: number) => {
    await control.start("hidden");
    setCurrentIndex(index);
    control.start("visible");
  };

  return (
    <section
      id="experience"
      className="max-w-[700px] overflow-x-hidden fade-in"
    >
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
                <li key={item.id} onClick={() => handleClick(index)}>
                  <Button
                    role="tab-btn"
                    className={`list-btn  ${
                      currentIndex === index
                        ? "text-green bg-light-navy border-green"
                        : "text-inherit bg-transparent border-lightest-navy"
                    } `}
                  >
                    {item.title}
                  </Button>
                </li>
              );
            })}
          </ul>
        </nav>
        <motion.article
          animate={control}
          variants={listVariants}
          className="relative group w-full ml-0 md:ml-5"
        >
          {experienceList
            .filter((text) => text.id === jobList[currentIndex].id)
            .map((item) => {
              return <ExperienceCard key={item.id} item={item} />;
            })}
        </motion.article>
      </div>
    </section>
  );
};

export default Experience;
