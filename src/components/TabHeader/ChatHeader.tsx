import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const ChatHeader = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" color={'black'} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {},
});
