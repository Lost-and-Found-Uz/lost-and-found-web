import styled from "styled-components";

export const LoginBottomWrapper = styled("div")`
  height: 100px;
  width: 450px;
  padding: 5px 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 550px) {
    width: 300px;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
