import React from "react";
import Button from "react-bootstrap/Button";
import "./style.css";

export function ButtonBase(props) {
  const { value, as, type, variant, text, ...rest } = props;

  return (
    <Button className="Button" as={as} type={type} variant={variant} {...rest}>
      {text}
    </Button>
  );
}
