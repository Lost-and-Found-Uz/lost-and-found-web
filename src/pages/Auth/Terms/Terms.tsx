import React from "react";
import { useTranslation } from "react-i18next";
import { Text } from "../../../components/Global/Text";
import { TERMS_CARD } from "../../../components/Terms/TermsCard";
import { TERMS_WRAPPER } from "../../../components/Terms/TermsWrapper";

const Terms = () => {
  const { t } = useTranslation();

  return (
    <TERMS_WRAPPER>
      <TERMS_CARD>
        <Text fontSize="25px" fontWeight="600" margin="15px 0px">
          Terms and services
        </Text>
        <Text lineHeight="30px" fontSize="20px">
          {t("Terms warning")}
        </Text>
      </TERMS_CARD>
    </TERMS_WRAPPER>
  );
};

export default Terms;
