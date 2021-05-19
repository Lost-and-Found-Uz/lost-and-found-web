import React, { useState } from "react";
import { Wrapper } from "../../../components/Global/Wrapper";
import { FormWrapper } from "../../../components/Login/FormWrapper";
import { LOGO } from "../../../components/Global/Logo";
import { LoginWrapper } from "../../../components/Login/LoginWrapper";
import { LoginFieldWrapper } from "../../../components/Login/LoginFieldWrapper";
import { Field } from "../../../components/Global/Field";
import { LoginBottomWrapper } from "../../../components/Login/LoginBottomWrapper";
import { LoginSubmitButton } from "../../../components/Login/LoginSubmitButton";
import { LINK } from "../../../components/Global/Link";
import { Text } from "../../../components/Global/Text";
import { colors } from "../../../common/colors";
import { baseUrl } from "../../../common/variables";
import { LOGO_LINK } from "../../../components/AuthHome/LogoLink";
import { useMutation } from "react-query";
import axios from "axios";
import { useAppContext } from "../../../context/AppContext";
import { useHistory } from "react-router";

const Login: React.FC = () => {
  const history = useHistory();
  const { dispatch } = useAppContext();
  const [form, setForm] = useState({ username: "", password: "" });

  const mutation = useMutation(() =>
    axios
      .post(baseUrl + "/api/auth/login", form)
      .then((response) => {
        dispatch({
          type: "loginUser",
          jwt: response.data.token,
        });

        history.push("/");
      })
      .catch((err) => {
        const { response, request } = err;

        if (response) {
          console.log(response);
          alert("Bad request! " + err.response.data.msg);
          console.log(err.response);
        } else if (request) {
          alert("Network error!");
        } else {
          console.log(err);
          alert("Something went wrong!");
        }
      })
  );

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => mutation.mutate();

  return (
    <LoginWrapper>
      <FormWrapper>
        <Wrapper
          displayType="flex"
          contentJustification="center"
          alignment="center"
          height="80px"
        >
          <LOGO_LINK>
            <LOGO />
          </LOGO_LINK>
        </Wrapper>
        <LoginFieldWrapper>
          <Field
            type="text"
            placeholder="Username"
            required
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          <Field
            placeholder="Password"
            type="password"
            required
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </LoginFieldWrapper>
        <LoginSubmitButton onClick={handleSubmit}>Log in</LoginSubmitButton>
        <Wrapper
          displayType="flex"
          contentJustification="center"
          margin="15px 0px"
        >
          <LINK
            link="/"
            name="Forgot password?"
            primary={false}
            color="#000000"
            fontSize="18px"
          />
        </Wrapper>
      </FormWrapper>
      <LoginBottomWrapper>
        <Text margin="0px 15px" fontSize="20px">
          Don't have an account?
        </Text>
        <LINK
          link="/register"
          name=" Sign Up"
          primary={false}
          color={colors.primary}
          fontSize="18px"
        />
      </LoginBottomWrapper>
    </LoginWrapper>
  );
};

export default Login;
