import styled from "styled-components";
import { colors } from "../../common/colors";

interface Props {
  textAlign?: string;
}

export const PROFILE_INPUT = styled("input")<Props>`
  width: 100%;
  margin: 0% auto;
  padding: 10px 5px;
  font-size: 20px;
  text-align: ${(props) => props.textAlign};
  outline-color: ${colors.primary};
`;
