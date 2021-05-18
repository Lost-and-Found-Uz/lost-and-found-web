import { Wrapper } from "../../../components/Global/Wrapper";
import AuthHomeBody from "./AuthHomeBody";
import AuthHomeFooter from "./AuthHomeFooter";
import AuthHomeHeader from "./AuthHomeHeader";

const AuthHome = () => {
  return (
    <Wrapper padding="0px 5%">
      <AuthHomeHeader />
      <AuthHomeBody />
      <AuthHomeFooter />
    </Wrapper>
  );
};

export default AuthHome;
