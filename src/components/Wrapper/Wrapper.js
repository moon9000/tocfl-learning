  import cx from "classnames"
import PropTypes from "prop-types"

export function Wrapper(props) {
  const { children, className, size = "large", ...rest } = props

  const classNames = cx(className, "mx-auto w-11/12", {
    "max-w-5xl": size === "large",
    "max-w-lg": size === "small",
  })

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(["large", "small"]),
}

export function MaybeWrapper({ condition, ...rest }) {
  if (condition) {
    return <Wrapper {...rest} />
  }

  return <div {...rest} />
}
