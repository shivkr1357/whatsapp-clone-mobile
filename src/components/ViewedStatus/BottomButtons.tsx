import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomRightButtons = ({title}: any) => {
  return (
    <>
      {title === 'Updates' && (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button1}>
              <MaterialCommunityIcons name="pencil" size={30} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <MaterialIcons
                style={styles.button2}
                name="camera-alt"
                size={40}
                color={'white'}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
      {title === 'Calls' && (
        <View style={styles.containerCall}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button3}>
              <MaterialCommunityIcons
                style={styles.button3}
                name="phone-plus"
                size={30}
                color={'white'}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    position: 'absolute',
    bottom: 80,
    right: -10,
    width: 100,
    height: 100,
  },
  containerCall: {
    padding: 10,
    position: 'absolute',
    bottom: 0,
    right: -10,
    width: 100,
    height: 100,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button1: {
    backgroundColor: 'lightgray',
    height: 50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    marginVertical: 15,

    padding: 2,
  },
  button2: {
    backgroundColor: '#399f6a',
    borderRadius: 15,
    padding: 5,
  },
  button3: {
    backgroundColor: '#399f6a',
    borderRadius: 20,
    padding: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default BottomRightButtons;
