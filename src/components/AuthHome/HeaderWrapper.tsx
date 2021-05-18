import styled from "styled-components";

export const HeaderWrapper = styled("div")`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    margin-top: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
