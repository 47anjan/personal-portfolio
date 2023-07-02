import { RoughNotationGroup, RoughNotation } from "react-rough-notation";

import { Line, Break, Heading } from "./style/profile.style";
import ContactInfo from "./ContactInfo.jsx";
import Skills from "./Skills";
import About from "./About";

const Profile = () => {
  return (
    <section>
      <About />
      <Line />
      <Skills />
      <Line />
      <ContactInfo />
    </section>
  );
};

export default Profile;
