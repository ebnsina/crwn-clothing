import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  LoadingSpinner,
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

const Button = ({ children, varient, isLoading = false, ...restProps }) => {
  const CustomButton = getButton(varient);

  return (
    <CustomButton disabled={isLoading} {...restProps}>
      {isLoading ? <LoadingSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
