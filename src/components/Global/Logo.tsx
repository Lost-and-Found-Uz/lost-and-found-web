import styled from "styled-components";
import logo from "../../assets/svg/Choralogo.svg";

export const Logo = styled("img")`
  width: 100px;
  height: 50px;
`;

export const LOGO = () => {
  return <Logo src={logo} />;
};
