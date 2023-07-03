import styled from "styled-components";

const Snapshot = ({ snapshot }) => {
  return (
    <Container>
      <figure>
        <figcaption>{snapshot?.info}</figcaption>
        <Image image={snapshot?.img} />
      </figure>
    </Container>
  );
};

const Image = styled.div`
  width: 100%;
  border-radius: 8px;
  height: 290px;
  background-image: url(${(p) => p.image});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  transition: background-position 0.8s linear;

  cursor: pointer;

  &:hover {
    background-position: bottom;
  }
`;

const Container = styled.article`
  figcaption {
    font-size: 1.25rem;
    line-height: 1.3;
    margin-block: 8px;
    font-weight: 600;
    padding-bottom: 4px;
    border-bottom: 4px solid #fd7215;
    width: fit-content;
  }

  margin-bottom: 30px;
`;

export default Snapshot;
