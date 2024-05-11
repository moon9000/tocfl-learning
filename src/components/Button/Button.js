import React from "react";
import Button from "react-bootstrap/Button";

export function ButtonBase(props) {
  const { value, as, type, variant, children, ...rest } = props;

  return (
    <Button className="Button" as={as} type={type} variant={variant} {...rest}>
      {children}
    </Button>
  );
}
