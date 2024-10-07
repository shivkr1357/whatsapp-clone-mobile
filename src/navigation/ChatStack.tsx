import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chat from '../screens/Chats/Chat';
import SingleChatStack from '../screens/Chats/SingleChatStack';
// import ChatDetails from '../screens/Chats/ChatDetails';

const Stack = createNativeStackNavigator();

const ChatStackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="ChatDetails" component={Chat} />
  </Stack.Navigator>
);

export default ChatStackNavigator;
