import SignUp from "../../components/sign-up";
import "./index.styles.scss";
import SignIn from "../../components/login";

const Auth = () => {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
