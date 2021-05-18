import styled from "styled-components";

export const FooterWrapper = styled("div")`
  width: 100%;
  height: 100px;
  margin-top: 30px;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
