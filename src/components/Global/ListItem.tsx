import styled from "styled-components";

interface Props {
  fontSize?: string;
  textColor?: string;
}

export const ListItem = styled("li")<Props>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.textColor};
`;
