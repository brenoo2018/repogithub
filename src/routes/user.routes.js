import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import User from '../pages/User';

const UserStack = createStackNavigator();

const UserRoutes = () => (
  <UserStack.Navigator>
    <UserStack.Screen name="User" component={User} />
  </UserStack.Navigator>
);

export default UserRoutes;
