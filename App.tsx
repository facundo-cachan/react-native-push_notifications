import { RecoilRoot } from 'recoil';

import { ThemeProvider } from '@core/theme/theme-provider';
import NotificationApp from './src';

import 'react-native-gesture-handler';

const App = () => {

  return (
    <RecoilRoot>
      <ThemeProvider>
        <NotificationApp />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
