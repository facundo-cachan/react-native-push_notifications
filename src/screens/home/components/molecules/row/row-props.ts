import type { TooltipProps } from "../../../../../components/atoms/tooltip/tooltip-props"

export type RowProps = {
  icon: string
  text: string
  color?: string
  tooltip: string
  position?: TooltipProps['position']
}