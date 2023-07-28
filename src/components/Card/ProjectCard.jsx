import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <div>
        <Image src={project?.image} alt={project?.title} />
      </div>
      <div>
        <h3>{project?.title}</h3>
        <p className="line-clamp">{project?.disc}</p>
        <LinkWrpper to={`/work/${project?.id}`}>
          <ProjectLink>Read More</ProjectLink>
          <div style={{ paddingTop: "6px" }}>
            <ArrowRight size={19} className="icon" />
          </div>
        </LinkWrpper>
      </div>
    </Card>
  );
};

const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }

  h3 {
    font-size: 1.125rem;
  }

  p {
    font-size: 1rem;
    margin-block: 1rem;
  }
`;

const LinkWrpper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  width: fit-content;

  .icon {
    transition: all 0.3s linear;
  }

  &:hover .icon {
    margin-left: 0.4rem;
    transition: all 0.15s linear;
  }
`;

const ProjectLink = styled.a`
  font-size: 0.95rem;
  line-height: 1.6;
  font-weight: 400;
`;

const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 6px;

  @media (min-width: 640px) {
    width: 336px;
    height: 175px;
    object-fit: cover;
  }
`;

export default ProjectCard;
