import React, { ChangeEvent, useRef, useState } from "react";
import { PROFILE_CARD_HEADER_WRAPPER } from "../../../components/Profile/ProfileCardHeaderWrapper";
import { PROFILE_CARD_WRAPPER } from "../../../components/Profile/ProfileCardWrapper";
import { PROFILE_IMAGE } from "../../../components/Profile/ProfileImage";
import { PROFILE_WRAPPER } from "../../../components/Profile/ProfileWrapper";
import profileImage from "../../../assets/svg/user.svg";
import { Text } from "../../../components/Global/Text";
import { PROFILE_INPUT } from "../../../components/Profile/ProfileInput";
import { PROFILE_CARD_BODY_WRAPPER } from "../../../components/Profile/ProfileCardBodyWrapper";
import { PROFILE_BODY_CARD_WRAPPER } from "../../../components/Profile/ProfileBodyCardWrapper";
import { useQuery } from "react-query";
import axios from "axios";
import { baseUrl } from "../../../common/variables";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import { IconButton, Snackbar } from "@material-ui/core";
import { PROFILE_EDIT_WRAPPER } from "../../../components/Profile/ProfileEditWrapper";
import { colors } from "../../../common/colors";
import { PROFILE_SAVE_BTN } from "../../../components/Profile/ProfileSaveBtn";
import { useMutation } from "react-query";
import { cleanObj } from "../../../functions/cleanObj";
import Alert from "@material-ui/lab/Alert";
import { useTranslation } from "react-i18next";

const fetchUserData = async () => {
  const userId = localStorage.getItem("userId");
  try {
    const response = await axios.get(
      baseUrl + "/api/auth/getUserById/" + userId
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const Profile = () => {
  const { t }: { t: any } = useTranslation();
  const [snack, setSnack] = useState(false);
  const [editable, setEditable] = useState(true);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const { data, isFetching, isError } = useQuery(["userInfo"], () =>
    fetchUserData()
  );
  const { mutate } = useMutation(() =>
    axios
      .post(baseUrl + "/api/auth/updateUserById", cleanObj(form))
      .then((res) => {
        setSnack(true);
        setEditable(true);
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong!");
      })
  );

  if (isFetching) return <LoadingPage />;
  if (isError) return <ErrorPage />;

  const handleEditBtn = () => {
    if (editable) {
      fullNameRef.current?.focus();
      return setEditable(false);
    }

    setEditable(true);
  };

  const handleSave = () => {
    const { email, password, phone, fullName, username } = form;

    if (email || password || phone || fullName || username) {
      console.log(form);
      return mutate();
    }

    setEditable(true);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <PROFILE_WRAPPER>
      <PROFILE_CARD_WRAPPER>
        <PROFILE_CARD_HEADER_WRAPPER>
          <PROFILE_IMAGE src={profileImage} />
          <PROFILE_INPUT
            defaultValue={t(data.fullName)}
            textAlign="center"
            readOnly={editable}
            ref={fullNameRef}
            name="fullName"
            onChange={handleChange}
          />
          <PROFILE_EDIT_WRAPPER>
            {editable ? (
              <IconButton
                onClick={handleEditBtn}
                style={{ color: !editable ? colors.primary : "grey" }}
              >
                <EditIcon />
              </IconButton>
            ) : (
              <IconButton
                onClick={handleEditBtn}
                style={{ color: !editable ? colors.primary : "grey" }}
              >
                <SaveIcon />
              </IconButton>
            )}
          </PROFILE_EDIT_WRAPPER>
        </PROFILE_CARD_HEADER_WRAPPER>
        <PROFILE_CARD_BODY_WRAPPER>
          <PROFILE_BODY_CARD_WRAPPER>
            <Text margin="0px 0px 5px 0px">{t("Username")}:</Text>
            <PROFILE_INPUT
              defaultValue={t(data.username)}
              name="username"
              onChange={handleChange}
              readOnly={editable}
            />
          </PROFILE_BODY_CARD_WRAPPER>

          <PROFILE_BODY_CARD_WRAPPER>
            <Text margin="0px 0px 5px 0px">{t("Email")}:</Text>
            <PROFILE_INPUT
              defaultValue={t(data.email)}
              readOnly={editable}
              name="email"
              onChange={handleChange}
            />
          </PROFILE_BODY_CARD_WRAPPER>

          <PROFILE_BODY_CARD_WRAPPER>
            <Text margin="0px 0px 5px 0px">{t("Phone")}:</Text>
            <PROFILE_INPUT
              defaultValue={t(data.phone)}
              readOnly={editable}
              name="phone"
              onChange={handleChange}
            />
          </PROFILE_BODY_CARD_WRAPPER>

          <PROFILE_BODY_CARD_WRAPPER>
            <Text margin="0px 0px 5px 0px">{t("Password")}:</Text>
            <PROFILE_INPUT
              defaultValue={t(data.password)}
              readOnly={editable}
              name="password"
              onChange={handleChange}
            />
          </PROFILE_BODY_CARD_WRAPPER>
          <PROFILE_SAVE_BTN disabled={editable} onClick={handleSave}>
            {t("Save")}
          </PROFILE_SAVE_BTN>
        </PROFILE_CARD_BODY_WRAPPER>
      </PROFILE_CARD_WRAPPER>
      <Snackbar
        open={snack}
        autoHideDuration={6000}
        onClose={() => setSnack(false)}
      >
        <Alert onClose={() => setSnack(false)} severity={"success"}>
          {t("Successfully updated profile!")}
        </Alert>
      </Snackbar>
    </PROFILE_WRAPPER>
  );
};

export default Profile;
