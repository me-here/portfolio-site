import styled from "styled-components";

/**The colors to be used in the application.*/
class Colors {
  static primaryRed =   "#F05454";
  static secondaryRed = "#7E0505";
  static accentGrey =   "#747474";
}

/**A flex container for a centered row and column.*/
interface CenteredFlexProps {
  column: boolean;
  justifyContent?: string;
  alignItems?: string;
}

export const CenteredFlex = styled.section<CenteredFlexProps>`
  display: flex;
  flex-direction: ${props => props.column ? "column" : "row"};
  justify-content: ${props => props.justifyContent || "center"};
  align-items: ${props => props.alignItems || "center"};
  > * {
    margin: 0;
  }
`;

// MARK: Text styles
const sharedTextStyles = `
  margin: 1rem 0;
`;

export const Title = styled.h1`
  font-size: 5rem;
  ${sharedTextStyles}
`;

export const SecondaryTitle = styled.h2`
  font-size: 2rem;
  color: ${Colors.accentGrey};
  ${sharedTextStyles}
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
/**Abstract kind of link that should not be used directly. Provides hover changing background functionality.*/
const HoverableSocialLink = styled.a`
  font-weight: 600;
  transition: background ease 0.3s;
  :hover {
    background: #f05454a5;
  }
`;

export interface LinkProps {
  readonly borderThickness: string;
  readonly borderColor: string;
}

export interface SocialCircleStyleProps {
  readonly size: string;
  readonly background?: string;
  readonly borderThickness?: string;
  readonly borderColor?: string;
}

export const ColoredBackgroundImageCircle = styled(
  HoverableSocialLink
)<SocialCircleStyleProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  border: ${(props)=>(props.borderThickness && props.borderColor) ? `${props.borderThickness} solid ${props.borderColor}` : "none"};
  background: ${(props) => props.background};
  display: grid;
  place-items: center;
  margin: 0 1rem;
`;

export const RoundedTextLinkStyled = styled(HoverableSocialLink)<LinkProps>`
  border-radius: 25px;
  padding: 1rem;
  border: ${(props) => props.borderThickness} solid
    ${(props) => props.borderColor};
  margin: 0 1rem;
`;