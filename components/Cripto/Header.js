import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

const Encabezado = () => {
    return(
        <Text style={styles.encabezado}>Criptomonedas</Text>
    );
}


const styles = StyleSheet.create({
    encabezado: {
        paddingVertical: 20,
        fontFamily: 'FredokaOne-Regular',
        textAlign: 'center', 
        fontSize: 30,
        color: '#fff'
        
    }
})

export default Encabezado;