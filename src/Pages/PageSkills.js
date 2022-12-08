import styled from "styled-components";

export default function PageSkills() {
  return (
    <Wrapper>
      <h1>Linguagens e Ferramentas</h1>
      <Carousel>
        <Skills>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/1532/1532556.png" />
            <p>HTML</p>
          </div>
          <div>
            <img src="https://logospng.org/download/css-3/logo-css-3-1536.png" />
            <p>CSS</p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
            <p>JavaScript</p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/919/919851.png" />
            <p>React</p>
          </div>
          <div>
            <img src="https://bognarjunior.files.wordpress.com/2018/09/typescript.png" />
            <p>TypeScript</p>
          </div>
          <div>
            <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png" />
            <p>VSCode</p>
          </div>
          <div>
            <img src="https://img.icons8.com/color/480/nodejs.png" />
            <p>NodeJS</p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
            <p>Github</p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/6124/6124995.png" />
            <p>Linux</p>
          </div>

          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/1532/1532556.png" />
            <p>HTML</p>
          </div>
          <div>
            <img src="https://logospng.org/download/css-3/logo-css-3-1536.png" />
            <p>CSS</p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
            <p>JavaScript</p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/919/919851.png" />
            <p>React</p>
          </div>
          <div>
            <img src="https://bognarjunior.files.wordpress.com/2018/09/typescript.png" />
            <p>TypeScript</p>
          </div>
          <div>
            <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png" />
            <p>VSCode</p>
          </div>
          <div>
            <img src="https://img.icons8.com/color/480/nodejs.png" />
            <p>NodeJS</p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
            <p>Github</p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/6124/6124995.png" />
            <p>Linux</p>
          </div>
        </Skills>
      </Carousel>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h1 {
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 140px;
    padding-top: 10vw;
    padding-left: 10vw;
  }
`;

const Carousel = styled.div`
  overflow: hidden;
  position: relative;
`;

const Skills = styled.div`
  display: flex;
  -webkit-animation: scroll 20s linear infinite;
  animation: scroll 20s linear infinite;
  width: 200vw;

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  div {
    width: 200px;
    height: 200px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    margin-right: 25px;
  }

  img {
    width: 60px;
    margin-bottom: 20px;
  }

  p {
    color: black;
  }
`;
