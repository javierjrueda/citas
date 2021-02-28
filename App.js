import 'react-native-gesture-handler';
import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableHighlight, TouchableWithoutFeedback, Keyboard, Platform, Touchable} from 'react-native';

// React navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Inicio from "./views/inicio";
import AdministradorCitas from "./views/Citas";

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
        
      </Stack.Navigator>
      </NavigationContainer>
      </>
    );
};

export default App;
