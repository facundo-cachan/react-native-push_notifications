import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    borderWidth: 1, borderColor: '#000',
    padding: 10,
  },
  info: {
    alignContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 20,
    width: '100%'
  },
  cardFooter: {
    borderColor: '#000', borderWidth: 1,
    paddingLeft: 30,
  },
  scrollView: { marginBottom: 50 },
  paragraph: { paddingHorizontal: 10 }
})

export default styles