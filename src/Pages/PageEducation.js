import styled from "styled-components";
import { GraduationIcon } from "../common/Icons";
import education from "../images/education.png";

export default function PageEducation() {
  return (
    <Wrapper>
      <Div>
        <h1>Formação</h1>

        <Conjunto>
          <Circle>
            <GraduationIcon fontSize={"40px"} color={"white"} />
          </Circle>
          <Description>
            <h3>2021 - dez/2023</h3>
            <h2>Bacharelado em Análise e Desenvolvimento de Sistemas</h2>
            <p>SENAC - Serviço Nacional de Aprendizagem Comercial</p>
          </Description>
        </Conjunto>

        <Conjunto>
          <Circle>
            <GraduationIcon fontSize={"40px"} color={"white"} />
          </Circle>
          <Description>
            <h3>2022 - fev/2023</h3>
            <h2>Bootcamp em Desenvolvimento Web Full-Stack</h2>
            <p>Driven Education</p>
          </Description>
        </Conjunto>
      </Div>
      <Div>
        <img src={education} />
      </Div>
    </Wrapper>
  );
}

const Conjunto = styled.div`
  display: flex;
  padding: 25px;
  background-color: black;
  height: 150px;
  border-radius: 30px;
  margin-bottom: 30px;
`;

const Description = styled.div`
  h3 {
    color: #d07c3d;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 500;
    color: #87cefa;
  }

  p {
    font-size: 18px;
    color: #d07c3d;
  }
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 35px;
  background-color: #87cefa;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 12vw;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 35px;
  }
`;

const Div = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    height: 85%;
    margin-left: 30px;
    align-self: center;
    margin-top: 30px;
  }
`;
