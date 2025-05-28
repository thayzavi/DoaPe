import React from 'react';
import { ScrollView, StyleSheet, View, Image, } from 'react-native';
import { Avatar, Card, Text} from 'react-native-paper';
import FundoWrapper from './componente/fundoWrapper';

export default function InfoDoacao() {
  return (

  <FundoWrapper>
    <ScrollView style={styles.container}>
     <Image
          source={require('../../assets/impedimentos.png')}
          style={styles.topImage}
          resizeMode="contain" />


            {/* Seção 1 - Impediemntos temporários */}
      <Text style={styles.titulo}>
        Impedimentos Temporários
      </Text>

      <Card style={styles.card}>

        <Card.Content style={styles.CardContent}>
          <Avatar.Icon style={styles.icon} size={40} icon="needle"/>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Tatuagem ou Piercing</Text>
            <Text style={styles.cardSubtitle}>Aguarde 6 meses após o procedimento.</Text>
          </View>
        </Card.Content>
      </Card>

       <Card style={styles.card}>
          <Card.Content style={styles.CardContent}>
          <Avatar.Icon style={styles.icon} size={40} icon="thermometer"/>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Gripe ou Febre</Text>
            <Text style={styles.cardSubtitle}>Espere 7 dias após os sintomas desaparecerem.</Text>
          </View>
        </Card.Content>
      </Card>

       <Card style={styles.card}>
          <Card.Content style={styles.CardContent}>
          <Avatar.Icon style={styles.icon} size={40} icon="syringe"/>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Vacinas</Text>
            <Text style={styles.cardSubtitle}>Espere até 4 semanas dependendo do tipo da vacina.</Text>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
          <Card.Content style={styles.CardContent}>
          <Avatar.Icon style={styles.icon} size={40} icon="nehospitaledle"/>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Cirugias e exames invasivos</Text>
            <Text style={styles.cardSubtitle}>Espere 6 meses após o procedimento.</Text>
          </View>
        </Card.Content>
      </Card>

        <Card style={styles.card}>
          <Card.Content style={styles.CardContent}>
          <Avatar.Icon style={styles.icon} size={40} icon="tooth"/>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Tratamentos dentário</Text>
            <Text style={styles.cardSubtitle}>Aguarde entre 7 e 30 dias, dependendo do procedimento.</Text>
          </View>
        </Card.Content>
      </Card>
      

      {/* seção 2 - impedimentos Permanentes */}

      <Text style={styles.titulo}>
        Impediementos Permanentes
      </Text>
            <Card style={styles.card}>
          <Card.Content style={styles.CardContent}>
          <Avatar.Icon style={styles.icon} size={40} icon="virus"/>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Doenças transmissíveis</Text>
            <Text style={styles.cardSubtitle}>HIV, Hepatite B/C,sífilis.</Text>
          </View>
        </Card.Content>
      </Card>

       <Card style={styles.card}>
          <Card.Content style={styles.CardContent}>
          <Avatar.Icon style={styles.icon} size={40} icon="needle"/>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Uso de drogas injetáveis</Text>
            <Text style={styles.cardSubtitle}>Impedimento permanente por risco de infecção.</Text>
          </View>
        </Card.Content>
      </Card>

       <Card style={styles.card}>
          <Card.Content style={styles.CardContent}>
          <Avatar.Icon style={styles.icon} size={40} icon="alert-circle"/>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Doenças autoimunes graves</Text>
            <Text style={styles.cardSubtitle}>Aguarde 6 meses após o procedimento.</Text>
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
  topImage: {
    width: '100%',
    height: 180,
    marginBottom: 16,
    borderRadius: 12,
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
  icon:{
    backgroundColor: "#ff9f9f",
  },
});
