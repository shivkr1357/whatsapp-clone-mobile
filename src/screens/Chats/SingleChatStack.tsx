import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import ChatHeader from '../../components/TabHeader/ChatHeader';
import BottomTextBox from './BottomTextBox';

const SingleChatStack = ({navigation}: any) => {
  return (
    <>
      <ChatHeader />
      <ScrollView>
        <Text>SingleChat</Text>
      </ScrollView>
      <BottomTextBox />
    </>
  );
};

export default SingleChatStack;
