const animationDuration = 350
const shouldResize = true

// Nodes
const nodeWidth = 140
const nodeHeight = 180
const nodeSpacing = 12
const nodePaddingX = 16
const nodePaddingY = 16
const avatarWidth = 48
const nodeBorderRadius = 9
const margin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
}

// Lines
const lineType = 'angle'
const lineDepthY = 120 /* Height of the line for child nodes */

// Colors
const artBoardColor = "#f5f6fa"
const backgroundColor = '#fff'
const borderColor = "transparent"
const nameColor = '#222d38'
const titleColor = '#617080'
const reportsColor = '#92A0AD'

const config = {
  margin,
  animationDuration,
  nodeWidth,
  nodeHeight,
  nodeSpacing,
  nodePaddingX,
  nodePaddingY,
  nodeBorderRadius,
  avatarWidth,
  lineType,
  lineDepthY,
  backgroundColor,
  borderColor,
  nameColor,
  titleColor,
  reportsColor,
  shouldResize,
  artBoardColor
}

module.exports = config
