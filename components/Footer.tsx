import {
  CenteredFlex,
  SpacedGroup,
  Colors,
  ColoredBackgroundImageCircle,
} from "../styles/global-styled";
import SocialIcons from "./SocialIcons";
import styled from "styled-components";
import { faHandPaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <ExpandedFlex column={true}>
      <h1>Have an idea? Let's get in touch.</h1>
      <WavingHandWithConcentricCircles />
      <SocialIcons borderColor="white" />
    </ExpandedFlex>
  );
}

// TODO: Make some animation where hover kicks in within a radius, and animation loops instead of transition.
const WavingHandWithConcentricCircles = () => (
  <WavingHandIconLink
    size="150px"
    borderColor="white"
    borderThickness="2px"
    href="google.com"
    style={{ margin: "2rem 0" }}
  >
    <ColoredBackgroundImageCircle
      size="140px"
      borderColor="white"
      borderThickness="2px"
    >
      <ColoredBackgroundImageCircle
        size="130px"
        borderColor="white"
        borderThickness="2px"
      >
        <FontAwesomeIcon
          icon={faHandPaper}
          transform={{ rotate: -42 }}
          width="100px"
          height="100px"
        />
      </ColoredBackgroundImageCircle>
    </ColoredBackgroundImageCircle>
  </WavingHandIconLink>
);

const WavingHandIconLink = styled(ColoredBackgroundImageCircle)`
  transition: transform 0.4s ease-in-out;
  :hover {
    transform: rotate(100deg);
  }
`;

const ExpandedFlex = styled(CenteredFlex)`
  background: ${Colors.primaryRed};
  padding: 2rem 0;
  color: white;
  justify-content: space-around;
`;
