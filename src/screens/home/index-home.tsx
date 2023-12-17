
/**
 * Home Screen Page
 *
 * @screen
 */

import { useEffect, useState } from 'react'
import { View } from 'react-native'

import List from '@core/listing/list'
import { useThemeProvider } from '@core/theme/theme-provider'
import EventAPI from '@hooks/api/events'
import { Card } from '@molecules'
import { Row } from './components/molecules'
import styles from './home-styles'
import HomeScreenTemplate from './layout-home'

import type { NavigatorProps } from '@core/navigator/types'
import type Event from '@props/events'
import type { FC } from 'react'

const HomeScreen: FC<NavigatorProps> = ({ navigation: { navigate } }: NavigatorProps): JSX.Element => {
  const { colors: { onBackground } } = useThemeProvider()
  const [isLoading, setLoader] = useState<boolean>(true)
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    EventAPI.getAll({ url: 'https://api.artic.edu/api/v1/events' })
      .then((resp) => {
        setEvents(resp);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoader(!isLoading))
  }, [])

  return (
    <HomeScreenTemplate loading={isLoading}>
      <List
        data={events as []}
        renderItem={({ item }: { item: Event }) => (
          <Card
            key={item.id}
            variant="withImageBackground"
            name={item.title}
            picture={item.image_url}
            onPress={() => navigate('HomeStack', { screen: 'EventDetailScreen', params: item })}
          >
            {(item.location && item.date_display) && (<View style={[styles.info, { backgroundColor: onBackground }]}>
              <Row icon="search-location" text={item.location} tooltip={item.date_display} position="left" />
            </View>)}
          </Card>
        )}
      />
    </HomeScreenTemplate>
  )
}

export default HomeScreen