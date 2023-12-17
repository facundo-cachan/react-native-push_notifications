
/**
 * Home Stack Navigator
 *
 * @format
 */

import { Navigator, Screen } from '@core/navigator/CommonNavigator'

import rootHeaderScreen from '@core/navigator/screenOptions'
import EventDetailScreen from '@screens/home/event-detail'
import HomeScreen from '@screens/home/index-home'

import type { ScreenType } from '../core/navigator/types'

const screens: ScreenType[] = [
  {
    // @ts-ignore
    component: HomeScreen,
    name: 'HomeScreen'
  },
  {
    // @ts-ignore
    component: EventDetailScreen,
    name: 'EventDetailScreen'
  }
]
const HomeStack = (): JSX.Element => (
  <Screen name="HomeStack" options={{ headerShown: false }}>
    {() => (
      // @ts-ignore
      <Navigator initialRouteName="HomeScreen" screenOptions={rootHeaderScreen}>
        {screens.map((props: Omit<ScreenType, 'options'>) => (
          <Screen key={props.name} {...props} />
        ))}
      </Navigator>
    )}
  </Screen>
)

export default HomeStack