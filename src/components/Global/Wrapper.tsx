import styled from "styled-components";

interface Props {
  padding?: string;
  backgroundColor?: string;
  height?: string;
  width?: string;
  displayType?: string;
  contentJustification?: string;
  alignment?: string;
  margin?: string;
  position?: string;
  flexDirection?: string;
  flex?: number;
  flexWrap?: string;
}

export const Wrapper = styled("div")<Props>`
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: ${(props) => props.displayType};
  justify-content: ${(props) => props.contentJustification};
  align-items: ${(props) => props.alignment};
  margin: ${(props) => props.margin};
  position: ${(props) => props.position};
  flex-direction: ${(props) => props.flexDirection};
  flex: ${(props) => props.flex};
  flex-wrap: ${(props) => props.flexWrap};
`;
