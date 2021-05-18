import { NAVBAR_LINK } from "../../../components/AuthHome/NavBarLink";
import { Wrapper } from "../../../components/Global/Wrapper";
import logo from "../../../assets/svg/Choralogo.svg";
import { LOGO_LINK } from "../../../components/AuthHome/LogoLink";
import { Image } from "../../../components/Global/Image";
import { LangButton } from "../../../components/AuthHome/LangButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Text } from "../../../components/Global/Text";
import { LangModalWrapper } from "../../../components/AuthHome/LangModalWrapper";
import { LangModalButton } from "../../../components/AuthHome/LangModalButton";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { HeaderWrapper } from "../../../components/AuthHome/HeaderWrapper";

const AuthHomeHeader = () => {
  const { t, i18n } = useTranslation();
  const [langModal, setLangModal] = useState(false);
  const langModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", (event: MouseEvent) => {
      const { current } = langModalRef;

      if (!current?.contains(event.target as Node)) {
        setLangModal(false);
      }
    });
  }, []);

  const handleLangSelect = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <HeaderWrapper>
      <LOGO_LINK>
        <Image src={logo} width="100px" />
      </LOGO_LINK>
      <Wrapper
        displayType="flex"
        alignment="center"
        contentJustification="space-between"
      >
        <Wrapper position="relative">
          <LangButton onClick={() => setLangModal(true)}>
            <Text fontSize="20px">{i18next.language}</Text>
            <ExpandMoreIcon />
          </LangButton>
          {langModal && (
            <LangModalWrapper ref={langModalRef}>
              {i18next.languages.map(
                (l, i) =>
                  l !== i18next.language && (
                    <LangModalButton
                      onClick={() => handleLangSelect(l)}
                      key={i}
                    >
                      {l}
                    </LangModalButton>
                  )
              )}
            </LangModalWrapper>
          )}
        </Wrapper>
        <NAVBAR_LINK name={t("Login")} link="/login" primary={false} />
        <NAVBAR_LINK name={t("Register")} link="/register" primary />
      </Wrapper>
    </HeaderWrapper>
  );
};

export default AuthHomeHeader;
