import React from 'react';

// React navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Inicio from "./views/inicio";
import AdministradorCitas from "./views/citas";
import Layouts from "./views/layouts";
import Cripto from "./views/criptomonedas"; 
import Weather from "./views/weather"; 
import Header from './components/Global/GlobalHeader';



const Stack = createStackNavigator();



const App = () => {
    return(
      <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            //headerShown: false,
          }} 
        >
        <Stack.Screen
          name="Inicio"
          component={Inicio}
        />
        <Stack.Screen
          name="Administrador de Citas"
          component={AdministradorCitas}
        />
        <Stack.Screen
          name="Organizador de viajes"
          component={Layouts}
        />
        <Stack.Screen
          name="Criptomonedas"
          component={Cripto}
        />
        <Stack.Screen
          name="El Tiempo"
          component={Weather}
        />
        <Stack.Screen
          name="Header"
          component={Header}
        />
        
      </Stack.Navigator>
      </NavigationContainer>
      </>
    );
};

export default App;
