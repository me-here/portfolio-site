import Image from 'next/image'
import styled from 'styled-components'
import { CenteredFlex, Title, SecondaryTitle } from '../styles/global-styled'
import SocialIcons from './SocialIcons'

export default function Hero() {
  return (
    <CenteredFlex column={true}>
      <SpacedGroup vertical="3rem">
        <Title>Mihir Thanekar</Title>
        <SecondaryTitle>Student Software Developer</SecondaryTitle>
      </SpacedGroup>
      <Image
        src="/hero_image.png"
        alt="Cartoon Mihir with a laptop."
        width={500}
        height={500}
      />
      <SpacedGroup vertical="2rem">
        <SocialIcons/>
      </SpacedGroup>
    </CenteredFlex>
  );
};

const SpacedGroup = styled.div`
  margin: ${(props: {vertical: string}) => props.vertical} 0;

  > * {
    margin: 0;
    text-align: center;
  }
`;