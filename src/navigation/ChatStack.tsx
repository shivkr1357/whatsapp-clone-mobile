import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chat from '../screens/Chats/Chat';
// import ChatDetails from '../screens/Chats/ChatDetails';

const Stack = createNativeStackNavigator();

const ChatStackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="ChatDetails" component={Chat} />
    {/* <Stack.Screen name="ChatDetails" component={ChatDetails} /> */}
  </Stack.Navigator>
);

export default ChatStackNavigator;
