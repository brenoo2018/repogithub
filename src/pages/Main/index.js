import React, {useState, useEffect} from 'react';
import {Keyboard, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

const Main = () => {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(false);

  const navigation = useNavigation();

  /**
   * Recupera o usuário quando o app carregar
   */
  useEffect(() => {
    async function loadUserStorage() {
      const usersStorage = await AsyncStorage.getItem('@users');

      if (usersStorage) {
        await setUsers(JSON.parse(usersStorage));
      }
    }

    loadUserStorage();
  }, []);

  /**
   * Salva o usuário quando o estado mudar
   */

  useEffect(() => {
    function saveUserStorage() {
      AsyncStorage.setItem('@users', JSON.stringify(users));
    }

    saveUserStorage();
  }, [users]);

  async function handleSubmit() {
    if (!user) {
      return;
    }

    setloading(true);
    const response = await api.get(`/users/${user}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    setUsers((prev) => [...prev, data]);
    setUser('');
    setloading(false);

    Keyboard.dismiss();
  }

  function handleNavigateUser(item) {
    navigation.navigate('User', {item});
  }

  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCaptalize="none"
          placeholder="Adicionar Usuário"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={user}
          onChangeText={(text) => setUser(text)}
        />
        <SubmitButton loading={loading} onPress={handleSubmit}>
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Icon name="add" size={20} color="#FFF" />
          )}
        </SubmitButton>
      </Form>

      <List
        data={users}
        keyExtractor={(us) => us.login}
        renderItem={({item}) => (
          <User>
            <Avatar source={{uri: item.avatar}} />
            <Name>{item.name}</Name>
            <Bio>{item.bio}</Bio>

            <ProfileButton onPress={() => handleNavigateUser(item)}>
              <ProfileButtonText>Ver Perfil</ProfileButtonText>
            </ProfileButton>
          </User>
        )}
      />
    </Container>
  );
};

export default Main;
