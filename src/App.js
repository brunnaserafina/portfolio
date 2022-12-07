import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "./Pages/PageHome";
import GlobalStyle from "./GlobalStyle";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<PageHome />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
