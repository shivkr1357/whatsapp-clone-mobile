import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const RecentCalls = ({type, callType, name}: any) => {
  return (
    <View style={styles.container}>
      <Avatar.Image
        source={{
          uri: 'https://fastly.picsum.photos/id/676/200/300.jpg?hmac=LsUQsWIg599NTNNwcLwXKvaE31ysfQLKYsYFrw_O9o8',
        }}
      />
      <View style={styles.nameContainer}>
        <Text style={styles.textName}>{name}</Text>

        {callType === 'incoming' ? (
          <View style={styles.textTime}>
            <Feather name="arrow-down-left" color={'red'} size={20} />

            <Text> {new Date().toLocaleString()}</Text>
          </View>
        ) : callType === 'outgoing' ? (
          <View style={styles.textTime}>
            <Feather name="arrow-up-right" color={'lightgreen'} size={20} />

            <Text>{new Date().toLocaleString()}</Text>
          </View>
        ) : null}
      </View>
      <TouchableOpacity style={styles.button1}>
        <MaterialCommunityIcons name={type} size={30} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default RecentCalls;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameContainer: {
    marginLeft: -70,
  },
  button1: {},
  textName: {
    fontSize: 18,
  },
  textTime: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    fontSize: 14,
  },
});
