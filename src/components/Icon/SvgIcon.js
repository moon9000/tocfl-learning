import PropTypes from "prop-types"

export const SvgIcon = ({ children, viewBox, className }) => {
  return (
    <svg viewBox={viewBox} className={className} aria-hidden="true">
      {children}
    </svg>
  )
}

SvgIcon.propTypes = {
  children: PropTypes.node.isRequired,
  viewBox: PropTypes.string.isRequired,
  className: PropTypes.string,
}
