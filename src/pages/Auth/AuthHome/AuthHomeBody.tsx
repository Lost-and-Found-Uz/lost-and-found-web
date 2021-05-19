import { BodyWrapper } from "../../../components/AuthHome/BodyWrapper";
import { Image } from "../../../components/Global/Image";
import img from "../../../assets/svg/manbackground.svg";
import { InnerBodyWrapper } from "../../../components/AuthHome/InnerBodyWrapper";
import { Text } from "../../../components/Global/Text";
import { InnerBodyImageWrapper } from "../../../components/AuthHome/InnerBodyImageWrapper";
import { GET_STARTED_LINK } from "../../../components/AuthHome/GetStartedLink";
import { Wrapper } from "../../../components/Global/Wrapper";
import { useTranslation } from "react-i18next";
import { BodyText } from "../../../components/AuthHome/BodyText";

const AuthHomeBody = () => {
  const { t } = useTranslation();

  return (
    <BodyWrapper>
      <InnerBodyWrapper>
        <Wrapper margin="0px 0px 90px 0px">
          <Text color="grey" fontSize="20px">
            {t(
              "Hey there! Welcome to the best lost and found website in the world!"
            )}
          </Text>
          <BodyText>
            {t(
              "Have you lost your item? Do not worry! We will help you to find that! It's free!"
            )}{" "}
            &#128526;
          </BodyText>
        </Wrapper>
        <GET_STARTED_LINK
          name={t("Get Started")}
          link="/login"
          primary={true}
        />
      </InnerBodyWrapper>
      <InnerBodyImageWrapper>
        <Image src={img} width="70%" />
      </InnerBodyImageWrapper>
    </BodyWrapper>
  );
};

export default AuthHomeBody;
