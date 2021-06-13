import Image from "next/image";
import styled from "styled-components";
import { ScreenSize } from "../styles/style-constants";

const Navbar = () => {
  return (
    <NavContainer>
      <LogoContainer href="./">
        <Image src="/logo.png" layout="fill" alt="My logo" />
      </LogoContainer>
      <RightLinks>
        <a href="google.com">Home</a>
        <a href="google.com">Blog</a>
        <a href="google.com">About</a>
      </RightLinks>
    </NavContainer>
  );
};

const LogoContainer = styled.a`
  width: 42.18px;
  height: 34.09px;
  position: relative;
  flex-shrink: 0;
`;

const NavContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;

  a {
    transition: ease-out 0.3s;

    :hover {
      transform: scale(1.2, 1.2);
    }
  }
`;

const RightLinks = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  font-weight: bold;

  @media only screen and (min-width: ${ScreenSize.medium}) {
    width: 33%;
    flex-grow: 0;
  }
`;

export default Navbar;
