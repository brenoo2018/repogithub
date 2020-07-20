import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import {useRoute} from '@react-navigation/native';

import api from '../../services/api';

// import { Container } from './styles';

const User = () => {
  const [star, setStar] = useState();
  const route = useRoute();
  const routeParams = route.params;

  useEffect(() => {
    async function loadRepoStarUser() {
      const user = routeParams.item;

      const response = await api.get(`/users/${user.login}/starred`);

      setStar(response.data);
    }

    loadRepoStarUser();
  }, []);

  return (
    <View>
      <Text>User</Text>
    </View>
  );
};

export default User;
