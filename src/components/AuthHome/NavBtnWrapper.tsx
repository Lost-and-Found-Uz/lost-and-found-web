import styled from "styled-components";

export const NAV_BTN_WRAPPER = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    margin-top: 20px;
  }
`;
