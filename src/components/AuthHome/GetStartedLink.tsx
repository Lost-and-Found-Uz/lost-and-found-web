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

LS.GET_STARTED_LINK = styled(Link)<Props>`
  text-decoration: none;

  background: ${(props) =>
    props.to.state.primary ? "palevioletred" : "white"};
  color: ${(props) => (props.to.state.primary ? "white" : "palevioletred")};

  font-size: 20px;
  width: 200px;
  text-align: center;
  padding: 20px 40px;
  border: 2px solid palevioletred;
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.to.state.primary ? "#a85671" : "palevioletred"};
    border-color: ${(props) =>
      props.to.state.primary ? "#a85671" : "palevioletred"};
    color: white;
  }
`;

interface LinkProps {
  link: string;
  name: string;
  color?: string;
  primary: boolean;
}

export function GET_STARTED_LINK(props: LinkProps) {
  return (
    <LS.GET_STARTED_LINK
      to={{
        pathname: props.link,
        state: { ...props },
      }}
    >
      {props.name}
    </LS.GET_STARTED_LINK>
  );
}
