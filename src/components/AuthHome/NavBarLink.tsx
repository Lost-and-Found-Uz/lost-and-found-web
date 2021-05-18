import styled from "styled-components";
import { Link } from "react-router-dom";

const LS: any = {};

interface Props {
  to: {
    state: {
      primary: Boolean;
      color: string;
    };
  };
}

LS.NAVBAR_LINK = styled(Link)<Props>`
  text-decoration: none;

  background: ${(props) =>
    props.to.state.primary ? "palevioletred" : "white"};
  color: ${(props) => (props.to.state.primary ? "white" : "palevioletred")};

  font-size: 18px;
  margin: 1em;
  padding: 10px 20px;
  border: 2px solid palevioletred;
  border-radius: 99px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.to.state.primary ? "#a85671" : "rgba(168, 86, 113, 0.2)"};
    border-color: ${(props) =>
      props.to.state.primary ? "#a85671" : "palevioletred"};
  }
`;

interface LinkProps {
  link: string;
  name: string;
  color?: string;
  primary: boolean;
}

export function NAVBAR_LINK(props: LinkProps) {
  return (
    <LS.NAVBAR_LINK
      to={{
        pathname: props.link,
        state: { ...props },
      }}
    >
      {props.name}
    </LS.NAVBAR_LINK>
  );
}
