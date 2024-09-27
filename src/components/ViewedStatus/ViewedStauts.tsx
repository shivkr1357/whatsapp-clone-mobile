import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

const ViewedStauts = () => {
  return (
    <View style={styles.container}>
      <Text>Viewed Stauts</Text>
      <View style={styles.statusContainer}>
        <Avatar.Text label="SP" />
      </View>
    </View>
  );
};

export default ViewedStauts;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  statusContainer: {
    marginVertical: 20,
  },
});
