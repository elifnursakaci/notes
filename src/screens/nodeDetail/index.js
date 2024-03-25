import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppColors} from '../../theme/colors';
import Button from '../../components/uı/button';
import {screenStyle} from '../../styles/screenStyle';
import EditBottons from '../../components/addNote/editBottons';

const NoteDetail = ({route}) => {
  const {note} = route?.params;
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View>
          <EditBottons />
        </View>

        <View style={{flex: 1}}>
          <View style={{}}>
            <Text style={{fontWeight: 'bold', fontSize: 30}}></Text>
            <Text
              style={{
                fontWeight: 500,
                fontSize: 30,
                color: AppColors.PRIMARY,
                marginVertical: 5,
              }}>
              {note.title}
            </Text>
          </View>

          <View style={{}}>
            <Text style={{fontWeight: 'bold', fontSize: 30}}></Text>
            <Text
              style={{
                fontWeight: 300,
                fontSize: 18,
                color: AppColors.SECONDARY,
              }}>
              {note.description}
            </Text>
          </View>
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
  bold: {
    fontWeight: 'bold',
  },
  italik: {
    fontStyle: 'italic',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
});

export default NoteDetail;
