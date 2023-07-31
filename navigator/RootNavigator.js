import { StyleSheet, TouchableOpacity } from 'react-native'
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
import { Entypo, FontAwesome, AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => (
  <Stack.Navigator>
    <Stack.Screen name="h" component={HomeScreen} options={{headerShown:false}}/>
  </Stack.Navigator>
);

const PocketTab = () => (
  <Stack.Navigator>
    <Stack.Screen name="p" component={Pocket} options={{headerShown:false}}/>
  </Stack.Navigator>
);

const InboxTab = () => (
  <Stack.Navigator>
    <Stack.Screen name="i" component={Inbox} options={{headerShown:false}}/>
  </Stack.Navigator>
);
const ProfileTab = () => (
  <Stack.Navigator>
    <Stack.Screen name="pr" component={Profile} options={{headerShown:false}}/>
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#05be71',
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeTab}
      options={{
        tabBarIcon: ({color}) => <AntDesign name="home" size={30} color={color} />,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Pocket"
      component={PocketTab}
      options={{
        tabBarIcon: ({color}) => <AntDesign name="search1" size={30} color={color} />,
        headerShown: false,
      }}
    />

<Tab.Screen
      name="Inbox"
      component={InboxTab}
      options={{
        tabBarIcon: ({color}) => <AntDesign name="inbox" size={30} color={color} />,
        headerShown: false,
        
      }}
    />
<Tab.Screen
      name="Profile"
      component={ProfileTab}
      options={{
        tabBarIcon: ({color}) => <FontAwesome name="user" size={30} color={color} />,
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