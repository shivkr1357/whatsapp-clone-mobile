import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from '../../components/TabHeader/Header';
import SingleChat from '../../components/SingleChat/SingleChat';

const Chat = () => {
  return (
    <>
      <Header title={'WhatsApp'} />
      <ScrollView>
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
      </ScrollView>
    </>
  );
};

export default Chat;
