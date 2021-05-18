import styled from "styled-components";

interface Props {
  width?: string;
}

export const List = styled("ul")<Props>`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: "center";
  width: ${(props) => props.width};
`;
