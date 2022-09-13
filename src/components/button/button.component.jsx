import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles.js";

export const VARIENT_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (varient = VARIENT_CLASSES.base) =>
  ({
    [VARIENT_CLASSES.base]: BaseButton,
    [VARIENT_CLASSES.google]: GoogleSignInButton,
    [VARIENT_CLASSES.inverted]: InvertedButton,
  }[varient]);

const Button = ({ children, varient, ...restProps }) => {
  const CustomButton = getButton(varient);

  return <CustomButton {...restProps}>{children}</CustomButton>;
};

export default Button;
