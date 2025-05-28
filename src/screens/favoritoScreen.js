import React, { useEffect, useCallback, useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {Card, Text, Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';import FundoWrapper from './componente/fundoWrapper';

const FavoriteItem = ({item, removeFavorite}) => {
    return(
        <Card style={styles.card}>
            <Card.Cover source={{uri: item.imagem}}/>
            <Card.Content>
                <Text style={styles.fav} variant="titleMedium"> {item.nome}</Text>
                <Text style={styles.fav}variant="titleMedium"> {item.endereco}</Text>
                <Text style={styles.fav} variant="titleMedium"> {item.horario}</Text>
                <Text style={styles.fav}variant="titleMedium"> Distância: {item.distancia} Km</Text>
            </Card.Content>
            <Card.Actions>
                <Button onPress={() => removeFavorite(item.nome)}>
                    Remover
                </Button>
            </Card.Actions>
        </Card>
    );
};

const FavoritoScreen = () => {
    const [favorites, setFavorites] = useState ([]);

    useFocusEffect(
        useCallback(() => {
        const loadFavorites = async () =>{
            try {
                const stored = await AsyncStorage.getItem('favoritos');
                if (stored) {
                    setFavorites(JSON.parse(stored));
                }
            } catch (error){
                console.error('Erro ao carregar favoritos:', error)
                }
            };
            loadFavorites();
        }, [])
    );

    const removeFavorite = async (nome) => {
        try{
            const updated = favorites.filter((item) => item.nome !== nome);
            setFavorites(updated);
            await AsyncStorage.setItem('favoritos', JSON.stringify(updated));
        } catch (error){
            console.error('Erro ao remover', error);
        }
    };

        
    return(
    <FundoWrapper>
        <View style={styles.container}>
            <FlatList
            data={favorites}
            keyExtractor={(item) => item.nome}
            renderItem={({item}) => (
                <FavoriteItem item={item} removeFavorite={removeFavorite}/>
            )}
            />
        </View>
    </FundoWrapper>
       
    );
};

const styles =StyleSheet.create({
    container:{
        flex: 1,
        padding:10,
    },
    card:{
        marginBottom:10,
        backgroundColor: '#fff',
    },
    fav:{
        marginTop: 6,
        textAlign: 'justify',
        fontSize: 15,
    },
});

export default FavoritoScreen;