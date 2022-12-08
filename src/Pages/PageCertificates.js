import styled from "styled-components";
import { CertificateIcon } from "../common/Icons";
import education from "../images/education.png";

export default function PageCertificates() {
  return (
    <Wrapper>
      <Div>
        <h1>Certificados</h1>

        <Conjunto
          href="https://cursos.alura.com.br/user/brunnaserafina/course/html5-css3-primeiros-passos/formalCertificate"
          target="_blank"
        >
         
            <CertificateIcon fontSize={"40px"} color={"white"} />
         
          <Description>
            <h3>8 horas</h3>
            <h2>HTML5 E CSS3: CRIE UMA PÁGINA DA WEB</h2>
            <p>Alura</p>
          </Description>
        </Conjunto>

        <Conjunto
          href="https://cursos.alura.com.br/user/brunnaserafina/course/html5-css3-posicionamento-listas-navegacao/formalCertificate"
          target="_blank"
        >
          <CertificateIcon fontSize={"40px"} color={"white"} />

          <Description>
            <h3>8 horas</h3>
            <h2>HTML5 E CSS3: POSICIONAMENTO, LISTAS E NAVEGAÇÃO</h2>
            <p>Alura</p>
          </Description>
        </Conjunto>
      </Div>
    </Wrapper>
  );
}

const Conjunto = styled.a`
  display: flex;
  padding: 25px;
  background-color: black;
  height: 150px;
  border-radius: 40px;
  margin-bottom: 30px;
`;

const Description = styled.div`
  width: 90%;

  h3 {
    color: pink;
    margin-bottom: 15px;
    margin-left: 15px;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 500;
    margin-left: 15px;
    color: #87cefa;
  }

  p {
    font-size: 18px;
    margin-left: 15px;
    color: pink;
  }
`;

const Circle = styled.div``;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 10vw;
  padding-left: 10vw;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 35px;
  }
`;

const Div = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
