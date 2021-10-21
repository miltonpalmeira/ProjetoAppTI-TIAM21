import React, { useState, useContext } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { Container, InputArea, CustomButton,
    CustomButtonText, SignMessage, SignMessageText, SignMessageTextBold,
    ButtonViewPassword
} 
from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SignInput from '../../SignInput';
import Api from '../../Api';
import { UserContext } from '../../contexts/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [viewPassword, setViewPassword] = useState(true);
    const [icon, setIcon] = useState('eye-slash');
    const { dispatch: userDispatch } = useContext(UserContext);

    function signUp() {
        navigation.navigate('SignUp');
    }

    function showPassword() {
        if (icon == 'eye') {
            setIcon('eye-slash');
            setViewPassword(true);
        }
        else {
            setIcon('eye');
            setViewPassword(false);
        }
    }

    async function login() {
        if (email != '' && password != '') {
            // Busca na API a informação se o login está correto no banco
            let json = await Api.signIn(email, password);
            if (json.token) {
                alert('Login efetuado com sucesso!');
                await AsyncStorage.setItem('token', json.token);
                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: json.data.avatar
                    }
                });
                navigation.navigate('MainTab');
            }
            else {
                alert('Email e/ou senha incorretos!');
            }
        }
        else {
            alert('Preencha os campos corretamente!');
        }
    }

    return (
        <Container>
            <Icon name="wrench" size={80} color="#F7F3F2" />
            <Icon name="laptop" size={190} color="#F7F3F2" 
                style={{marginTop: -125}} 
            />
            <InputArea>
                <SignInput icon="envelope" placeholder="Digite o email" 
                    value={email} onChangeText={t=>setEmail(t)}
                />
                <SignInput icon="key" placeholder="Digite a senha"
                    value={password} onChangeText={t=>setPassword(t)}
                    password={viewPassword}
                />
                <ButtonViewPassword onPress={showPassword}>
                    <Icon name={icon} size={30} color="#268596" />
                </ButtonViewPassword>

                <CustomButton onPress={login}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessage onPress={signUp}>
                <SignMessageText>Ainda não possui uma conta?</SignMessageText>
                <SignMessageTextBold>Cadastre-se</SignMessageTextBold>
            </SignMessage>
        </Container>
    )
}