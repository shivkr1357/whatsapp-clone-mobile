import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

const ActiveStatus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <Avatar.Text style={styles.avatar} label="SP" />
        <View style={styles.nameDate}>
          <Text style={styles.name}>Shiv Prasad</Text>
          <Text>Yesterday</Text>
        </View>
      </View>
    </View>
  );
};

export default ActiveStatus;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
  statusContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    // justifyContent: ""
  },
  avatar: {},
  nameDate: {
    marginHorizontal: 20,
  },
  name: {
    fontWeight: 'bold',
    color: '#222',
    fontSize: 18,
  },
});
