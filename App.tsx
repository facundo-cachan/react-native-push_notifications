import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import 'react-native-gesture-handler';
import { getFcmToken, registerListenerWithFCM } from './src/utils/fcmHelper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text_bold: {
    fontWeight: '600',
    color: 'black'
  }
})

const App = () => {
  const unsubscribe = registerListenerWithFCM();

  useEffect(() => {
    getFcmToken();
    return unsubscribe
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text_bold}>Push Notification In Recat Native</Text>
      <Feather name="bell" size={30} color="black" />
    </View>
  )
}


export default App;
