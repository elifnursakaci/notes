import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppColors} from '../../theme/colors';
import Button from '../../components/uı/button';
import {screenStyle} from '../../styles/screenStyle';
import EditBottons from '../../components/addNote/editBottons';

const AddNote = ({route}) => {
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>Başlık</Text>
          <TextInput
            placeholder="Lütfen Başlık yazınız."
            style={{
              backgroundColor: AppColors.WHITE,
              borderWidth: 1,
              padding: 5,
              margin: 2,
              borderRadius: 5,
              borderColor: AppColors.GRAY,
              height: 60,
            }}
          />
          <Text style={{fontSize: 24}}>Açıklama</Text>
          <TextInput
            placeholder="Lütfen Açıklama yazınız."
            style={{
              backgroundColor: AppColors.WHITE,
              borderWidth: 1,
              padding: 5,
              margin: 2,
              borderRadius: 5,
              borderColor: AppColors.GRAY,
              height: 130,
            }}
          />
        </View>
        <View>
          <Button
            title="Save Changes"
            onPress={() => console.log('Button pressed')}></Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.SCREENBACKGROUNDCOLOR,
  },
});

export default AddNote;
