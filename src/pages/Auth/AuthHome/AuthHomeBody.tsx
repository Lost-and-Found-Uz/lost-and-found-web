import { BodyWrapper } from "../../../components/AuthHome/BodyWrapper";
import { Image } from "../../../components/Global/Image";
import img from "../../../assets/svg/background.svg";
import { InnerBodyWrapper } from "../../../components/AuthHome/InnerBodyWrapper";
import { Text } from "../../../components/Global/Text";
import { InnerBodyImageWrapper } from "../../../components/AuthHome/InnerBodyImageWrapper";
import { GET_STARTED_LINK } from "../../../components/AuthHome/GetStartedLink";
import { Wrapper } from "../../../components/Global/Wrapper";
import { useTranslation } from "react-i18next";

const AuthHomeBody = () => {
  const { t } = useTranslation();

  return (
    <BodyWrapper>
      <InnerBodyWrapper>
        <Wrapper margin="0px 0px 100px 0px">
          <Text color="grey" fontSize="20px">
            {t(
              "Hey there! Welcome to the best lost and found website in the world!"
            )}
          </Text>
          <Text
            fontSize="50px"
            fontWeight="600"
            margin="25px 0px 0px 0px"
            lineHeight="75px"
          >
            {t(
              "Have you lost your item? Do not worry! We will help you to find that! It's free!"
            )}{" "}
            &#128526;
          </Text>
        </Wrapper>
        <GET_STARTED_LINK
          name={t("Get Started")}
          link="/login"
          primary={false}
        />
      </InnerBodyWrapper>
      <InnerBodyImageWrapper>
        <Image src={img} width="100%" height="100%" />
      </InnerBodyImageWrapper>
    </BodyWrapper>
  );
};

export default AuthHomeBody;
