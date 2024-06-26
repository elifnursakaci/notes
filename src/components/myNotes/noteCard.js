import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {screenHeight, screenWidh} from '../../utils/constans';
import {NOTDETAIL} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';

const NoteCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(NOTDETAIL, {note: item})}>
      <View style={styles.container}>
        <View
          style={{
            flex: 0.5,
            width: 10,
            height: 10,

            borderRadius: 100,
            backgroundColor: AppColors.GRAY,
          }}></View>
        <View style={{flex: 8, marginLeft: 20}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.title}</Text>
          <Text
            style={{fontSize: 14, color: AppColors.GRAY, marginVertical: 5}}>
            {item.description}
          </Text>
          <Text
            style={{fontSize: 14, color: AppColors.GRAY, marginVertical: 5}}>
            {item.date}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',

    alignItems: 'center',
    backgroundColor: AppColors.WHITE,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default NoteCard;
