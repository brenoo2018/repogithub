import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../pages/Main';

const MainStack = createStackNavigator();

const MainRoutes = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Main" component={Main} />
  </MainStack.Navigator>
);

export default MainRoutes;
