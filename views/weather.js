import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import Form from "../components/Weather/Formulario";

const Weather = () => {

    const ocultarTeclado = () => {
        Keyboard.dismiss();
    }

    return ( 
        <TouchableWithoutFeedback onPress={ () => ocultarTeclado() }>
        <View style={styles.app}>
            <View style={styles.contenido}>
                <Form />

            </View>
        </View>
        </TouchableWithoutFeedback>
     );
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: 'rgb(71,149,202)',
        justifyContent: 'center'
    },
    contenido: {
        marginHorizontal: '2.5%'

    }
});
 
export default Weather;