import styled from "styled-components";
import { ScreenSize } from "./style-constants";

/**The colors to be used in the application.*/
export class Colors {
  static primaryRed = "#F05454";
  static secondaryRed = "#7E0505";
  static accentGrey = "#747474";
}

export const SpacedGroup = styled.div`
  margin: ${(props: { vertical?: string; horizontal?: string }) =>
    `${props.vertical || 0} ${props.horizontal || 0}`};
`;

/**A flex container for a centered row and column.*/
interface CenteredFlexProps {
  column: boolean;
  justifyContent?: string;
  alignItems?: string;
}

export const CenteredFlex = styled.section<CenteredFlexProps>`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
`;

// MARK: Text styles
const sharedTextStyles = `
  margin: 1rem 0;
`;

export const Title = styled.h1`
  ${sharedTextStyles}

  @media only screen and (min-width: ${ScreenSize.small}) {
    font-size: 3rem;
  }
  @media only screen and (min-width: ${ScreenSize.medium}) {
    font-size: 5rem;
  }
`;

export const SecondaryTitle = styled.h2`
  color: ${Colors.accentGrey};
  ${sharedTextStyles}

  @media only screen and (min-width: ${ScreenSize.small}) {
    font-size: 1.25rem;
  }
  @media only screen and (min-width: ${ScreenSize.medium}) {
    font-size: 2rem;
  }
`;

export const SectionHeading = styled.h3`
  font-size: 2rem;
  color: ${Colors.secondaryRed};
  ${sharedTextStyles}
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  font-weight: 200;
  ${sharedTextStyles}
`;

// MARK: Links
export const UnderlinedLink = styled.a`
  text-decoration: underline;
  font-weight: 600;
`;

/**Abstract kind of link that should not be used directly. Provides hover changing background functionality.*/
const HoverableSocialLink = styled.a`
  font-weight: 600;
  transition: background ease 0.3s;
  :hover {
    background: #f05454a5;
  }
`;

export interface LinkProps {
  readonly borderThickness?: string;
  readonly borderColor?: string;
  readonly background?: string;
  readonly margin?: string;
}

export interface SocialCircleStyleProps {
  readonly size: string;
  readonly background?: string;
  readonly borderThickness?: string;
  readonly borderColor?: string;
  readonly margin?: string;
}

export const ColoredBackgroundImageCircle = styled(
  HoverableSocialLink
)<SocialCircleStyleProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  border: ${(props) =>
    props.borderThickness && props.borderColor
      ? `${props.borderThickness} solid ${props.borderColor}`
      : "none"};
  background: ${(props) => props.background};
  display: grid;
  place-items: center;
  margin: ${(props) => props.margin || "unset"};

  @media only screen and (min-width: ${ScreenSize.medium}) {
    margin: 0;
  }
`;

export const RoundedTextLinkStyled = styled(HoverableSocialLink)<LinkProps>`
  border-radius: 25px;
  padding: 1rem;
  border: ${(props) =>
    props.borderThickness && props.borderColor
      ? `${props.borderThickness} solid ${props.borderColor}`
      : "none"};
  background: ${(props) => props.background || null};
  margin: ${(props) => props.margin || "unset"};
`;
