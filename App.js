// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
import 'react-native-gesture-handler';

import * as React from 'react';
import {Button, View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Borrow from './pages/Borrow';
import Checkin from './pages/Checkin';
import Graph from './pages/Graph';
import Rebad from './pages/Rebad';
import Schedule from './pages/Schedule';
import SettingsScreen from './pages/SettingsScreen';
import Bookcourt from './pages/Bookcourt';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Mobile', //Set Header Title
            headerStyle: {
              backgroundColor: '#009999', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile', //Set Header Title
            headerStyle: {
              backgroundColor: '#009999', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Borrow"
          component={Borrow}
          options={{
            title: 'Borrow', //Set Header Title
            headerStyle: {
              backgroundColor: '#009999', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Checkin"
          component={Checkin}
          options={{
            title: 'Checkin', //Set Header Title
            headerStyle: {
              backgroundColor: '#009999', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Graph"
          component={Graph}
          options={{
            title: 'Graph', //Set Header Title
            headerStyle: {
              backgroundColor: '#009999', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Rebad"
          component={Rebad}
          options={{
            title: 'Rebad', //Set Header Title
            headerStyle: {
              backgroundColor: '#009999', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Schedule"
          component={Schedule}
          options={{
            title: 'Schedule', //Set Header Title
            headerStyle: {
              backgroundColor: '#009999', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            title: 'SettingsScreen', //Set Header Title
            headerStyle: {
              backgroundColor: '#009999', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Bookcourt"
          component={Bookcourt}
          options={{
            title: 'Bookcourt', //Set Header Title
            headerStyle: {
              backgroundColor: '#009999', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
