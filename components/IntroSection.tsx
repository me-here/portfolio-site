import styled from "styled-components";
import {
  SectionHeading,
  Paragraph,
  CenteredFlex,
  ColoredBackgroundImageCircle,
  SpacedGroup,
} from "../styles/global-styled";
import { ScreenSize } from "../styles/style-constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";

export default function IntroSection() {
  return (
    <>
      <SpacedGroup vertical="3rem" horizontal="3rem">
        <SectionHeading>Intro</SectionHeading>
        <Paragraph>
          Hi, thanks for visiting! I’m Mihir -- a lifelong learner who is
          hopelessly curious about how systems work. This tinkering helps me
          hone my craft to design systems that are more maintainable at scale. I
          develop with the hope that what I make will be used by human beings to
          improve their lives. This has led me to an interest in mobile and web
          development, as they are the closest to the end user’s fingertips.
          However, I am always looking to try new things, and will soon explore
          AI and concurrency more deeply. If you want to make friends or ask
          about my work, please feel free to reach out to me to connect. Thanks
          again!
        </Paragraph>
      </SpacedGroup>
      <ResponsiveInfoFlex
        column={false}
        justifyContent="space-around"
        alignItems="start"
      >
        <DetailedCircleView
          primaryText="UC Irvine Computer Science"
          secondaryText="2024"
          background="#D9A7A7"
          icon={faGraduationCap}
          href="https://directory.uci.edu/people/mthaneka"
        />
        <DetailedCircleView
          primaryText="iOS Developer"
          secondaryText="Student Center Event Services"
          background="#B1D6B0"
          icon={faApple}
          href="https://www.studentcenter.uci.edu"
        />
        <DetailedCircleView
          primaryText="Located in Fremont & Irvine"
          background="#B0B4D6"
          icon={faMapMarkedAlt}
          href=""
        />
      </ResponsiveInfoFlex>
    </>
  );
}

const ResponsiveInfoFlex = styled(CenteredFlex)`
  @media only screen and (min-width: ${ScreenSize.small}) {
    flex-direction: column;
    align-items: center;
    > * {
      margin: 1rem 0;
    }
  }
  @media only screen and (min-width: ${ScreenSize.medium}) {
    flex-direction: row;
  }
`;

interface DetailedCircleViewProps {
  primaryText: string;
  secondaryText?: string;
  background: string;
  icon: any;
  href?: string;
}

const DetailedCircleView = (props: DetailedCircleViewProps) => (
  <CenteredFlex column={true} style={{ textAlign: "center" }}>
    <ColoredBackgroundImageCircle
      href={props.href}
      size="75px"
      background={props.background}
    >
      <FontAwesomeIcon icon={props.icon} width="30px" height="30px" />
    </ColoredBackgroundImageCircle>
    <DetailedParagraph>{props.primaryText}</DetailedParagraph>
    <i>{props.secondaryText}</i>
  </CenteredFlex>
);

const DetailedParagraph = styled(Paragraph)`
  font-weight: 300;
  margin: 10px 0;
`;
