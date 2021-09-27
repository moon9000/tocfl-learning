import React from "react"
import cx from "classnames"
import PropTypes from "prop-types"

export function TableHeader(props) {
    const { children, className, ...rest } = props

    const classNames = cx(
        className,
    )

    return (
        <thead className={classNames} {...rest}>
            {children}
        </thead>
    )
}


TableHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
