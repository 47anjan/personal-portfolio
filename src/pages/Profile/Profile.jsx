import styled from "styled-components";
import { RoughNotationGroup, RoughNotation } from "react-rough-notation";
import data from "./data/data.js";
import Skils from "./Skils.jsx";

const Profile = () => {
  return (
    <section>
      <section>
        <Heading>Profile</Heading>

        <article>
          <RoughNotationGroup show={true}>
            <p>
              Hey there! 👋
              <Break />
              I&apos;m Anjan, a{" "}
              <RoughNotation strokeWidth={"3px"} type="circle">
                self-taught
              </RoughNotation>
              {"  "}
              <RoughNotation
                multiline
                strokeWidth={"2px"}
                type="highlight"
                color="#fd7215"
              >
                {" "}
                Front-end developer
              </RoughNotation>{" "}
              with an enthusiasm for creating{" "}
              <RoughNotation
                multiline
                strokeWidth={"2px"}
                type="underline"
                color="#ffff00"
              >
                intuitive and visually appealing
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
              <RoughNotation multiline type="highlight" color="#ECEFF1">
                <span style={{ color: "#161E40" }}>passion for tech</span>
              </RoughNotation>{" "}
              has got me here, and I am super proud that I am where I am now. I
              have a particular interest in front-end development, and I love to
              build interactive, user-friendly applications
              <Break />
              Currently, I am proficient in{" "}
              <RoughNotation multiline color="#fca063" type="highlight">
                HTML, CSS, JavaScript
              </RoughNotation>
              , and{" "}
              <RoughNotation multiline type="circle">
                React
              </RoughNotation>
              . committed to staying current with the latest industry trends and
              continuously learning to enhance my skills. Looking to join a
              company where I can grow as a developer and{" "}
              <RoughNotation multiline color="#c8f5cc" type="highlight">
                <span style={{ color: "#161E40" }}>
                  contribute to creating innovative and impactful digital
                  experiences.
                </span>
              </RoughNotation>{" "}
              <RoughNotation multiline strokeWidth={"3px"} type="underline">
                <a href="mailto:anjankarmakar15@gmail.com">Hire me?</a>
              </RoughNotation>
            </p>
          </RoughNotationGroup>
        </article>
      </section>

      <Line />

      <section>
        <SubHeading>Skills</SubHeading>
        <SkillsContainer>
          {data?.map((item) => (
            <Skils key={item.id} item={item} />
          ))}
        </SkillsContainer>
      </section>
      <Line />
      <section>
        <SubHeading>Get in touch</SubHeading>
        <article>
          <p>
            You can find me at various places around the web, including{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/anjankarmakar10/"
            >
              Linkdin
            </a>
            ,{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/anjankarmakar10"
            >
              GitHub
            </a>
            , and{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/anjanstwt"
            >
              Twitter
            </a>
            . Or send me an email on{" "}
            <a href="mailto:anjankarmakar15@gmail.com">
              anjankarmakar15@gmail.com
            </a>{" "}
            <a
              rel="noreferrer"
              target="_blank"
              style={{ color: "#55acee", textDecoration: "underline" }}
              href="https://drive.google.com/file/d/1DSmzs1mhLjMvmpL1AjTyGBQY8xSksDjr/view"
            >
              resume
            </a>
          </p>
        </article>
      </section>
    </section>
  );
};

const Break = styled.span`
  margin-bottom: 20px;
  display: block;
`;

const SkillsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
`;

const Line = styled.hr`
  margin-block: 20px;
`;

const Heading = styled.h1`
  margin-block: 40px;
`;

const SubHeading = styled.h2`
  margin-block: 20px 16px;
  font-size: 1.5rem;
  letter-spacing: normal;
`;

export default Profile;
