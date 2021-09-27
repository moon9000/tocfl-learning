import React from "react"
import cx from "classnames"
import PropTypes from "prop-types"
import "./Table.css"

export function Table(props) {
    const { children, className, ...rest } = props

    const classNames = cx(
        className, "Table", "shadow-1", "rounded-m"
    )

    return (
        <table className={classNames} {...rest}>
            {children}
        </table>
    )
}

Table.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}
