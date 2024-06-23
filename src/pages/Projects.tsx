import { projectShowcase } from "constants/data";
import ProjectCard from "components/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="fade-in">
      <h2 className="numbered-headings">
        <span className="num-headings">03.</span>
        Some Things I've Built
      </h2>
      {projectShowcase.map((item) => {
        return <ProjectCard item={item} />;
      })}
    </section>
  );
};

export default Projects;
