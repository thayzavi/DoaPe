//importando bibliotecas
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

//rotas de navegação
import HomeScreen from './screens/homeScreen';
import LocaisScreen from './screens/locaisScreen';
import ImportanciaScreen from './screens/importanciaScreen';
import TipoScreen from './screens/tiposScreen';
import PreparacaoScreen from './screens/preparacaoScreen';
import ImpedimentosScreen from './screens/impedimentosScreen';
import FavoritoScreen from './screens/favoritoScreen';

const Stack = createNativeStackNavigator();

const theme = {
  colors: {
    primary: '#5c4dff',
    background: '#f4f5fa',
    text: '#2c2c54',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Doa PE" component={HomeScreen} /> 
          <Stack.Screen name="Locais" component={LocaisScreen} />
          <Stack.Screen name="Tipos" component={TipoScreen} />
          <Stack.Screen name="Impedimentos" component={ImpedimentosScreen} />
          <Stack.Screen name="Preparacao" component={PreparacaoScreen} />
          <Stack.Screen name="Importancia" component={ImportanciaScreen} />
          <Stack.Screen name="Favoritos" component={FavoritoScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
//
