import styled from "styled-components";
import aboutme from "../images/aboutme.png";

export default function AboutMe() {
  return (
    <Wrapper>
      <div>
        <h1>Sobre Mim</h1>
        <p>
          Meu nome é Brunna Serafina da Silva, estou iniciando minha carreira
          como desenvolvedora web front-end. Foi no bootcamp da Driven
          Education, onde estou atualmente, que descobri minha paixão por essa
          área. O melhor é que essa experiência, por ter uma formação
          full-stack, permitiu com que eu entendesse também sobre back-end,
          fundamentos da computação, pude produzir projetos individuais e em
          grupo, tornando consciente tudo que estava produzindo: tanto na parte
          do cliente quanto do servidor. Além disso, pude aprimorar habilidades
          de soft skills, como gestão do tempo, autodidatismo, gestão emocional
          e como trabalhar em grupo. Foi bem transformadora e intensa essa
          imersão. Em paralelo também estou me graduando em Análise e
          Desenvolvimento de Sistemas e sinto cada vez mais orgulho e satisfação
          da carreira que escolhi. Acredito que a tecnologia é transformadora
          pois muda o cotidiano das pessoas, as relações e o mundo como um todo!
        </p>
      </div>

      <div>
        <img src={aboutme} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 12vw;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 60px;
    text-align: start;
    margin-bottom: 35px;
    font-weight: 600;
  }

  p {
    font-size: 20px;
    width: 90%;
    text-align: justify;
    color: #2e2e2e;
  }

 img {
    width: 650px;
 }
`;
