import styled from "styled-components";
import { CenteredFlex } from "../styles/global-styled";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ColoredBackgroundImageCircle,
  RoundedTextLinkStyled,
} from "../styles/global-styled";
import { ScreenSize } from "../styles/style-constants";

const SocialIcons = ({ borderColor = "#414752", borderThickness = "3px" }) => {
  return (
    <CollapsableRow column={false}>
      <CenteredFlex column={false}>
        <SocialCircleLink
          href="https://github.com/me-here"
          icon={faGithub}
          borderThickness={borderThickness}
          borderColor={borderColor}
        />
        <SocialCircleLink
          href="https://www.linkedin.com/in/mihir-thanekar/"
          icon={faLinkedin}
          borderThickness={borderThickness}
          borderColor={borderColor}
        />
        <SocialCircleLink
          href="mailto:mihirthanekar@gmail.com"
          icon={faEnvelope}
          borderThickness={borderThickness}
          borderColor={borderColor}
        />
      </CenteredFlex>
      <RoundedTextLinkStyled
        margin="0 1rem"
        href="https://www.dropbox.com/s/gdoc7ilygyseryd/mihir_thanekar_resume.pdf?dl=0"
        borderThickness={borderThickness}
        borderColor={borderColor}
      >
        See my resume
      </RoundedTextLinkStyled>
    </CollapsableRow>
  );
};

/* A flex row that collapses to a column when the screen width decreases past a certain threshold. */
const CollapsableRow = styled(CenteredFlex)`
  flex-wrap: wrap;
`;

const SocialCircleLink = ({
  icon,
  href,
  borderColor,
  borderThickness,
}: any) => {
  return (
    <ColoredBackgroundImageCircle
      href={href}
      size="75px"
      borderColor={borderColor}
      borderThickness={borderThickness}
      margin="0 1rem"
    >
      <FontAwesomeIcon icon={icon} width="30px" height="30px" />
    </ColoredBackgroundImageCircle>
  );
};

export default SocialIcons;
