import styled from "styled-components";
import projects from "../../../data/projects";
import ProjectCard from "../../../components/Card/ProjectCard";
const Features = () => {
  return (
    <section>
      <Title>Selected Project</Title>
      <CardContainer>
        {projects
          ?.filter((project) => project.selected)
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </CardContainer>
    </section>
  );
};

const Title = styled.h2`
  margin-block: 20px;
  font-weight: 500;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default Features;
