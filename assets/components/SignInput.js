import React from 'react';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Input = styled.TextInput`
    flex: 1;
    font-size: 20px;
    color: #268596;
    margin-left: 10px;
`;

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #83D6E2;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;

export default ( { icon, placeholder, value, onChangeText, password } ) => {
    return (
        <InputArea>
            <Icon name={icon} size={30} color="#268596" />
            <Input placeholder={placeholder} placeholderTextColor="#268596"
                value={value} onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    );
}