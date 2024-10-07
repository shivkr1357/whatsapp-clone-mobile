import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/TabHeader/Header';
import {Avatar} from 'react-native-paper';

const width = Dimensions.get('screen').width;

const Communities = () => {
  return (
    <>
      <Header title={'Communities'} />
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('./community_placeholder.png')}
            style={styles.image}
            resizeMode="contain"
          />
          {/* <Avatar.Image
            style={styles.image}
            source={{
              uri: 'https://fastly.picsum.photos/id/676/200/300.jpg?hmac=LsUQsWIg599NTNNwcLwXKvaE31ysfQLKYsYFrw_O9o8',
            }}
          /> */}
          <Text style={styles.communityHeader}>
            Stay connected with a community
          </Text>
          <Text style={styles.textDescription}>
            Communities bring members together in topic-based groups, and make
            it easy to get admin announcments.Any community you're added to will
            appear here.
          </Text>
          <TouchableOpacity style={styles.exampleButton}>
            <Text style={styles.exampleText}>See example communities &gt;</Text>
          </TouchableOpacity>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.customButton}>
              <Text style={styles.buttonText}>Start your community</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Communities;
const styles = StyleSheet.create({
  container: {
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  communityHeader: {
    fontSize: 20,
    color: '#111',
  },
  textDescription: {
    marginHorizontal: 20,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '400',
    color: '#444',
  },
  exampleButton: {},
  exampleText: {
    color: 'green',
  },
  buttonWrapper: {
    margin: 10,
  },
  customButton: {
    width: width / 1.2,
    backgroundColor: '#1e9b54',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    paddingHorizontal: 20,
  },
});
