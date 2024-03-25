import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {AppColors} from '../../theme/colors';
import {screenHeight, screenWidh} from '../../utils/constans';

const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={{fontSize: 40, fontWeight: 'bold', color: 'white'}}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: AppColors.PRIMARY,
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 1000,
  },
});

export default FloatActionButton;
