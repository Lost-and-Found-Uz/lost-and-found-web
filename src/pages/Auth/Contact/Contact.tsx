import React from "react";
import { CONTACT_WRAPPER } from "../../../components/Contact/ContactWrapper";
import { CONTACT_CARD } from "../../../components/Contact/ContactCard";
import { Wrapper } from "../../../components/Global/Wrapper";
import { Text } from "../../../components/Global/Text";

const Contact = () => {
  return (
    <CONTACT_WRAPPER>
      <CONTACT_CARD>
        <Wrapper
          height="45px"
          contentJustification="space-between"
          displayType="flex"
          flexDirection="column"
          margin="10px 0px"
        >
          <Text>Gmail: </Text>
          <Text>sardorbekaminjonov2001@gmail.com</Text>
        </Wrapper>
        <hr />
        <Wrapper
          height="45px"
          contentJustification="space-between"
          displayType="flex"
          flexDirection="column"
          margin="10px 0px"
        >
          <Text>Github: </Text>
          <Text>https://github.com/JoeMartin2001</Text>
        </Wrapper>
      </CONTACT_CARD>
    </CONTACT_WRAPPER>
  );
};

export default Contact;
