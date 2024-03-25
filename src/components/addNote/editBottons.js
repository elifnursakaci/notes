import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {AppColors} from '../../theme/colors';

const EditBottons = ({onChangeStyle}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{}}>
        <Text style={styles.text}>B</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>İ</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>U</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>S</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>O</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>SAĞ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.GRAY,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginRight: 10,
    color: AppColors.SECONDARY,
    fontSize: 25,
  },
});

export default EditBottons;
