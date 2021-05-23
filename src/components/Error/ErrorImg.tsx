import styled from "styled-components";
import NetworkImage from "../../assets/svg/network.svg";

export const Img = styled("img")`
  width: 200px;

  @media (max-width: 600px) {
    width: 150px;
  }
`;

export const ERROR_IMG = () => <Img src={NetworkImage} />;
