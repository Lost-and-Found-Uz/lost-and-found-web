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

const AuthHomeHeader = () => {
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

  return (
    <Wrapper
      height="10%"
      displayType="flex"
      alignment="center"
      contentJustification="space-between"
    >
      <LOGO_LINK>
        <Image src={logo} width="100px" />
      </LOGO_LINK>
      <Wrapper displayType="flex" alignment="center">
        <Wrapper position="relative">
          <LangButton onClick={() => setLangModal(true)}>
            <Text fontSize="20px">en</Text>
            <ExpandMoreIcon />
          </LangButton>
          {langModal && (
            <LangModalWrapper ref={langModalRef}>
              <LangModalButton>uz</LangModalButton>
              <LangModalButton>ru</LangModalButton>
            </LangModalWrapper>
          )}
        </Wrapper>
        <NAVBAR_LINK name="Login" link="/login" primary={false} />
        <NAVBAR_LINK name="Register" link="/register" primary />
      </Wrapper>
    </Wrapper>
  );
};

export default AuthHomeHeader;
