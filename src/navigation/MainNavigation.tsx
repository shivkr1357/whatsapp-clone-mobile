import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LockScreen from '../screens/Home/LockScreen';
import TabNavigator from './TabNavigation';
import {Platform} from 'react-native';
import SingleChatStack from '../screens/Chats/SingleChatStack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
    },
  };

  return (
    <NavigationContainer theme={customTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={LockScreen} />
        <Stack.Screen name="TabScreen" component={TabNavigator} />
        <Stack.Screen name="SingleChat" component={SingleChatStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
