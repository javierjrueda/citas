import 'react-native-gesture-handler';
import React from 'react';

// React navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Inicio from "./views/inicio";
import AdministradorCitas from "./views/citas";
import Layouts from "./views/layouts";
import Cripto from "./views/criptomonedas"; 
import Weather from "./views/weather"; 



const Stack = createStackNavigator();


const App = () => {
    return(
      <>      
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
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
        
      </Stack.Navigator>
      </NavigationContainer>
      </>
    );
};

export default App;
