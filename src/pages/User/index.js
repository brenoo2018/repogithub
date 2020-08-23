import React, {useState, useEffect} from 'react';

import {useRoute, useNavigation} from '@react-navigation/native';

import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

const User = () => {
  const [stars, setStars] = useState();

  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params;

  const user = routeParams.item;

  useEffect(() => {
    async function loadRepoStarUser() {
      const user = routeParams.item;

      navigation.setOptions({title: user.login});

      const response = await api.get(`/users/${user.login}/starred`);

      setStars(response.data);
    }

    loadRepoStarUser();
  }, [navigation, routeParams.item]);

  return (
    <Container>
      <Header>
        <Avatar source={{uri: user.avatar}} />
        <Name>{user.name}</Name>
        <Bio>{user.bio}</Bio>
      </Header>

      <Stars
        data={stars}
        keyExtractor={(star) => String(star.id)}
        renderItem={({item}) => (
          <Starred>
            <OwnerAvatar source={{uri: item.owner.avatar_url}} />
            <Info>
              <Title>{item.name}</Title>
              <Author>{item.owner.login}</Author>
            </Info>
          </Starred>
        )}
      />
    </Container>
  );
};

export default User;
