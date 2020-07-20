import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../pages/Main';
import User from '../pages/User';

// import MainRoutes from './main.routes';
// import UserRoutes from './user.routes';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName={Main}
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
};

export default Routes;
