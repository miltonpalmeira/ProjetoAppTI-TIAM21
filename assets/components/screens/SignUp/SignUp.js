import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Container, InputArea, CustomButton,
    CustomButtonText, SignMessage, SignMessageText, SignMessageTextBold } 
from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SignInput from '../../SignInput';

export default function({navigation}) {
    function signIn() {
        navigation.navigate('SignIn');
    }

    return (
        <Container>
            <Icon name="wrench" size={80} color="#F7F3F2" />
            <Icon name="laptop" size={190} color="#F7F3F2" 
                style={{marginTop: -125}} 
            />
            <InputArea>
                <SignInput icon="user" placeholder="Digite o nome" />
                <SignInput icon="envelope" placeholder="Digite o email" />
                <SignInput icon="key" placeholder="Digite a senha" />
                <CustomButton>
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