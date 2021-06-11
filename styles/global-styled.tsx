import styled from "styled-components";

/**A flex container for a centered row and column.*/
export const CenteredFlex = styled.section`
    display: flex;
    flex-direction: ${(props: {column: boolean}) => props.column ? "column" : "row"};
    justify-content: center;
    align-items: center;
    > * {
        margin: 0;
    }
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
    readonly borderThickness: string;
    readonly borderColor: string;
}

export interface SocialCircleStyleProps {
    readonly borderThickness: string;
    readonly borderColor: string;
    readonly size: string;
}
  
export const SocialCircleStyled = styled(HoverableSocialLink)<SocialCircleStyleProps>`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border-radius: 50%;
    border: ${(props) => props.borderThickness} solid ${(props) => props.borderColor};

    display: grid;
    place-items: center;
    margin: 0 1rem;
`;

export const RoundedTextLinkStyled = styled(HoverableSocialLink)<LinkProps>`
  border-radius: 25px;
  padding: 1rem;
  border: ${props => props.borderThickness} solid ${props => props.borderColor};
  margin: 0 1rem;
`;