import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
}

export const Image = styled("img")<Props>`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
  -webkit-user-drag: none;
`;
