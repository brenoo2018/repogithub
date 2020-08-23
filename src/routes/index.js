import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//import {useRoute} from '@react-navigation/native';

import Main from '../pages/Main';
import User from '../pages/User';

// import MainRoutes from './main.routes';
// import UserRoutes from './user.routes';

const Stack = createStackNavigator();

const Routes = () => {
  //const route = useRoute();
  // const routeParams = route.params;
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
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerTitle: 'Usuários'}}
      />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
};

export default Routes;
