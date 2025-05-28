import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { Card, Text} from 'react-native-paper';
import FundoWrapper from './componente/fundoWrapper';

export default function TiposScreen() {
  return (

    <FundoWrapper>
    <ScrollView style={styles.container}>

      <Image
       source={require('../assets/tipos.png')}style={styles.topImage}resizeMode="contain"/>


      <Text style={styles.titulo}>
        Compatibilidade entre os tipos sanguíneo
      </Text>


    <Card style={styles.card}>
      <Card.Content style={styles.CardContent}>
        <Image
         source={require('../assets/tipoA.png')} style={styles.avatar}/>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}> Tipo A</Text>
          <Text style={styles.cardSubtitle}>Pode ser para A e AB </Text>
        </View>
      </Card.Content>
     </Card>

    <Card style={styles.card}>
      <Card.Content style={styles.CardContent}>
        <Image
         source={require('../assets/tipoO.png')} style={styles.avatar}/>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Tipo B</Text>
          <Text style={styles.cardSubtitle}>Pode doar B e AB </Text>
        </View>
      </Card.Content>
    </Card>

    <Card style={styles.card}>
      <Card.Content style={styles.CardContent}>
        <Image
         source={require('../assets/tipoB.png')} style={styles.avatar}/>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}> Tipo O</Text>
          <Text style={styles.cardSubtitle}>Pode doar para todos os tipo (doador universal) </Text>
        </View>
      </Card.Content>
    </Card>


    <Card style={styles.card}>
      <Card.Content style={styles.CardContent}>
        <Image
         source={require('../assets/tipoB.png')} style={styles.avatar}/>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Tipo AB</Text>
          <Text style={styles.cardSubtitle}>Pode receber todos os tipos </Text>
        </View>
      </Card.Content>
    </Card>
    </ScrollView>
    </FundoWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:16,
  },
  titulo:{
    fontSize:18,
    fontWeight: '800',
    marginBottom: 16,
    color: '#333',
    textAlign:'center',

  },
  topImage: {
    width: '100%',
    height: 180,
    marginBottom: 16,
    borderRadius: 12,
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
  avatar:{
    width:50,
    height:50,
    borderRadius:20,
    marginRight:9,
  },
});
