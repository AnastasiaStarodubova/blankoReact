import styled from "@emotion/styled";

const StyledHerro = styled.section`
  background-color: #ff7143;
  & .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .wallpaper {
    width: 417px;
    height: 732px;
    background-image: url("./wallpaper.png");
    background-position: bottom;
    background-size: 417px 860px;
  }
  & h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    line-height: 72px;
    text-align: center;
  }
  & p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    width: 587px;
    text-align: center;
    margin-top: 27px;
  }
  & .buttons {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 22px;
  }
`;

const Button = styled.button`
  width: 226px;
  height: 64px;
  border: none;
  border-radius: 7px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  background-color: ${({ bColor }) => bColor};
  color: ${({ fColor }) => fColor};
`;

export const Herro = () => {
  return (
    <StyledHerro>
      <div className="container">
        <div>
          <h1>Blanko template</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio mauris
            porttitor amet volutpat.
          </p>
          <div className="buttons">
            <Button bColor="black" fColor="#ffffff">
              Purshare template
            </Button>
            <Button bColor="#ffffff" fColor="#000000">
              Other tempaletes
            </Button>
          </div>
        </div>
        <div className="wallpaper"></div>
      </div>
    </StyledHerro>
  );
};
