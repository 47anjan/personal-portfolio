import styled from "styled-components";
import { RoughNotationGroup, RoughNotation } from "react-rough-notation";
const Profile = () => {
  return (
    <Wrapper>
      <Heading>Profile</Heading>

      <ProfileInfo>
        <RoughNotationGroup show={true}>
          <p>
            Hey there! 👋
            <Break />
            I'm Anjan, a{" "}
            <RoughNotation strokeWidth={"3px"} type="circle">
              self-taught
            </RoughNotation>
            {"  "}
            <RoughNotation strokeWidth={"2px"} type="highlight" color="#fd7215">
              {" "}
              Front-end developer
            </RoughNotation>{" "}
            with a passion for creating{" "}
            <RoughNotation type="highlight" color="#ffff00">
              <span style={{ color: "#161E40" }}>
                intuitive and visually appealing
              </span>
            </RoughNotation>{" "}
            web applications.
            <Break />
            Although I do not have any{" "}
            <RoughNotation
              strokeWidth={"2px"}
              color="#044761"
              type="strike-through"
            >
              computer science
            </RoughNotation>{" "}
            background, But the{" "}
            <RoughNotation type="highlight" color="#ECEFF1">
              <span style={{ color: "#161E40" }}>passion for tech</span>
            </RoughNotation>{" "}
            has got me here, and I am super proud that I am where I am now. I
            have a particular interest in front-end development, and I love to
            build interactive, user-friendly applications
            <Break />
            Currently, I am proficient in{" "}
            <RoughNotation color="#fca063" type="highlight">
              HTML, CSS, JavaScript
            </RoughNotation>
            , and <RoughNotation type="circle">React</RoughNotation>. committed
            to staying current with the latest industry trends and continuously
            learning to enhance my skills. Looking to join a company where I can
            grow as a developer and{" "}
            <RoughNotation multiline color="#c8f5cc" type="highlight">
              <span style={{ color: "#161E40" }}>
                contribute to creating innovative and impactful digital
                experiences.
              </span>
            </RoughNotation>{" "}
            <RoughNotation strokeWidth={"3px"} type="underline">
              Hire me?
            </RoughNotation>
          </p>
        </RoughNotationGroup>
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
