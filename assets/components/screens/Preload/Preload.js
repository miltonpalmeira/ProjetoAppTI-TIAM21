import React, { useEffect, useContext } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Container, LoadingIcon, LoadingText } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import Api from '../../Api';
import { UserContext } from '../../contexts/UserContext';

export default function({navigation}) {
    const { dispatch: userDispatch } = useContext(UserContext);

    useEffect(() => {
        // Verificar se existe o token salvo no app
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                let res = await Api.checkToken(token);
                if (res.token) {
                    await AsyncStorage.setItem('token', res.token);
                    userDispatch({
                        type: 'setAvatar',
                        payload: {
                            avatar: res.data.avatar
                        }
                    });
                    navigation.navigate('MainTab');
                }
            }
            else {
                navigation.navigate('SignIn');
            }
        }
        checkToken();
    }, [])
    
    return (
        <Container>
            <Icon name="wrench" size={80} color="#F7F3F2" />
            <Icon name="laptop" size={190} color="#F7F3F2" style={{marginTop: -139}} />
            <LoadingIcon size="large" color="#FFF" />
            <LoadingText>Carregando...</LoadingText>
        </Container>
    )
}