import styled from "styled-components";
import { Link } from "react-router-dom";

const LS: any = {};

interface Props {
  to: {
    state: {
      primary: Boolean;
      color: string;
      fontSize: string;
      margin?: string;
      fontWeight?: number;
    };
  };
}

LS.CUSTOM_LINK = styled(Link)<Props>`
  text-decoration: none;
  color: ${(props) =>
    props.to.state.primary ? "palevioletred" : props.to.state.color};
  font-size: ${(props) => props.to.state.fontSize};
  font-weight: ${(props) => props.to.state.fontWeight};
  margin: ${(props) => props.to.state.margin};
`;

interface LinkProps {
  link: string;
  name: string;
  primary: Boolean;
  color?: string;
  fontSize?: string;
  margin?: string;
  fontWeight?: number;
}

export function LINK(props: LinkProps) {
  return (
    <LS.CUSTOM_LINK
      to={{
        pathname: props.link,
        state: { ...props },
      }}
    >
      {props.name}
    </LS.CUSTOM_LINK>
  );
}
