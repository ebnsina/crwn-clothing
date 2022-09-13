import { FormInputLabel, Group, Input } from "./form-input.styles.js";

const FormInput = ({ label, ...restProps }) => {
  return (
    <Group>
      <Input {...restProps} />
      {label && (
        <FormInputLabel shrink={restProps.value.length} htmlFor={label}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
