import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const Header = ({title, onSearch, onOptions}: any) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            style={styles.icon}
            name="qrcode-scan"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onSearch}>
          <Feather name="camera" size={25} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onOptions}>
          <FontAwesome name="ellipsis-v" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 15,
  },
  leftContainer: {
    flexDirection: 'column',
  },
  title: {
    color: '#25D366',
    fontSize: 24,
    fontWeight: 'bold',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#333',
    gap: 4,
    marginRight: 35,
  },
});

export default Header;
