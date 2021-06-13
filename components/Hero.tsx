import Image from "next/image";
import styled from "styled-components";
import {
  CenteredFlex,
  Title,
  SecondaryTitle,
  SpacedGroup,
} from "../styles/global-styled";
import { ScreenSize } from "../styles/style-constants";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <CenteredFlex column={true}>
      <CenteredSpacedGroup vertical="3rem">
        <Title>Mihir Thanekar</Title>
        <SecondaryTitle>Student Software Developer</SecondaryTitle>
      </CenteredSpacedGroup>

      <ResponsiveHeroImage>
        <Image
          src="/hero_image.png"
          alt="Cartoon Mihir with a laptop."
          layout="fill"
          //        width={500}
          //       height={500}
        />
      </ResponsiveHeroImage>
      <CenteredSpacedGroup vertical="2rem">
        <SocialIcons />
      </CenteredSpacedGroup>
    </CenteredFlex>
  );
}

const CenteredSpacedGroup = styled(SpacedGroup)`
  > * {
    text-align: center;
  }
`;

const ResponsiveHeroImage = styled.div`
  width: 250px;
  height: 250px;
  position: relative;

  @media only screen and (min-width: ${ScreenSize.medium}) {
    height: 500px;
    width: 500px;
  }
  @media only screen and (min-width: ${ScreenSize.large}) {
    height: 700px;
    width: 700px;
  }
`;
