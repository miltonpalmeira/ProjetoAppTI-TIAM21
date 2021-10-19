import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #63C2DD;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #268596;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;

export const CustomButtonText = styled.Text`
    font-size: 20px;
    color: #FFF;
`;

export const SignMessage = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;

export const SignMessageText = styled.Text`
    font-size: 17px;
    color: #268896;
`;

export const SignMessageTextBold = styled.Text`
    font-size: 17px;
    color: #268896;
    font-weight: bold;
    margin-left: 5px;
`;

export const ButtonViewPassword = styled.TouchableOpacity`
    
`;