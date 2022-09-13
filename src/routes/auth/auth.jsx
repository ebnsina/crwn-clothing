import SignIn from "../signin/signin";
import SignUp from "../signup/signup";
import "./auth.styles.scss";

const Auth = () => {
  return (
    <div className="auth-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
