import styled from "styled-components";
import ProjectCard from "../../components/Card/ProjectCard";
import projects from "../../data/projects";
const Projects = () => {
  return (
    <div>
      <Title>Projects</Title>
      <SubTitle>A selection of recent and past projects</SubTitle>
      <CardContainer>
        {projects?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </CardContainer>
    </div>
  );
};

const Title = styled.h1`
  margin-block: 40px;
  font-weight: 500;
`;

const SubTitle = styled.p`
  margin-block: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default Projects;
