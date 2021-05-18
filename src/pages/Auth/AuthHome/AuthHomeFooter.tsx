import React from "react";
import { FooterWrapper } from "../../../components/AuthHome/FooterWrapper";
import { LINK } from "../../../components/Global/Link";
import { Text } from "../../../components/Global/Text";
import { Wrapper } from "../../../components/Global/Wrapper";
import { useTranslation } from "react-i18next";

const AuthHomeFooter = () => {
  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <Wrapper displayType="flex">
        <LINK
          link="/contact"
          name={t("Contact")}
          primary={false}
          color="#000"
          fontSize="18px"
          margin="0px 45px 0px 0px"
        />
        <LINK
          link="/terms"
          name={t("Terms & Services")}
          primary={false}
          color="#000"
          fontSize="18px"
          margin="0px 45px 0px 0px"
        />
        <LINK
          link="/about"
          name={t("About Us")}
          primary={false}
          color="#000"
          fontSize="18px"
          margin="0px 45px 0px 0px"
        />
      </Wrapper>
      <Text color="grey" fontSize="18px">
        Copyright 2021
      </Text>
    </FooterWrapper>
  );
};

export default AuthHomeFooter;
