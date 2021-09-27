import React from "react"
import cx from "classnames"
import PropTypes from "prop-types"

export function TableBody(props) {
  const { children, className, ...rest } = props

  const classNames = cx(className)

  return (
    <tbody className={classNames} {...rest}>
      {children}
    </tbody>
  )
}

TableBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
