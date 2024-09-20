import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from '../../components/TabHeader/Header';
import MyStatus from '../../components/MyStatus/MyStatus';
import ViewedStauts from '../../components/ViewedStatus/ViewedStauts';

const Updates = () => {
  return (
    <>
      <Header title={'Updates'} />
      <ScrollView>
        <MyStatus />
        <ViewedStauts />
      </ScrollView>
    </>
  );
};

export default Updates;
