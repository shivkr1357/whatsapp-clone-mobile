import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/TabHeader/Header';
import BottomRightButtons from '../../components/ViewedStatus/BottomButtons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RecentCalls from '../../components/Calls/RecentCalls';

const Calls = ({navigation}: any) => {
  return (
    <>
      <Header navigation={navigation} title={'Calls'} />
      <ScrollView style={styles.container}>
        <Text style={styles.favouriteText}>Favourites</Text>
        <View style={styles.favouriteAddContainer}>
          <TouchableOpacity style={styles.addFavouriteButton}>
            <AntDesign name="heart" size={20} color={'white'} />
          </TouchableOpacity>
          <Text style={styles.addFavouriteText}>Add favourite</Text>
        </View>
        <View style={styles.recent}>
          <Text style={styles.favouriteText}>Recent</Text>
          <RecentCalls type={'phone'} callType="incoming" name={'Shiv'} />
          <RecentCalls type={'phone'} callType="outgoing" name={'Sumit'} />
          <RecentCalls type={'phone'} callType="outgoing" name={'Digant'} />
          <RecentCalls
            type={'video-outline'}
            callType="outgoing"
            name={'Sanjeev'}
          />
          <RecentCalls
            type={'video-outline'}
            callType="outgoing"
            name={'Kunal'}
          />
          <RecentCalls
            type={'video-outline'}
            callType="outgoing"
            name={'Digant'}
          />
          <RecentCalls
            type={'video-outline'}
            callType="outgoing"
            name={'Digant'}
          />
          <RecentCalls
            type={'video-outline'}
            callType="outgoing"
            name={'Digant'}
          />
          <RecentCalls
            type={'video-outline'}
            callType="outgoing"
            name={'Digant'}
          />
          <RecentCalls
            type={'video-outline'}
            callType="outgoing"
            name={'Digant'}
          />
        </View>
      </ScrollView>
      <BottomRightButtons title="Calls" />
    </>
  );
};

export default Calls;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  favouriteText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#222',
  },
  favouriteAddContainer: {
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  addFavouriteButton: {
    backgroundColor: '#399f6a',
    width: 50,
    padding: 15,
    borderRadius: 50,
  },
  addFavouriteText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },
  recent: {},
});
