import styled from "styled-components";
import Snapshot from "./Snapshot";

const Snapshots = ({ snapshots }) => {
  return (
    <section>
      <h2>Snapshots :</h2>
      <Container>
        {snapshots?.map((snapshot, index) => (
          <Snapshot key={index} snapshot={snapshot} />
        ))}
      </Container>
    </section>
  );
};

const Container = styled.div`
  margin-top: 20px;
`;

export default Snapshots;
