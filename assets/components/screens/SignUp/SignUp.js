import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Container, InputArea, CustomButton,
    CustomButtonText, SignMessage, SignMessageText, SignMessageTextBold } 
from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SignInput from '../../SignInput';
import Api from '../../Api';
import { UserContext } from '../../contexts/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { dispatch: userDispatch } = useContext(UserContext);
    
    function signIn() {
        navigation.navigate('SignIn');
    }

    async function register() {
        if (email == '' && name == '' && password == '') {
            alert('Preencha os campos corretamente!');
        }
        else {
            let res = await Api.signUp(name, email, password);
            if (res.token) {
                alert('Usuário cadastrado com sucesso!');
                await AsyncStorage.setItem('token', res.token);
                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: res.data.avatar
                    }
                });
                navigation.navigate('MainTab');
            }
            else {
                alert('Erro: ' + res.error);
            }
        }
    } 

    return (
        <Container>
            <Icon name="wrench" size={80} color="#F7F3F2" />
            <Icon name="laptop" size={190} color="#F7F3F2" 
                style={{marginTop: -125}} 
            />
            <InputArea>
            <SignInput 
                    icon="user" 
                    placeholder="Entre com o nome" 
                    value={name}
                    onChangeText={t=>setName(t)}
                />
                <SignInput 
                    icon="envelope" 
                    placeholder="Entre com o email" 
                    value={email}
                    onChangeText={t=>setEmail(t)}
                />
                <SignInput 
                    icon="key" 
                    placeholder="Entre com a senha" 
                    value={password}
                    onChangeText={t=>setPassword(t)}
                    password={true}
                />
                <CustomButton onPress={register}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessage onPress={signIn} >
                <SignMessageText>Já possui uma conta? </SignMessageText>
                <SignMessageTextBold>Faça Login</SignMessageTextBold>
            </SignMessage>
        </Container>
    )
}