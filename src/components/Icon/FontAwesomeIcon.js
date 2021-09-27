import { SvgIcon } from "./SvgIcon"

export const FontAwesomeIcon = ({ faIcon, ...props }) => {
  const viewBox = getViewBox(faIcon)
  const path = getPath(faIcon)

  return (
    <SvgIcon {...props} viewBox={viewBox}>
      <path fill="currentColor" d={path} />
    </SvgIcon>
  )
}

const getViewBox = (faIcon) => {
  const [width, height] = faIcon.icon
  return `0 0 ${width} ${height}`
}

const getPath = (faIcon) => {
  return faIcon.icon[4]
}
