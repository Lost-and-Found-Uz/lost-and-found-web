import styled from "styled-components";
import logo from "../../assets/svg/Choralogo_white.svg";

export const Logo = styled("img")`
  width: 80px;
  height: 40px;
`;

export const LOGO_WHITE = () => {
  return <Logo src={logo} />;
};
