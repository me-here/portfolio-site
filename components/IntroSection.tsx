import styled from "styled-components";
import {
  SectionHeading,
  Paragraph,
  CenteredFlex,
  ColoredBackgroundImageCircle,
} from "../styles/global-styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons"

export default function Hero() {
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
      <CenteredFlex column={false} justifyContent="space-around">
        <DetailedCircleView primaryText="UC Irvine Computer Science" secondaryText="2024" background="#D9A7A7" icon={faGraduationCap}/>
        <DetailedCircleView primaryText="iOS Developer" secondaryText="Student Center Event Services" background="#B1D6B0" icon={faApple}/>
        <DetailedCircleView primaryText="Located in Fremont & Irvine" background="#B0B4D6" icon={faMapMarkedAlt}/>
      </CenteredFlex>
    </>
  );
}

interface DetailedCircleViewProps {
  primaryText: string;
  secondaryText?: string;
  background: string;
  icon: any;
}

const DetailedCircleView = (props: DetailedCircleViewProps) => (
  <CenteredFlex column={true}>
    <ColoredBackgroundImageCircle
      href="google.com"
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

const SpacedGroup = styled.div`
  margin: ${(props: { vertical?: string; horizontal?: string }) =>
    `${props.vertical || 0} ${props.horizontal || 0}`};
`;
