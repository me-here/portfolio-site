import Image from "next/image";
import styled from "styled-components";
import {
  CenteredFlex,
  Title,
  SecondaryTitle,
  SpacedGroup,
} from "../styles/global-styled";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <CenteredFlex column={true}>
      <CenteredSpacedGroup vertical="3rem">
        <Title>Mihir Thanekar</Title>
        <SecondaryTitle>Student Software Developer</SecondaryTitle>
      </CenteredSpacedGroup>
      <Image
        src="/hero_image.png"
        alt="Cartoon Mihir with a laptop."
        width={500}
        height={500}
      />
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
