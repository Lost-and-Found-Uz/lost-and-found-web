import styled from "styled-components";
import { colors } from "../../common/colors";
import { Text } from "../Global/Text";

export const NotFoundText = styled("div")`
  font-size: 85px;
  display: flex;
`;

export const NOT_FOUND_404_TEXT = () => {
  return (
    <NotFoundText>
      4<Text color={colors.primary}>0</Text>4
    </NotFoundText>
  );
};
