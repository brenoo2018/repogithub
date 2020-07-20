import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {Container, Form, Input, SubmitButton} from './styles';

const Main = () => {
  const [user, setUser] = useState('');

  async function handleSubmit() {
    const response = await api.get(`/users/${user}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    setUser((prev) => {
      [...prev, data];
    });

    Keyboard.dismiss();
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
        <SubmitButton onPress={handleSubmit}>
          <Icon name="add" size={20} color="#FFF" />
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default Main;
