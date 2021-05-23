import React from "react";
import { useTranslation } from "react-i18next";
import { ABOUT_CARD } from "../../../components/About/AboutCard";
import { ABOUT_WRAPPER } from "../../../components/About/AboutWrapper";
import { Text } from "../../../components/Global/Text";

const About = () => {
  const { t } = useTranslation();

  return (
    <ABOUT_WRAPPER>
      <ABOUT_CARD>
        <Text margin="15px 0px" fontWeight="600" fontSize="18px">
          {t("Hey there!")}
        </Text>
        <Text lineHeight="30px" fontSize="20px">
          {t("About Introducing")}
        </Text>
      </ABOUT_CARD>
    </ABOUT_WRAPPER>
  );
};

export default About;
