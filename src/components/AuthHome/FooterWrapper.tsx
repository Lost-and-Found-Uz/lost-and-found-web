import styled from "styled-components";

export const FooterWrapper = styled("div")`
  width: 450px;
  height: 100px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
