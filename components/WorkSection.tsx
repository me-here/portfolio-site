import styled from "styled-components";
import {
  SectionHeading,
  Colors,
  SpacedGroup,
  Paragraph,
  CenteredFlex,
  RoundedTextLinkStyled,
  UnderlinedLink
} from "../styles/global-styled";
import Image from "next/image";

interface Link {
  title: string;
  href: string;
}

interface IWorkPiece {
  title: string;
  subtitle: string;
  imgSrc: string;
  link?: Link;
}

const WORKS_JSON: Array<IWorkPiece> = [
  {
    title: "UCI Now",
    subtitle:
      "Event management and study spaces booking for university students.",
    imgSrc: "/work/uci_now.png",
    link: {
      href: "https://apps.apple.com/us/app/uci-now/id1382415698?l=es",
      title: "See in App Store",
    },
  },
  {
    title: "BusiFind",
    subtitle: "Find and donate to local businesses near you, for covid relief.",
    imgSrc: "/work/busifind.png",
    link: {
      href: "https://github.com/me-here/localbusinesss",
      title: "See Devpost",
    },
  },
  {
    title: "TikTok Clone",
    subtitle:
      "Event management and study spaces booking for university students.",
    imgSrc: "/work/tiktok_clone.png",
    link: {
      href: "https://github.com/me-here/tiktok",
      title: "See Github",
    },
  },
];

const WorkSection = () => (
  <SpacedGroup vertical="3rem" horizontal="3rem">
    <SectionHeading>Work</SectionHeading>
    {WORKS_JSON.map((work) => (
      <WorkPiece
        key={work.title}
        title={work.title}
        subtitle={work.subtitle}
        imgSrc={work.imgSrc}
        link={work.link}
      />
    ))}
  </SpacedGroup>
);

const WorkPiece = (props: IWorkPiece) => (
  <CenteredFlex column={false} justifyContent="space-around">
    <CenteredFlex column={true} alignItems="start" style={{width: "20vw"}}>
      <h2>{props.title}</h2>
      <Paragraph>{props.subtitle}</Paragraph>

      <CenteredFlex column={false} justifyContent="space-between" alignItems="center" style={{width: "100%"}}>
        {props.link ? (
          <RoundedTextLinkStyled href={props.link.href} background="#EB9362">
            {props.link.title}
          </RoundedTextLinkStyled>
        ) : (
          <></>
        )}
        <UnderlinedLink>Learn More</UnderlinedLink>
      </CenteredFlex>
    </CenteredFlex>
    <Image src={props.imgSrc} width="366px" height="701px" alt="My logo" />
  </CenteredFlex>
);

export default WorkSection;
