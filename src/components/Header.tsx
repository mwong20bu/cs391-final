import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: #f2f2f2;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;

  a {
    color: black;
    text-decoration: none;
    font-size: 18px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Magic Cards</Logo>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;