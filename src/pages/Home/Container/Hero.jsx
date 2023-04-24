import styled from "styled-components";
import BackgroundOrbs from "./Orbs/BackgroundOrbs";
import { ArrowRight } from "react-feather";
import { motion } from "framer-motion";

export const Hero = () => {
  const container = {
    hidden: { y: 25, opacity: 0 },
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
            currently loking for opportunity to show my skills.
          </ProfileInfo>

          <LinkWrpper>
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
  margin-bottom: 2.5rem;
`;

const Content = styled.div`
  padding-top: 5rem;
`;

const ProfileInfo = styled.p`
  margin-block: 1rem;
`;

const LinkWrpper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .icon {
    transition: all 0.3s linear;
  }

  &:hover .icon {
    margin-left: 0.5rem;
    transition: all 0.15s linear;
  }
`;

const ProflileLink = styled.a`
  font-size: 1.3rem;
  line-height: 1.6;
`;

const Wrapper = styled.section`
  position: relative;
`;
