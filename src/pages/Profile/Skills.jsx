import data from "./data/data.js";
import Skill from "./Skill.jsx";

import { SkillsContainer, SubHeading } from "./style/profile.style";

const Skills = () => {
  return (
    <section>
      <SubHeading>Skills</SubHeading>
      <SkillsContainer>
        {data?.map((item) => (
          <Skill key={item.id} item={item} />
        ))}
      </SkillsContainer>
    </section>
  );
};
export default Skills;
