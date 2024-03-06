//import liraries
import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import Header from '../../components/router/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {screenStyle} from '../../styles/screenStyle';
import FloatActionButton from '../../components/uı/floatActionButton';
import {mockData} from '../../utils/mockData';
import NoteCard from '../../components/myNotes/noteCard';
import {ADDNOTE} from '../../utils/routes';

// create a component
const MyNotes = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={screenStyle.container}>
        <Header />
        <FlatList
          data={mockData}
          renderItem={({item}) => <NoteCard item={item} />}
          keyExtractor={item => item.id}
        />
        <FloatActionButton onPress={() => navigation.navigate(ADDNOTE)} />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
