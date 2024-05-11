import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

export function Typography(props) {
  const { tag: Tag, variant, children, className, color, ...rest } = props;

  const classNames = cx(
    {
      "text-xl": variant === "h1",
      "text-l": variant === "h2",
      "text-base": variant === "subtitle",
      "text-s": variant === "subtitle2",
      "text-2xs": variant === "body",
      "text-3xs": variant === "small",
      "font-semibold": ["h1", "h2", "subtitle"].includes(variant),
      uppercase: variant === "small",
      "text-normal": color === "normal",
      "text-dark": color === "dark",
      "text-red": color === "error",
      LightColor: color === "light",
      DarkColor: color === "dark",
      "text-white": color === "white",
      "text-green-secondary": color === "success",
      "text-warning": color === "warning",
    },
    className
  );

  return (
    <Tag className={classNames} {...rest}>
      {children}
    </Tag>
  );
}

Typography.defaultProps = {
  tag: "div",
  variant: "body",
  color: "normal",
};

Typography.propTypes = {
  tag: PropTypes.elementType,
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "subtitle",
    "subtitle2",
    "body",
    "caption",
    "small",
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "normal",
    "dark",
    "error",
    "light",
    "white",
    "success",
    "warning",
  ]),
};
