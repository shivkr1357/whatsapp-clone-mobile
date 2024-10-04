import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/TabHeader/Header';
import MyStatus from '../../components/MyStatus/MyStatus';
import ViewedStauts from '../../components/ViewedStatus/ViewedStauts';
import ActiveStatus from '../../components/ViewedStatus/ActiveStatus';
import Channels from '../../components/ViewedStatus/Channels';
import BottomRightButtons from '../../components/ViewedStatus/BottomButtons';

const width = Dimensions.get('screen').width;

const Updates = () => {
  return (
    <>
      <Header title={'Updates'} />
      <ScrollView>
        <MyStatus />
        <Text style={styles.container}>Active Stauts</Text>

        <ActiveStatus />
        <ActiveStatus />
        <ActiveStatus />
        <ActiveStatus />
        <Text style={styles.container}>Viewed Stauts</Text>
        <ViewedStauts />
        <ViewedStauts />
        <View
          style={{
            borderBottomColor: 'gray',
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginVertical: 10,
          }}
        />
        <Text style={styles.channelText}>Channels</Text>
        <Text style={styles.container}>
          Stay updated on topics that matter to you. Find channels to follow
          below.
        </Text>
        <View style={styles.channelCard}>
          <ScrollView style={styles.scrollView} horizontal={true}>
            <Channels />
            <Channels />
            <Channels />
            <Channels />
            <Channels />
            <Channels />
            <Channels />
            <Channels />
            <Channels />
            <Channels />
            <Channels />
            <Channels />
            <Channels />
            <Channels />
            <Channels />
          </ScrollView>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.customButton}>
              <Text style={styles.buttonText}>Explore</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <BottomRightButtons title={'Updates'} />
    </>
  );
};

export default Updates;
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  channelText: {
    margin: 10,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  channelCard: {
    margin: 10,
    marginBottom: 150,
  },
  buttonWrapper: {
    margin: 10,
  },
  customButton: {
    width: width / 3,
    backgroundColor: '#25D366',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  scrollView: {
    height: '20%',
  },
});
