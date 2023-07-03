import styled from "styled-components";
import BackgroundOrbs from "./Orbs/BackgroundOrbs";
import { ArrowRight } from "react-feather";
import { motion } from "framer-motion";
import { LinkWrpper, ProflileLink } from "../style/home.style";

export const Hero = () => {
  const container = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Wrapper>
      <BackgroundOrbs />
      <Content>
        <motion.div
          transition={{ ease: "linear", duration: ".5" }}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <Heading>
            A Frontend Developer love to building tools that are user-friendly,
            simple and delightful
          </Heading>
          <ProfileInfo>
            👋 Hey I'm Anjan, a frontend engineer based in Bangladesh. I'm
            currently loking for opportunity to expends my skills.
          </ProfileInfo>

          <LinkWrpper to={"/profile"}>
            <ProflileLink>View profile</ProflileLink>
            <div style={{ paddingTop: "12px" }}>
              <ArrowRight className="icon" />
            </div>
          </LinkWrpper>
        </motion.div>
      </Content>
    </Wrapper>
  );
};

const Heading = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
  @media (min-width: 440px) {
    text-align: left;
  }
`;

const Content = styled.div`
  padding-top: 4rem;
`;

const ProfileInfo = styled.p`
  margin-block: 1rem;
`;

const Wrapper = styled.section`
  position: relative;
`;
