import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {screenHeight} from '../../utils/constans';
import {MYNOTES} from '../../utils/routes';
import {AppColors} from '../../theme/colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
        }}>
        <Text style={{fontSize: 35, color: AppColors.SECONDARY}}>
          {MYNOTES}
        </Text>
      </View>

      <View
        style={{
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            padding: 5,
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <Text>MENU</Text>
        </View>

        <View
          style={{
            padding: 5,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Text>ARA</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: screenHeight * 0.25,
    padding: 10,
  },
});

export default Header;
