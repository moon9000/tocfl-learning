import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

export function TableRow(props) {
  const { children, className, ...rest } = props;

  const classNames = cx(className);
  return (
    <tr className={classNames} {...rest}>
      {children}
    </tr>
  );
}

TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
