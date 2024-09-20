import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-paper';

const SingleChat = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.chatContainer}>
        <View style={styles.nameContainer}>
          <View>
            <Avatar.Text size={60} label="SP" />
          </View>
          <View>
            <Text style={styles.name}>Shiv Prasad</Text>
            <Text> Last Message</Text>
          </View>
        </View>
        <View>
          <Text style={styles.lastSeenText}>Yesterday</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SingleChat;

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  chatContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  lastSeenText: {
    fontSize: 14,
  },
});
