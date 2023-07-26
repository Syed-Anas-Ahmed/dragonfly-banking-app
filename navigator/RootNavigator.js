import { StyleSheet } from 'react-native'
import React from 'react'
import Login from '../screens/Login'
import HomeScreen from '../screens/HomeScreen';
import Pocket from '../screens/Pocket';
import Inbox from '../screens/Inbox';
import Profile from '../screens/Profile';
import Onboarding from '../screens/Onboarding';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo, FontAwesome } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
  </Stack.Navigator>
);

const PocketTab = () => (
  <Stack.Navigator>
    <Stack.Screen name="Pocket" component={Pocket} options={{headerShown:false}}/>
  </Stack.Navigator>
);

const InboxTab = () => (
  <Stack.Navigator>
    <Stack.Screen name="Inbox" component={Inbox} options={{headerShown:false}}/>
  </Stack.Navigator>
);
const ProfileTab = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: 'grey',
    }}
  >
    <Tab.Screen
      name="HomeTab"
      component={HomeTab}
      options={{
        tabBarIcon: () => <Entypo name="home" size={24} color="grey" />,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="PocketTab"
      component={PocketTab}
      options={{
        tabBarIcon: () => <FontAwesome name="search" size={24} color="grey"/>,
        headerShown: false,
      }}
    />

<Tab.Screen
      name="InboxTab"
      component={InboxTab}
      options={{
        tabBarIcon: () => <FontAwesome name="user" size={24} color="grey" />,
        headerShown: false,
        
      }}
    />
<Tab.Screen
      name="ProfileTab"
      component={ProfileTab}
      options={{
        tabBarIcon: () => <FontAwesome name="user" size={24} color="grey" />,
        headerShown: false,
        
      }}
    />
  </Tab.Navigator>
);

const RootNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})