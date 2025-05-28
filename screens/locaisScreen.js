import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';
import axios from 'axios';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FundoWrapper from './componente/fundoWrapper';



const calcularDistancia = (lat1, lon1, lat2, lon2) => { // Converte graus para raios 
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371; // Raio médio da terra
  const dLat = toRad(lat2 - lat1);//Diferença de latitude em radianos
  const dLon = toRad(lon2 - lon1);// Diferença de longitude 

  // Fórmula de Haversine:
  const a = // 'a' representa o quadrado da metade do comprimento do arco central entre os dois pontos
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  //'c' é o ângulo central 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

const LocaisScreen = () => {
  const [query, setQuery] = useState(''); // texto digitato pelo usuário
  const [locais, setLocais] = useState([]);//locais
  const [localizacao, setLocalizacao] = useState(null);//guarda a latitude e longitude 
  const [favoritos, setFavoritos] = useState([]); // lista de favoritos

  useEffect(() => { //abrir as telas
    buscarLocais(); // busca os locais da api
    obterLocalizacao();// Obtém a localização do usuário
    carregarFavoritos(); // carregar os favoritos
  }, []);

  const buscarLocais = async () => { // busca os dados da api 
    try {
      const response = await axios.get('https://api-doacao-0iy4.onrender.com/');
      setLocais(response.data.locais);
    } catch (error) {
      console.error('Erro ao buscar locais:', error);
    }
  };


  const obterLocalizacao = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('permissaão de localização negada');
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    setLocalizacao(location.coords);
  };

  const carregarFavoritos = async () => {
    const data = await AsyncStorage.getItem('favoritos');
    if (data) {
      setFavoritos(JSON.parse(data));
    }
  };

  const toggleFavorito = async (nome) => {
    const atualizados = favoritos.includes(nome)
      ? favoritos.filter((item) => item !== nome) : [...favoritos, nome];
    setFavoritos(atualizados);
    await AsyncStorage.setItem('favoritos', JSON.stringify(atualizados));
  };

  const LocaisFiltrados = locais
    .filter(
      (local) =>
        local.nome.toLowerCase().includes(query.toLowerCase()) ||
        local.cidade.toLowerCase().includes(query.toLowerCase())
    )
    .map((local) => {
      let distancia = null;
      if (localizacao) {
        distancia = calcularDistancia(
          localizacao.latitude,
          localizacao.longitude,
          local.latitude,
          local.longitude
        ).toFixed(2);
      }
      return { ...local, distancia }
    });


  return (
    <FundoWrapper>
    <View style={styles.container}>
      <TextInput
        placeholder='Buscar nome do local...'
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />

      <FlatList
        data={LocaisFiltrados}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Cover source={{ uri: item.imagem }} />
            <Card.Content>
              <View style={styles.titleRow}>
                <Text variant="titleMedium">{item.nome}</Text>

                <IconButton
                  icon={favoritos.some(fav => fav.nome) ? 'heart' : 'heart-outline'}
                  onPress={() => toggleFavorito(item)}
                  iconColor={favoritos.some( fav => fav.nome === item.nome) ? 'red' : 'gray'} />
              </View>
              <Text variant="bodyMedium">{item.endereco}</Text>
              <Text variant="bodyMedium">{item.horario}</Text>
              {item.distancia && (
                <Text variant="bodyMedium">Distância: {item.distancia} km</Text>
              )}
            </Card.Content>
          </Card>
        )}
      />
    </View>
  </FundoWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  card: {
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default LocaisScreen;