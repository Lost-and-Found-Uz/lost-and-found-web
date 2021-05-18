import { FooterWrapper } from "../../../components/AuthHome/FooterWrapper";
import { LINK } from "../../../components/Global/Link";
import { useTranslation } from "react-i18next";

const AuthHomeFooter = () => {
  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <LINK
        link="/contact"
        name={t("Contact")}
        primary={false}
        color="#000"
        fontSize="18px"
        margin="0px 45px 20px 0px"
      />
      <LINK
        link="/terms"
        name={t("Terms & Services")}
        primary={false}
        color="#000"
        fontSize="18px"
        margin="0px 45px 20px 0px"
      />
      <LINK
        link="/about"
        name={t("About Us")}
        primary={false}
        color="#000"
        fontSize="18px"
        margin="0px 45px 20px 0px"
      />
    </FooterWrapper>
  );
};

export default AuthHomeFooter;
