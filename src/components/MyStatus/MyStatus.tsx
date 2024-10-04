import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-paper';

const MyStatus = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Status</Text>
      <View style={styles.myStatusUpdate}>
        <View>
          <Avatar.Image
            source={{
              uri: 'https://fastly.picsum.photos/id/676/200/300.jpg?hmac=LsUQsWIg599NTNNwcLwXKvaE31ysfQLKYsYFrw_O9o8',
            }}
            style={styles.avatar}
          />
          <View style={styles.plusIcon}>
            <Text style={styles.plusIconText}>+</Text>
          </View>
        </View>
        <View>
          <Text style={styles.myStatusText}>My Status</Text>
          <Text style={styles.myStatusAdd}>Tap to add status update</Text>
        </View>
      </View>
    </View>
  );
};

export default MyStatus;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  heading: {
    fontSize: 20,
    color: '#222',
    fontWeight: 'bold',
  },
  myStatusUpdate: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  avatar: {
    marginTop: 20,
  },
  plusIcon: {
    backgroundColor: '#25D366',
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    position: 'absolute',
    top: '70%',
    left: '60%',
    borderWidth: 2,
    borderColor: '#fff',
  },
  plusIconText: {
    fontSize: 20,
    color: '#fff',
  },
  myStatusText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  myStatusAdd: {
    fontSize: 14,
    fontWeight: '500',
  },
});
