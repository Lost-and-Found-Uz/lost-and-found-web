import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const Field = styled(TextField)`
  width: 250px;
  height: 50px;
  padding: 0px 10px;
  border-radius: 5px;
  font-size: 20px;
  border: 2px solid grey;
  background-color: #f5f5f5;
  margin: 20px;
`;

export const HOME_POST_FIELD = (props: { className: any }) => {
  const { className } = props;

  return (
    <Field
      className={className}
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      color="secondary"
    />
  );
};
