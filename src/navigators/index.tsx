import { Fragment, useEffect } from 'react'

import { Navigator } from '@core/navigator/CommonNavigator'
import { Container } from '@core/navigator/Container'
import { useThemeProvider } from '@core/theme/theme-provider'
import { getFcmToken, registerListenerWithFCM } from '@utils/_fcmHelper'

import HomeStack from './HomeStack'

const RootNavigator = (): JSX.Element => {
  const theme = useThemeProvider()
  const unsubscribe = registerListenerWithFCM()

  useEffect(() => {
    getFcmToken();
    return unsubscribe
  }, [])

  return (
    <Container theme={theme}>
      <Navigator>
        {
          [HomeStack].map((Module, i: number) => (
            <Fragment key={i}>{Module()}</Fragment>
          ))
        }
      </Navigator>
    </Container>
  )
}

export default RootNavigator