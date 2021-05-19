import styled from "styled-components";
import google from "../../assets/svg/google.svg";

export const GoogleIcon = styled("img")`
  width: 25px;
  height: 25px;
`;

export const GOOGLE_ICON = () => <GoogleIcon src={google} />;
