import { RoughNotationGroup, RoughNotation } from "react-rough-notation";

import { Break, Heading } from "./style/profile.style";

const About = () => {
  return (
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
  );
};
export default About;
