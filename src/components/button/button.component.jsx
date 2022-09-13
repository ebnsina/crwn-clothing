import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, varient, ...restProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[varient]}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
