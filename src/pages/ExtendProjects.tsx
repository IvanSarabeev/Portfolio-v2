import OtherProjects from "components/OtherProjects";
import { noteworthProjects } from "constants/data";

const ExtendProjects = () => {
  return (
    <section className="flex flex-col items-center justify-center mx-auto">
      <h2 className="project-headings font-semibold text-lightest-slate mb-2.5">
        Other Noteworthy Projects
      </h2>
      <menu className="relative lg:min-w-[428px] min-h-96 gap-3.5 grid grid-cols-1 md:grid-cols-2 mt-6 md:mt-12 list-none">
        {noteworthProjects.map((item) => {
          return <OtherProjects key={item.id} item={item} />;
        })}
      </menu>
    </section>
  );
};

export default ExtendProjects;
