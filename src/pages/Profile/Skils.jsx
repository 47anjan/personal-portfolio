import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Skils = ({ item }) => {
  return (
    <motion.div
      title={`${item.name}${item?.basic ? " (basic)" : ""} `}
      whileInView={{ scale: [0.2, 1], opacity: [0, 1] }}
      transition={{ duration: 0.3, ease: "linear" }}
    >
      <SkillWrapper>
        <img src={item.icon} alt="" />
        <h4>{item.name}</h4>
      </SkillWrapper>
    </motion.div>
  );
};

const SkillWrapper = styled.div`
  img {
    width: 24px;
    transition: all 0.3s linear;
  }
  display: flex;
  align-items: center;
  width: fit-content;
  padding-inline: 1rem;
  padding-block: 6px;
  border-radius: 6px;
  gap: 4px;
  cursor: pointer;
  color: ${(p) => p.theme.colors.canvas};
  background-color: ${(p) => p.theme.colors.text};

  :hover img {
    scale: 1.1;
    transition: all 0.1s linear;
  }
`;

export default Skils;
