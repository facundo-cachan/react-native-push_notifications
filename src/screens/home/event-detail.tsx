
/**
 * EventDetail Screen Page
 *
 * @screen
 */

import { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { useRecoilState } from 'recoil'

import { ButtonFB, Text } from '@atoms'
import { useThemeProvider } from '@core/theme/theme-provider'
import { ImageZoom } from '@molecules'
import { Paragraph } from '@organisms'
import { favorites } from '@providers/recoil/atoms/favorites'
import styles from './home-styles'
import HomeScreenTemplate from './layout-home'

import type { NavigatorProps } from '@core/navigator/types'
import type { Data } from '@props/events'
import type { FC } from 'react'

type Props = NavigatorProps & {
  route: {
    params: Data
  }
}

const EventDetailScreen: FC<Props> = ({ route: { params } }: Props): JSX.Element => {
  const { colors: { error, success } } = useThemeProvider()
  const [isLoading, setLoader] = useState<boolean>(true)
  const [myFavorites, updateMyFavorites] = useRecoilState(favorites)
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const [{ id, title, image_url, description }, _] = useState<Data>(params)

  useEffect(() => {
    setLoader(false)
  }, [params]);
  useEffect(() => {
    if (myFavorites && id)
      myFavorites.includes(id) ? setIsFavorite(true) : setIsFavorite(false)

  }, [myFavorites]);
  const handleAddOrRemove = (): void => {
    updateMyFavorites((currentFavorites) => currentFavorites.includes(id) ?
      currentFavorites.filter((item) => item !== id) : [...currentFavorites, id])
  };

  return (
    <HomeScreenTemplate loading={isLoading}>
      <Text>{title}</Text>
      <ImageZoom
        uri={image_url}
      />
      <ScrollView style={styles.scrollView}>
        {description && (<View style={styles.paragraph}>
          <Paragraph html={description} />
        </View>)}
      </ScrollView>
      <ButtonFB
        onPress={handleAddOrRemove}
        color={isFavorite ? error : success}
        icon={`heart-circle-${isFavorite ? 'minus' : 'plus'}`}
      />
    </HomeScreenTemplate>
  )
}

export default EventDetailScreen