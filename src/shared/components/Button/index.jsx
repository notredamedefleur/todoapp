import { BorderedButton, DefaultButton } from "./styles.js";

export const Button = ({
  variant = "default",
  children,
  onClick,
  ...props
}) => {
  if (variant === "default") {
    return (
      <DefaultButton {...props} onClick={onClick}>
        {children}
      </DefaultButton>
    );
  }

  if (variant === "bordered") {
    return (
      <BorderedButton {...props} onClick={onClick}>
        {children}
      </BorderedButton>
    );
  }
};
