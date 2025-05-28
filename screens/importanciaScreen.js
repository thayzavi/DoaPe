import React from 'react';
import { ScrollView, StyleSheet, Image, View } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';
import FundoWrapper from './componente/fundoWrapper';
export default function ImportanciaScreen() {
  return (

      <FundoWrapper>
      <ScrollView style={styles.container}>
        <Image
          source={require('../assets/importancia.png')}
          style={styles.topImage}
          resizeMode="contain"
        />

        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.title}>Por que doar sangue?</Text>
            <Text style={styles.paragraph}>
              A doação de sangue é um ato de solidariedade que pode salvar vidas. Uma única doação pode ajudar até quatro pessoas.
            </Text>
          </Card.Content>
        </Card>

      <Card style={styles.card}>
        <Card.Content style={styles.CardContent}>
          <Image
            source={require('../assets/importancia.png')} style={styles.avatar}/>
            <Text style={styles.cardText}>
              Cada doação pode salvar até três vidas.
            </Text>
        </Card.Content>
      </Card>

        <Card style={styles.card}>
        <Card.Content style={styles.CardContent}>
          <Image
            source={require('../assets/importancia.png')} style={styles.avatar}/>
            <Text style={styles.cardText}>
              Doação de sangue melhora a saúde cardiovascular e reduz o risco de alguns tipos de câncer.
            </Text>
        </Card.Content>
      </Card>

           <Card style={styles.card}>
        <Card.Content style={styles.CardContent}>
          <Image
            source={require('../assets/importancia.png')} style={styles.avatar}/>
            <Text style={styles.cardText}>
               Ajuda em cirurgias, tratamentos e emergências.
            </Text>
        </Card.Content>
      </Card>
      </ScrollView>
    </FundoWrapper>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  topImage: {
    width: '100%',
    height: 180,
    marginBottom: 16,
    borderRadius: 12,
  },
  cardText:{
    width:200,
    marginLeft: 10,
  },
  card: {
    borderRadius: 12,
    backgroundColor: '#fff',
    padding: 12,
    elevation: 4,
    marginTop:20,
  },
  CardContent:{
    flexDirection:'row',
    alignItems:'center'
  },
  avatar:{
    width:50,
    height:50,
    borderRadius:20,
    marginRight:9,
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },  
  paragraph: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
  },
});
