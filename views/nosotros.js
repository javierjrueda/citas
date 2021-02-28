import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const Nosotros = ({ navigation }) => {

    return( 
        <View style={styles.contenedor} >
        <Text>Nosotros</Text>
        <Button
            title="Inicio"
            onPress={ () => navigation.navigate('Inicio') }
        />
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Nosotros;