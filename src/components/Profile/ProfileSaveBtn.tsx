import styled from "styled-components";
import { colors } from "../../common/colors";

export const PROFILE_SAVE_BTN = styled("button")`
  width: 100%;
  height: 50px;
  background-color: ${colors.primary};
  color: #ffffff;
  border-radius: 5px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: lightgray;
  }
`;
