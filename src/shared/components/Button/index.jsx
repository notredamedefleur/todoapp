import { BorderedButton, DefaultButton } from "./styles.js";

export const Button = ({
  variant = "default",
  children,
  ...props
}) => {
  if (variant === "default") {
    return (
      <DefaultButton {...props}>
        {children}
      </DefaultButton>
    );
  }

  if (variant === "bordered") {
    return (
      <BorderedButton {...props}>
        {children}
      </BorderedButton>
    );
  }
};
