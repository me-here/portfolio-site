import styled from "styled-components";
import {
  SectionHeading,
  Colors,
  SpacedGroup
} from "../styles/global-styled";
const SkillsSection = () => (
  <SpacedGroup vertical="3rem" horizontal="3rem">
    <SectionHeading>Skills</SectionHeading>
    <SkillGrid>
        <SkillBubble title="iOS" details={["Swift", "XCode", "Alamofire", "UIKit"]}/>
        <SkillBubble title="Web" details={["HTML", "CSS", "JS", "React.js", "Next.js", "Vercel", "Vue.js"]}/>
        <SkillBubble title="Cross-Platform" details={["Flutter", "Dart", "Python", "Java", "Memcheck", "C++", "LLDB"]}/>
        <SkillBubble title="Backend" details={["Node.js", "Express.js", "GraphQL", "SQL", "MongoDB", "Firebase", "AWS"]}/>
    </SkillGrid>
  </SpacedGroup>
);

const SkillGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 300px);
    grid-template-rows: repeat(2, 300px);
    place-content: center;
    gap: 1rem;
`;

interface SkillBubbleProps {
    readonly title: string
    readonly details: Array<string>
}

const SkillBubble = (props: SkillBubbleProps) => (
    <StyledBubble>
        <h3>{props.title}</h3>
        <SingularSkillDetailStyled>
            {props.details.map(detail => <p key={detail}>{detail}</p>)}
        </SingularSkillDetailStyled>
    </StyledBubble>
);


const SingularSkillDetailStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: ${Colors.secondaryRed}
`;


const StyledBubble = styled.div`
    border: 5px solid black;
    border-radius: 10%;
    text-align: center;
`;

export default SkillsSection;
