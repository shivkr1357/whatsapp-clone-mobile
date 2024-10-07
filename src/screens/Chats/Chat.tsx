import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/TabHeader/Header';
import SingleChat from '../../components/SingleChat/SingleChat';

const Chat = ({navigation}: any) => {
  const handleChatPress = (chatId: number) => {
    // Navigate to another screen, passing the chatId
    navigation.navigate('SingleChat', {chatId});
  };
  return (
    <>
      <Header title={'WhatsApp'} />
      <ScrollView>
        {[...Array(12)].map((_, index) => (
          <SingleChat key={index} onPress={() => handleChatPress(index)} />
        ))}
      </ScrollView>
    </>
  );
};

export default Chat;
