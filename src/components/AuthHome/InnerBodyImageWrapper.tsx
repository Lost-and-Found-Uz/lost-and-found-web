import styled from "styled-components";

interface Props {
  bgColor?: string;
}

export const InnerBodyImageWrapper = styled("div")<Props>`
  flex: 1;
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 1000px) {
    justify-content: center;
    align-items: center;
    padding: 50px 0px;
  }
`;
