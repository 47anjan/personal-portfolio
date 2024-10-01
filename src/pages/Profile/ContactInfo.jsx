import styled from "styled-components";
import { SubHeading } from "./style/profile.style";

const ContactInfo = () => {
  const downloadResume = () => {
    let link = document.createElement("a");
    link.href = "path/to/your/pdf/file.pdf";
    link.download = "Anjan Karmakar - resume.pdf";
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section>
      <SubHeading>Get in touch</SubHeading>
      <article>
        <p>
          You can find me at various places around the web, including{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/47anjan/"
          >
            Linkdin
          </a>
          ,{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/47anjan"
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
          <Button onClick={downloadResume}>Resume</Button>
        </p>
      </article>
    </section>
  );
};

const Button = styled.a`
  padding-block: 2px;
  padding-inline: 32px;
  background: rgb(59, 130, 246);
  padding-bottom: 5px;
  background: linear-gradient(
    90deg,
    rgba(59, 130, 246, 1) 0%,
    rgba(16, 185, 129, 1) 100%
  );
  border: 0;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  margin-left: 8px;
  font-size: 1rem;
`;

export default ContactInfo;
