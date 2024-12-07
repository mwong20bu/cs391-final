import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import About from "./components/About";
import MagicCard from "./components/MagicCard"; // MagicCard is the landing page

// Styled Parent Div
const ParentDiv = styled.div`
  width: 90vw;
  margin: auto;
  border: 5px black solid;
`;

export default function App() {
  return (
    <Router>
      <ParentDiv>
        <Header />
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<MagicCard />} />
          {/* Route for the About page */}
          <Route path="/about" element={<About />} />
        </Routes>
      </ParentDiv>
    </Router>
  );
}