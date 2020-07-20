import React from 'react';
import {View, Text} from 'react-native';

import {useRoute} from '@react-navigation/native';

// import { Container } from './styles';

const User = () => {
  const routeParams = useRoute();
  return (
    <View>
      <Text>User</Text>
    </View>
  );
};

export default User;
