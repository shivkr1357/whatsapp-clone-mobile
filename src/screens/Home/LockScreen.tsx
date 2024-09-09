import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

const height = Dimensions.get('screen').height;

const rnBiometrics = new ReactNativeBiometrics();

function LockScreen({navigation}: any): React.JSX.Element {
  const [biometricsAvailable, setBiometricsAvailable] = useState(false);

  const nav = useNavigation();

  useEffect(() => {
    // Check if biometrics are available
    rnBiometrics
      .isSensorAvailable()
      .then(resultObject => {
        const {available, biometryType} = resultObject;
        if (available && biometryType) {
          setBiometricsAvailable(true);
        } else {
          Alert.alert('Biometrics not available on this device');
        }
      })
      .catch(err => {
        console.log('Error: ', err);
      });
  }, []);

  const authenticate = () => {
    if (biometricsAvailable) {
      rnBiometrics
        .simplePrompt({promptMessage: 'Authenticate'})
        .then(resultObject => {
          const {success} = resultObject;
          if (success) {
            navigation.navigate('TabScreen');
          } else {
            Alert.alert('Authentication failed');
          }
        })
        .catch(() => {
          Alert.alert('Biometric prompt failed');
        });
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.logo}>
        <Text>Whats App Clone Locked</Text>
      </View>
      <View style={styles.button}>
        <Button title="Click to unlock" onPress={authenticate} />
      </View>
    </SafeAreaView>
  );
}

export default LockScreen;

const styles = StyleSheet.create({
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    top: 50,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: height / 2.5,
  },
});
