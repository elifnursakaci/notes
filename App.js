// In App.js in a new project

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ADDNOTE, MYNOTES, NOTDETAIL} from './src/utils/routes';
import MyNotes from './src/screens/myNotes/index';
import NoteDetail from './src/screens/nodeDetail/index';
import AddNote from './src/screens/addNote/index';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={MYNOTES} component={MyNotes} />
        <Stack.Screen
          options={{headerShown: true}}
          name={NOTDETAIL}
          component={NoteDetail}
        />
        <Stack.Screen
          options={{headerShown: true}}
          name={ADDNOTE}
          component={AddNote}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
