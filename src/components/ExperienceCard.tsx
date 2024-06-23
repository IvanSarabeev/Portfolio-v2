import { FunctionComponent, memo } from "react";
import { motion, Variants } from "framer-motion";
import { ExperienceCardDetaiType } from "types/index";

interface ExperienceCardProps {
  item: ExperienceCardDetaiType;
}

const listVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4 },
  },
};

const ExperienceCard: FunctionComponent<ExperienceCardProps> = ({ item }) => {
  return (
    <div key={item.id} className="w-full h-auto py-2.5 px-1.5">
      <h3 className="bold-24 text-lightest-slate font-sants font-medium mb-0.5">
        {item.title}{" "}
        <strong className="text-green group-hover:underline underline-offset-4">
          {item.subtitle}
        </strong>
      </h3>
      <p className="font-monts regular-14 text-light-slate mb-6">
        {item.period}
      </p>
      <ul className="regular-18 list-none max-w-2xl text-pretty">
        <motion.li
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="list-variant"
        >
          {item.text}
        </motion.li>
        <motion.li
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="list-variant"
        >
          {item.text2}
        </motion.li>
        <motion.li
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="list-variant"
        >
          {item.text3}
        </motion.li>
      </ul>
    </div>
  );
};

const memoExperienceCard = memo(ExperienceCard);

export default memoExperienceCard;
