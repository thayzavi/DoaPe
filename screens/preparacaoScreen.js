import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { Card, Text, Avatar} from 'react-native-paper';
import FundoWrapper from './componente/fundoWrapper';

export default function PreparacaoScreen() {
  return (

    <FundoWrapper>
    <ScrollView style={styles.container}>

     <Image
    source={require('../assets/preparacao.png')}style={styles.topImage}resizeMode="contain"/>

      <Text style={styles.titulo}>
        O que fazer antes da doação?
      </Text>


    <Card style={styles.card}>
      <Card.Content style={styles.CardContent}>
        <Avatar.Icon style={styles.icon} size={40} icon="bed"/>
          <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Durma bem</Text>
          <Text style={styles.cardSubtitle}>Tenha pelo menos 6 horas de sono.</Text>
        </View>
      </Card.Content>
    </Card>

    <Card style={styles.card}>
      <Card.Content style={styles.CardContent}>
        <Avatar.Icon style={styles.icon} size={40} icon="food"/>
          <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Alimente-se bem</Text>
          <Text style={styles.cardSubtitle}>Coma algo leve e evite gorduras 3 horas antes da doação.</Text>
        </View>
      </Card.Content>
    </Card>

    <Card style={styles.card}>
      <Card.Content style={styles.CardContent}>
        <Avatar.Icon style={styles.icon} size={40} icon="water"/>
          <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Hidrate-se</Text>
          <Text style={styles.cardSubtitle}>Beba bastante água antes de doar sangue.</Text>
        </View>
      </Card.Content>
    </Card>

    <Card style={styles.card}>
      <Card.Content style={styles.CardContent}>
        <Avatar.Icon style={styles.icon} size={40} icon="beer"/>
          <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Evite bebidas alcoólicas</Text>
          <Text style={styles.cardSubtitle}>Não beba bebidas alcoólicas 12 horas astes da doação.</Text>
        </View>
      </Card.Content>
    </Card>

    <Card style={styles.card}>
      <Card.Content style={styles.CardContent}>
        <Avatar.Icon style={styles.icon} size={40} icon="card-account-details"/>
          <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Leve um documento com foto</Text>
          <Text style={styles.cardSubtitle}>Leve um documento com foto Documento oficial é obrigatorio para doar sangue.</Text>
        </View>
      </Card.Content>
    </Card>
  </ScrollView>
</FundoWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#4f5fa',
    padding:16,
  },
  titulo:{
    fontSize:18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#4771a3',
    textAlign:'center',

  },
  card:{
    borderRadius: 12,
    marginBottom: 12,
    elevation:2,
    backgroundColor:'#fff',
  },
  CardContent:{
    flexDirection:'row',
    alignItems:'center',
  },
  textContainer:{
    marginLeft:12,
    flexShrink:1,
  },
  cardTitle:{
    fontSize:16,
    fontWeight: 'bold',
    color: '#333'
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  topImage: {
    width: '100%',
    height: 180,
    marginBottom: 16,
    borderRadius: 12,
  },
  icon:{
    backgroundColor: "#ff9f9f",
  },
});
