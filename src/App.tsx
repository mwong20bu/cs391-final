// Import necessary modules and components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // For routing functionality
import styled from "styled-components"; // For styled-components
import Header from "./components/Header"; // Header component
import About from "./components/About"; // About page component
import MagicCard from "./components/MagicCard"; // MagicCard component serves as the landing page

// Styled ParentDiv component for the main layout container
const ParentDiv = styled.div`
  width: 90vw; // Set the width of the main container to 90% of the viewport width
  margin: auto; // Center the container horizontally
  border: 5px black solid; // Add a black border around the container
`;

// Main App component
export default function App() {
  return (
    // Router component wraps the application for handling navigation
    <Router>
      {/* Main container styled with ParentDiv */}
      <ParentDiv>
        {/* Header component, displayed on all pages */}
        <Header />
        
        {/* Define application routes */}
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