import React from "react";
import { NOT_FOUND_404_TEXT } from "../../components/404/404Text";
import { NotFoundCard } from "../../components/404/NotFoundCard";
import { NOT_FOUND_WRAPPER } from "../../components/404/NotFoundWrapper";
import { LINK } from "../../components/Global/Link";
import { Text } from "../../components/Global/Text";
import { Wrapper } from "../../components/Global/Wrapper";

const NotFound = () => {
  return (
    <NOT_FOUND_WRAPPER>
      <NotFoundCard>
        <Wrapper
          displayType="flex"
          contentJustification="center"
          flexDirection="column"
          alignment="center"
        >
          <NOT_FOUND_404_TEXT />
          <Text margin="0px 0px 0px 0px" fontSize="25px">
            Page not found
          </Text>
          <LINK
            link="/"
            name="GO BACK TO HOMEPAGE"
            primary={true}
            fontSize="20px"
            margin="40px 0px 0px 0px"
          />
        </Wrapper>
      </NotFoundCard>
    </NOT_FOUND_WRAPPER>
  );
};

export default NotFound;
