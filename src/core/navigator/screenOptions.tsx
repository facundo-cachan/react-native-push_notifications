
import { Text } from '@atoms'

import HeaderLeft from './header/left'
import HeaderRight from './header/right'

import type { NativeStackNavigationOptions } from '@react-navigation/native-stack/lib/typescript/src/types'

type HeaderScreenProps = {
  title?: NativeStackNavigationOptions['headerTitle']
}

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01
  }
}

const rootHeaderScreen = ({ title }: HeaderScreenProps) => ({
  transitionSpec: {
    open: config,
    close: config,
  },
  presentation: 'modal',
  headerMode: 'screen',
  headerLeft: HeaderLeft,
  headerRight: HeaderRight,
  headerTitle: () => (title ?? <Text>{title}</Text>)
})

export default rootHeaderScreen
