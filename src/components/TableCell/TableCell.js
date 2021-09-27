import React from "react"
import cx from "classnames"
import PropTypes from "prop-types"
import { Typography } from "../Typography"

export function TableCell(props) {
  const { children, className, heading, variant, color, align, ...rest } = props

  const Tag = heading ? "th" : "td"

  const classNames = cx("p-3", className)

  return (
    <Tag className={classNames} {...rest}>
      <Typography
        variant={variant}
        color={color}
        className={cx({
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        })}
      >
        {children}
      </Typography>
    </Tag>
  )
}

TableCell.defaultProps = {
  heading: false,
  align: "left",
}

TableCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  heading: PropTypes.bool,
  variant: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.oneOf(["left", "center", "right"]),
}
