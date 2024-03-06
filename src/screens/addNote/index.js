import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppColors} from '../../theme/colors';
import Button from '../../components/uı/button';
import {screenStyle} from '../../styles/screenStyle';

const AddNote = ({route}) => {
  return (
    <SafeAreaView style={screenStyle.container}>
      <View styles={screenStyle.container}>
        <View></View>

        <View style={{flex: 1, backgroundColor: 'red'}}>
          <TextInput
            placeholder="Lütfen notunuzu bu alanaa yazınız."
            value=""
            style={{
              flex: 1,
              backgroundColor: AppColors.WHITE,
              borderWidth: 1,
              padding: 5,
              margin: 8,
              borderRadius: 5,
              borderColor: AppColors.GRAY,
            }}
          />
        </View>

        <View>
          <Button title="Save Changes" onPress></Button>
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
