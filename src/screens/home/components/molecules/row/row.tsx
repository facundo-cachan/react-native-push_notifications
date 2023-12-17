import { View } from "react-native"

import { Icon, Text, Tooltip } from "@atoms"
import styles from "./row-styles"

import type { RowProps } from "./row-props"

const Row = ({ icon, text, tooltip, position, color }: RowProps) => (
  <Tooltip position={position} text={tooltip} color={color}>
    <View style={styles.row}>
      <Icon name={icon} color={color} />
      <Text style={styles.textImg} color={color}>{text}</Text>
    </View>
  </Tooltip>
)

export default Row