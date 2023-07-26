import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Onboarding from './screens/Onboarding';
import Login from './screens/Login';
import RootNavigator from './navigator/RootNavigator';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <RootNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
