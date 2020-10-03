// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to view all the user*/

import React from 'react';
import {Text, View} from 'react-native';
import Mybutton from './components/Mybutton';

const Home = ({navigation}) => {
  return (
    <View>
      <Mybutton
        title="Profile"
        customClick={() => navigation.navigate('Profile')}
      />
      <Mybutton
        title="Borrow"
        customClick={() => navigation.navigate('Borrow')}
      />
      <Mybutton
        title="Checkin"
        customClick={() => navigation.navigate('Checkin')}
      />
      <Mybutton
        title="Rebad"
        customClick={() => navigation.navigate('Rebad')}
      />
      <Mybutton
        title="Schedule"
        customClick={() => navigation.navigate('Schedule')}
      />
      <Mybutton
        title="SettingsScreen"
        customClick={() => navigation.navigate('SettingsScreen')}
      />
      <Mybutton
        title="ิBookcourt"
        customClick={() => navigation.navigate('Bookcourt')}
      />
    </View>
  );
};

export default Home;
