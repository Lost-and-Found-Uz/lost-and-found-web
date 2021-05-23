import React from "react";
import { ERROR_WRAPPER } from "../../../components/Error/ErrorWrapper";
import { ERROR_IMG } from "../../../components/Error/ErrorImg";
import { ERROR_TEXT } from "../../../components/Error/ErroText";

const ErrorPage = () => {
  return (
    <ERROR_WRAPPER>
      <ERROR_IMG />
      <ERROR_TEXT>Oops, something went wrong!</ERROR_TEXT>
    </ERROR_WRAPPER>
  );
};

export default ErrorPage;
