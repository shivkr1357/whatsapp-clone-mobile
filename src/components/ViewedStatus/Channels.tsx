import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar} from 'react-native-paper';

const width = Dimensions.get('screen').width;

const Channels = () => {
  return (
    <View style={styles.container}>
      <Avatar.Image
        source={{
          uri: 'https://fastly.picsum.photos/id/676/200/300.jpg?hmac=LsUQsWIg599NTNNwcLwXKvaE31ysfQLKYsYFrw_O9o8',
        }}
        style={styles.avatar}
      />
      <Text style={styles.channelName}>Channel Name</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Channels;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 20,
    width: width / 3,
    height: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    marginTop: -10,
    marginBottom: 20,
  },
  channelName: {
    fontSize: 16,
    color: '#222',
  },
  button: {
    borderColor: 'gray',
    padding: 5,
    paddingHorizontal: 35,
    marginTop: 15,
    marginBottom: -5,
    borderRadius: 50,
    backgroundColor: '#cff5e1',
  },
  buttonText: {
    color: 'green',
    fontWeight: '600',
  },
});
