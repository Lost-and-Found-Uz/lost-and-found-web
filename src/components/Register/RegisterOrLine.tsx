import styled from "styled-components";
import { Text } from "../Global/Text";

const HrLine = styled("hr")`
  width: 40%;
  height: 1px;
  border: none;
  background-color: grey;
`;

export const RegisterOrLine = styled("div")`
  width: 90%;
  margin: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const REGISTER_OR_LINE = () => {
  return (
    <RegisterOrLine>
      <HrLine />
      <Text color="grey">OR</Text>
      <HrLine />
    </RegisterOrLine>
  );
};
