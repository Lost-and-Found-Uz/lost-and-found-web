import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

const LS: any = {};

interface Props {
  to: {
    state: {
      primary: Boolean;
      color: string;
    };
  };
}

LS.LOGO_LINK = styled(Link)<Props>`
  text-decoration: none;
  cursor: pointer;
`;

interface LinkProps {
  link: string;
  color?: string;
  primary: boolean;
}

export const LOGO_LINK: React.FC = ({ children }, props: LinkProps) => {
  return (
    <LS.LOGO_LINK
      to={{
        pathname: "/",
        state: { ...props },
      }}
    >
      {children}
    </LS.LOGO_LINK>
  );
};
