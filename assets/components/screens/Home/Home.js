import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Container, Scroller, HeaderArea, HeaderTitle, SearchButton,
    LocationArea, LocationFinder, LocationInput, ListArea } 
from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Api from '../../Api';

export default function ( { navigation } ) {
    const [locationText, setLocationText] = useState('');
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    async function getServicesProvider() {
        setLoading(true);
        setList([]);
        let res = await Api.getServicesProvider();
        if (res.error == '') {
            if (res.loc) {
                setLocationText(res.loc);
            }
            setList(res.data);
        }
        else {
            alert('Erro: ' + res.error);
        }
        setLoading(false);
    }

    useEffect(() => {
        getServicesProvider();
    }, []);

    return (
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle>Encontre o prestador de serviço</HeaderTitle>
                    <SearchButton>
                        <Icon name="search" size={26} color="#FFF" />
                    </SearchButton>
                </HeaderArea>
                <LocationArea>
                    <LocationInput 
                        placeholder="Onde você está?"
                        placeholderTextColor="#FFF"
                        value={locationText}
                        onChangeText={t=>setLocationText(t)}
                    />
                    <LocationFinder>
                        <Icon name="map-marker" size={24} color="#FFF" />
                    </LocationFinder>
                </LocationArea>

                {loading ? (
                        <ActivityIndicator style={{marginTop: 10}} 
                            color="#FFF" size={45} />
                    ) :
                    (
                        <ListArea>
                            {list.map((item, k) => {
                                <ServiceProviderItem key={k} data={item} />
                            })}
                        </ListArea>
                    )
                }
            </Scroller>
        </Container>
    )
}