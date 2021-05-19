import styled from "styled-components";

interface Props {
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  fontFamily?: string;
  margin?: string;
  lineHeight?: string;
  textAlign?: string;
}

export const Text = styled("p")<Props>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  font-family: ${(props) => props.fontFamily};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
  line-height: ${(props) => props.lineHeight};
`;
