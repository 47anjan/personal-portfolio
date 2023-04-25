import styled from "styled-components";

const Profile = () => {
  return (
    <Wrapper>
      <Heading>Profile</Heading>

      <ProfileInfo>
        <p>
          Hey there! 👋
          <Break />
          I'm Anjan, a self-taught Front-end developer with a passion for
          creating intuitive and visually appealing web applications.
          <Break />
          Although I do not have any computer science background, But the
          passion for tech has got me here, and I am super proud that I am where
          I am now. I have a particular interest in front-end development, and I
          love to build intuitive, user-friendly applications
          <Break />
          Currently, I am proficient in HTML, CSS, JavaScript, and React.
          committed to staying current with the latest industry trends and
          continuously learning to enhance my skills. Looking to join a company
          where I can grow as a developer and contribute to creating innovative
          and impactful digital experiences. Hire me?
        </p>
      </ProfileInfo>
      <Line />

      <SkillsContainer>
        <SkillHeading>Skills</SkillHeading>
      </SkillsContainer>
    </Wrapper>
  );
};

const Break = styled.span`
  margin-bottom: 20px;
  display: block;
`;

const SkillsContainer = styled.section``;

const Line = styled.hr`
  margin-block: 20px;
`;

const ProfileInfo = styled.article``;

const Heading = styled.h1`
  margin-block: 40px;
`;

const SkillHeading = styled.h2`
  margin-block: 20px;
  font-size: 1.5rem;
  letter-spacing: normal;
`;

const Wrapper = styled.section``;
export default Profile;
