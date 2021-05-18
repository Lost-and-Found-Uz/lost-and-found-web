import styled from "styled-components";

export const BodyWrapper = styled("div")`
  width: 100%;
  display: flex;
  flex: 1;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
