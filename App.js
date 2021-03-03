import 'react-native-gesture-handler';
import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableHighlight, TouchableWithoutFeedback, Keyboard, Platform, Touchable} from 'react-native';

// React navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Inicio from "./views/inicio";
import AdministradorCitas from "./views/citas";
import Layouts from "./views/layouts";
import Cripto from "./views/criptomonedas";


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
          name="Layouts"
          component={Layouts}
        />
        <Stack.Screen
          name="Criptomonedas"
          component={Cripto}
        />
        
      </Stack.Navigator>
      </NavigationContainer>
      </>
    );
};

export default App;
