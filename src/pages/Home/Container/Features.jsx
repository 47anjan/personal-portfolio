import styled from "styled-components";
import projects from "../../../data/projects";
import ProjectCard from "../../../components/Card/ProjectCard";
import { LinkWrpper, ProflileLink } from "../style/home.style";
import { ArrowRight } from "react-feather";

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

      <LinkWrpper to={"/work"}>
        <ProflileLink>View all work</ProflileLink>
        <div style={{ paddingTop: "12px" }}>
          <ArrowRight className="icon" />
        </div>
      </LinkWrpper>
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
  margin-bottom: 20px;
`;

export default Features;
