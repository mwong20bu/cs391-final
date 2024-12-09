// Import styled-components for styling and react-router-dom for navigation
import styled from "styled-components";
import { Link } from "react-router-dom";

// Define the main container for the header with styling
const HeaderContainer = styled.header`
  background-color: #f2f2f2; // Light gray background color
  padding: 20px; // Add spacing around the header
  display: flex; // Use flexbox for layout
  justify-content: space-between; // Space out items evenly
  align-items: center; // Center items vertically
  color: black; // Text color
`;

// Define styling for the logo element
const Logo = styled.h1`
  font-size: 24px; // Font size for the logo
  margin: 0; // Remove default margin
`;

// Define styling for the navigation bar
const Nav = styled.nav`
  display: flex; // Use flexbox for layout
  gap: 15px; // Add space between navigation links

  // Style for anchor links inside the nav
  a {
    color: black; // Text color for links
    text-decoration: none; // Remove underline from links
    font-size: 18px; // Font size for links

    // Hover effect for links
    &:hover {
      text-decoration: underline; // Add underline when hovered
    }
  }
`;

// Header functional component
const Header = () => {
  return (
    // Use the styled HeaderContainer for the outer structure
    <HeaderContainer>
      {/* Logo section */}
      <Logo>Magic Cards</Logo>

      {/* Navigation section with links */}
      <Nav>
        <Link to="/">Home</Link> {/* Link to the Home page */}
        <Link to="/about">About</Link> {/* Link to the About page */}
      </Nav>
    </HeaderContainer>
  );
};

// Export the Header component as the default export
export default Header;