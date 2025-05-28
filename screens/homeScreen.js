import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (

    <ScrollView contentContainerStyle={styles.container}>

      <Image
        source={require('../assets/logo.png')} style={styles.topImage} resizeMode="contain" />

      <View style={styles.cardRow}>
        <Card style={styles.card} onPress={() => navigation.navigate('Importancia')}>
          <Card.Content>
            <Text style={styles.titulo} variant="titleMedium"> Importância da doação de sangue</Text>
            <Image source={require('../assets/importancia.png')} style={styles.imagem} />
          </Card.Content>
        </Card>

        <Card style={styles.card} onPress={() => navigation.navigate('Tipos')}>
          <Card.Content>
            <Text style={styles.titulo} variant="titleMedium"> Tipos sanguíneos</Text>
            <Image source={require('../assets/tipos.png')} style={styles.imagem} />
          </Card.Content>
        </Card>
      </View>

      <View style={styles.cardRow}>
        <Card style={styles.card} onPress={() => navigation.navigate('Locais')}>
          <Card.Content>
            <Text style={styles.titulo} variant="titleMedium"> Locais para doação de sangue</Text>
            <Image source={require('../assets/locais.png')} style={styles.imagem} />
          </Card.Content>
        </Card>

        <Card style={styles.card} onPress={() => navigation.navigate('Preparacao')}>
          <Card.Content>
            <Text style={styles.titulo} variant="titleMedium"> Preparação para doação de sangue </Text>
            <Image source={require('../assets/preparacao.png')} style={styles.imagem} />
          </Card.Content>
        </Card>
      </View>

      <View style={styles.cardRow}>
        <Card style={styles.card} onPress={() => navigation.navigate('Impedimentos')}>
          <Card.Content>
            <Text style={styles.titulo} variant="titleMedium"> Impedimentos da doação de sangue</Text>
            <Image source={require('../assets/impedimentos.png')} style={styles.imagem} />
          </Card.Content>
        </Card>

           <Card style={styles.card} onPress={() => navigation.navigate('Favoritos')}>
          <Card.Content>
            <Text style={styles.titulo} variant="titleMedium"> Locais Favoritados </Text>
            <Image source={require('../assets/fav.png')} style={styles.imagem} />
          </Card.Content>
        </Card>
      </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#ffb0b1',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
    gap: 8,
  },
  imagem: {
    width: 64,
    height: 64,
    marginBottom: 8,
    alignSelf: 'center',
    resizeMode: 'contain', //mantém a proporção da imagem original e a encaixa totalmente dentro da área
  },
  card: {
    height: 150,
    flex:1,
    overflow: 'hidden',
    margintop:90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 3,
  },
  topImage: {
    width: '100%',
    height: 180,
    marginBottom: 16,
    borderRadius: 12,
  },
  titulo: {
  fontSize: 14,
  fontWeight:'600',
  textAlign: 'center',
  marginBottom: 8,
  },
});