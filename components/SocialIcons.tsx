import styled from "styled-components";
import { CenteredFlex } from "../styles/global-styled";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {ColoredBackgroundImageCircle, RoundedTextLinkStyled} from '../styles/global-styled';

const BORDER_COLOR = "#414752";
const BORDER_THICKNESS = "3px";

const SocialIcons = () => {
  return (
    <CenteredFlex column={false}>
      <SocialCircleLink
        href="https://github.com/me-here"
        icon={faGithub}
        background="green"
      />
      <SocialCircleLink
        href="https://www.linkedin.com/in/mihir-thanekar/"
        icon={faLinkedin}
        background="red"
      />
      <SocialCircleLink
        href="mailto:mihirthanekar@gmail.com"
        icon={faEnvelope}
        background="teal"
      />
      <RoundedTextLinkStyled href="https://www.dropbox.com/s/gdoc7ilygyseryd/mihir_thanekar_resume.pdf?dl=0" borderThickness={BORDER_THICKNESS} borderColor={BORDER_COLOR}>See my resume</RoundedTextLinkStyled>
    </CenteredFlex>
  );
};

const SocialCircleLink = ({ icon, background, href }: any) => (
  <ColoredBackgroundImageCircle href={href} size="75px" borderColor={BORDER_COLOR} borderThickness={BORDER_THICKNESS}>
    <FontAwesomeIcon icon={icon} width="30px" height="30px" />
  </ColoredBackgroundImageCircle>
);

export default SocialIcons;
