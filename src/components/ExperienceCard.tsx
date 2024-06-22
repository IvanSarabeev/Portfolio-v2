import { FunctionComponent, memo } from "react";
import { motion, Variants } from "framer-motion";

interface ExperienceCardProps {
  item: ExperienceCardDetailProps;
}

type ExperienceCardDetailProps = {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  text: string;
  text2: string;
  text3: string;
};

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
