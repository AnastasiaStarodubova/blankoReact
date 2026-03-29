import { LandingCard } from "./LandingCard";
import styled from "@emotion/styled";

const StyledSection = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  & ul {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  & h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    white-space: nowrap;
    color: #000000;
  }
`;

export const Landing = () => {
  return (
    <StyledSection>
      <div className="container">
        <h2>Landing pages</h2>
        <ul>
          <LandingCard image="./l1.png" text="Landing one" />
          <LandingCard image="./l2.png" text="Landing two" />
          <LandingCard image="./l3.png" text="Landing three" />
          <LandingCard image="./l4.png" text="Landing four" />
        </ul>
      </div>
    </StyledSection>
  );
};
