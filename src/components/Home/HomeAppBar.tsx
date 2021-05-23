import styled from "styled-components";
import { colors } from "../../common/colors";

export const HOME_APP_BAR = styled("div")`
  min-height: 8vh;
  width: 100%;
  background-color: ${colors.primary};
  padding: 0% 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  z-index: 2;
`;
