import styled from "styled-components";
import { colors } from "../../common/colors";

export const RegisterGoogleButton = styled("button")`
  width: 90%;
  height: 45px;
  margin: 10px 5%;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-weight: 600;
  font-size: 20px;
  background-color: ${colors.primary};
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  padding: 0% 10%;
  align-items: center;

  &:hover {
    background-color: rgb(184, 94, 124);
  }
`;
