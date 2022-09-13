import "./form-input.styles.scss";

const FormInput = ({ label, ...restProps }) => {
  const restPropsValueLength = restProps.value.length;

  return (
    <div className="group">
      <input className="form-input" {...restProps} />
      {label && (
        <label
          className={`form-input-label ${restPropsValueLength ? "shrink" : ""}`}
          htmlFor={label}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
