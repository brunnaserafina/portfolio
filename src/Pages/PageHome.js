import React, { useRef } from "react";
import { GithubIcon, LinkedinIcon } from "../common/Icons";
import AboutMe from "./PageAboutMe";
import PageEducation from "../Pages/PageEducation";
import styled from "styled-components";

export default function PageHome() {
  const about = useRef(null);
  const education = useRef(null);
  const hardSkills = useRef(null);
  const achievements = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Wrapper>
      <Header>
        <Signature>
          <h3>Brunna Serafina</h3>
        </Signature>
        <Menu>
          <li onClick={() => scrollToSection(about)}>Sobre mim</li>
          <li onClick={() => scrollToSection(education)}>Formação</li>
          <li onClick={() => scrollToSection(hardSkills)}>Hard Skills</li>
          <li onClick={() => scrollToSection(achievements)}>Certificados</li>
          <li onClick={() => scrollToSection(projects)}>Projetos</li>
          <li onClick={() => scrollToSection(contact)}>Contato</li>
        </Menu>
      </Header>

      <Home>
        <Description>
          <h2>
            Frontend <br />
            DEVELOPER.
          </h2>
          <p>
            Olá, eu sou a Brunna. Seja bem-vindo(a) ao meu portfólio! Aqui você
            irá encontrar informações sobre mim, minha formação, skills e
            projetos que participei. Dúvidas? Entre em{" "}
            <span onClick={() => scrollToSection(contact)}>contato</span>.
          </p>
        </Description>
        <Background></Background>
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQG0wEMp79SQ4w/profile-displayphoto-shrink_800_800/0/1642774449257?e=1675900800&v=beta&t=nJsOkkJkWoCVlH63GWL_X_hKp9Ln8OFKPKV39jZAy7Y" />
        <Board />
        <Board2 />
        <Icon>
          <a href="https://github.com/brunnaserafina" target="_blank">
            <GithubIcon
              fontSize={"60px"}
              color={"#fc3030"}
              cursor={"pointer"}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/brunna-serafina/"
            target="_blank"
          >
            <LinkedinIcon
              fontSize={"60px"}
              color={"#fc3030"}
              cursor={"pointer"}
            />
          </a>
        </Icon>
      </Home>

      <About ref={about}>
        <AboutMe />
      </About>

      <Education ref={education}>
        <PageEducation />
      </Education>

      <HardSkills ref={hardSkills}>Hard Skills</HardSkills>
      <Achievements ref={achievements}>Certificados</Achievements>
      <Projects ref={projects}>Projetos</Projects>
      <Contact ref={contact}>Contato</Contact>
    </Wrapper>
  );
}

const Board = styled.div`
  width: 300px;
  height: 400px;
  border: 3px solid yellow;
  position: absolute;
  right: 600px;
  top: 260px;
  filter: blur(5px);
`;

const Board2 = styled.div`
  width: 300px;
  height: 400px;
  border: 0.5px solid white;
  position: absolute;
  right: 600px;
  top: 260px;
`;

const Wrapper = styled.div`
  overflow-x: hidden;
`;

const Icon = styled.div`
  position: absolute;
  bottom: 50px;
  left: 30px;
  width: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
`;

const Signature = styled.div`
  background-color: #fc3030;
  font-family: Satisfy;
  font-size: 30px;
  width: 60vw;
  color: #87cefa;

  h3 {
    margin-top: 15px;
    margin-left: 20px;
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  background-color: black;
  width: 40vw;

  li {
    cursor: pointer;
    color: #87cefa;
    margin-top: 15px;
    margin-right: 12px;
    font-size: 18px;
  }
`;

const Description = styled.div`
  width: 60vw;
  height: 95vh;
  background: linear-gradient(
    0deg,
    rgba(0, 160, 194, 1) 0%,
    rgba(252, 48, 48, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 65px;
    color: black;
    margin-bottom: 10px;
    font-family: Lexend Deca;
    font-weight: 600;
  }

  p {
    width: 30vw;
    font-size: 20px;
    text-align: center;
    color: #494c4e;
    width: 410px;
    text-align: justify;
  }

  span {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Background = styled.div`
  width: 40vw;
  height: 95vh;
  background-image: url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2020&q=80");
  background-repeat: no-repeat;
  background-size: 40vw 100vh;
`;

const Home = styled.div`
  display: flex;

  img {
    width: 300px;
    height: 400px;
    z-index: 2;
    position: absolute;
    top: 15vw;
    right: 65vh;
    object-fit: cover;
    //border: 3px solid #494c4e;
  }
`;

const About = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(252, 48, 48, 1) 0%,
    rgba(0, 160, 194, 1) 100%
  );
`;

const Education = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(0, 160, 194, 1) 0%,
    rgba(252, 48, 48, 1) 100%
  );
`;

const HardSkills = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(252, 48, 48, 1) 0%,
    rgba(0, 160, 194, 1) 100%
  );
`;

const Achievements = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(0, 160, 194, 1) 0%,
    rgba(252, 48, 48, 1) 100%
  );
`;

const Projects = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(252, 48, 48, 1) 0%,
    rgba(0, 160, 194, 1) 100%
  );
`;

const Contact = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(0, 160, 194, 1) 0%,
    rgba(252, 48, 48, 1) 100%
  );
`;
