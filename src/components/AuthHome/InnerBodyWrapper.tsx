import styled from "styled-components";

interface Props {
  bgColor?: string;
}

export const InnerBodyWrapper = styled("div")<Props>`
  padding: 5% 5% 5% 0%;
  flex: 1;
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* justify-content: space-between; */
`;
