import SignIn from "../../components/auth/signin";
import SignUp from "../../components/auth/signup";
import "./auth.scss";

function Auth() {
  return (
    <div className="auth-container">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Auth;
