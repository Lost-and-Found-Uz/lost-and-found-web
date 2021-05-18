import React from "react";
import { FooterWrapper } from "../../../components/AuthHome/FooterWrapper";
import { LINK } from "../../../components/Global/Link";
import { Text } from "../../../components/Global/Text";
import { Wrapper } from "../../../components/Global/Wrapper";

const AuthHomeFooter = () => {
  return (
    <FooterWrapper>
      <Wrapper displayType="flex">
        <LINK
          link="/contact"
          name="Contact"
          primary={false}
          color="#000"
          fontSize="18px"
          margin="0px 45px 0px 0px"
        />
        <LINK
          link="/terms"
          name="Terms & Services"
          primary={false}
          color="#000"
          fontSize="18px"
          margin="0px 45px 0px 0px"
        />
        <LINK
          link="/about"
          name="About"
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
