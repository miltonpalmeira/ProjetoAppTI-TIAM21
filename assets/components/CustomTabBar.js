import React, { useContext } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { UserContext } from './contexts/UserContext';

const TabArea = styled.View`
    height: 60px;
    background-color: #4EADBE;
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #4EADBE;
    margin-top: -20px;
`;

const AvatarIcon = styled.Image`
    width: 32px;
    height: 32px;
    border-radius: 16px;
`;

export default ({state, navigation}) => {
    const {state:user} = useContext(UserContext);    
    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }
    return (
        <TabArea>
            <TabItem onPress={() => goTo('Appointments')}>
                <Icon name="calendar" size={24} color="#FFF" 
                    style={{opacity: state.index === 0 ? 1 : 0.5}}
                />
            </TabItem>
            <TabItem onPress={() => goTo('Search')}>
                <Icon name="search" size={24} color="#FFF" 
                    style={{opacity: state.index === 1 ? 1 : 0.5}}
                />
            </TabItem>
            <TabItemCenter onPress={() => goTo('Home')}>
                <Icon name="home" size={32} color="#4EADBE" />
            </TabItemCenter>
            <TabItem onPress={() => goTo('Favorites')}>
                <Icon name="heart" size={24} color="#FFF"
                    style={{opacity: state.index === 3 ? 1 : 0.5}}
                />
            </TabItem>
            <TabItem onPress={() => goTo('Profile')}>
                { user.avatar != '' ?
                    <AvatarIcon source={{uri: user.avatar}} />
                    :
                    <Icon name="user-circle" size={24} color="#FFF"
                        style={{opacity: state.index === 4 ? 1 : 0.5}}
                    />
                }
            </TabItem>
        </TabArea>
    );
}