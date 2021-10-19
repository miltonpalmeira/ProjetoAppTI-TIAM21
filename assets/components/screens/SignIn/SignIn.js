import React, { useState } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { Container, InputArea, CustomButton,
    CustomButtonText, SignMessage, SignMessageText, SignMessageTextBold,
    ButtonViewPassword
} 
from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SignInput from '../../SignInput';

export default function({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [viewPassword, setViewPassword] = useState(true);
    const [icon, setIcon] = useState('eye-slash');

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
                    value={senha} onChangeText={t=>setSenha(t)}
                    password={viewPassword}
                />
                <ButtonViewPassword onPress={showPassword}>
                    <Icon name={icon} size={30} color="#268596" />
                </ButtonViewPassword>

                <CustomButton>
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