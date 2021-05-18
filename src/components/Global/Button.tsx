import styled from "styled-components";

interface Props {
  padding?: string;
  fontSize: string;
  primary: boolean;
  borderRadius?: string;
}

export const CustomButton = styled("button")<Props>`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: ${(props) => props.fontSize};
  margin: 1em;
  padding: ${(props) => props.padding};
  border: 2px solid palevioletred;
  border-radius: ${(props) => props.borderRadius};
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.primary ? "#a85671" : "rgba(168, 86, 113, 0.1)"};
    border-color: ${(props) => (props.primary ? "#a85671" : "palevioletred")};
  }
`;
