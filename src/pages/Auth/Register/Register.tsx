import React, { useState } from "react";
import { LOGO } from "../../../components/Global/Logo";
import { Text } from "../../../components/Global/Text";
import { Wrapper } from "../../../components/Global/Wrapper";
import { RegisterFormWrapper } from "../../../components/Register/RegisterFormWrapper";
import { RegisterGoogleButton } from "../../../components/Register/RegisterGoogleButton";
import { RegisterWrapper } from "../../../components/Register/RegisterWrapper";
import { GOOGLE_ICON } from "../../../components/Register/GoogleIcon";
import { Field } from "../../../components/Global/Field";
import { REGISTER_OR_LINE } from "../../../components/Register/RegisterOrLine";
import { RegisterSubmitButton } from "../../../components/Register/RegisterButton";
import { LINK } from "../../../components/Global/Link";
import { LOGO_LINK } from "../../../components/AuthHome/LogoLink";
import { useMutation } from "react-query";
import { baseUrl } from "../../../common/variables";
import { useAppContext } from "../../../context/AppContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Register: React.FC = () => {
  const { t } = useTranslation();
  const { dispatch } = useAppContext();
  const history = useHistory();

  const [form, setForm] = useState({
    email: "",
    fullName: "",
    username: "",
    password: "",
  });

  const mutation = useMutation(() =>
    axios
      .post(baseUrl + "/api/auth/register", form)
      .then((response) => {
        alert(t("Registeration successful!"));
        localStorage.setItem("userId", response.data.id);

        dispatch({
          type: "loginUser",
          jwt: response.data.token,
        });

        history.push("/");
      })
      .catch((err) => {
        if (err.response) {
          alert("Bad request! " + err.response.data.msg);
        } else if (err.request) {
          alert("Network error!");
        } else {
          alert("Something went wrong!");
        }
      })
  );

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleRegister = () => {
    mutation.mutate();
  };

  return (
    <RegisterWrapper>
      <RegisterFormWrapper>
        <Wrapper
          displayType="flex"
          contentJustification="center"
          alignment="center"
          height="65px"
        >
          <LOGO_LINK>
            <LOGO />
          </LOGO_LINK>
        </Wrapper>
        {/* <Wrapper
          displayType="flex"
          alignment="center"
          contentJustification="center"
          margin="5px auto"
          width="90%"
        >
          <Text
            color="grey"
            fontSize="19px"
            textAlign="center"
            margin="5px 0px"
          >
            You can sign up easily with google if you have an account!
          </Text>
        </Wrapper>
        <RegisterGoogleButton>
          <GOOGLE_ICON />
          <Text>Sign up with Google</Text>
        </RegisterGoogleButton>
        <REGISTER_OR_LINE /> */}
        <Wrapper margin="0% 5%">
          <Field
            type="text"
            placeholder={t("Full Name")}
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
          />
          <Field
            type="email"
            placeholder={t("Email")}
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <Field
            type="text"
            placeholder={t("Username")}
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          <Field
            type="text"
            placeholder={t("Password")}
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </Wrapper>
        <RegisterSubmitButton onClick={handleRegister}>
          {t("Register")}
        </RegisterSubmitButton>
        <Text
          textAlign="center"
          margin="10px 0px 0px 0px"
          lineHeight="25px"
          fontSize="19px"
        >
          {t("By signing up, you agree to our Terms & Services")} <br />{" "}
          {/* <LINK
            link="/terms"
            name="Terms & Services"
            primary={false}
            color="grey"
          />{" "} */}
        </Text>
      </RegisterFormWrapper>
    </RegisterWrapper>
  );
};

export default Register;
