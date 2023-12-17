import '@testing-library/jest-native/extend-expect';
import 'react-native-gesture-handler/jestSetup';

jest.useFakeTimers();

jest.spyOn(console, 'error').mockImplementation(() => {});

jest.mock('axios');
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native-vector-icons/FontAwesome6', () => ({
  TabBarItemIOS: '',
  ToolbarAndroid: ''
}));
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn()
    })
  };
});

export * from '@testing-library/jest-native/extend-expect';
