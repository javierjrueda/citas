import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const Inicio = ({ navigation }) => {
    return( 
        <View style={styles.contenedor} >
        <Text>Inicio</Text>
        <Button
            title="Nosotros"
            onPress={ () => navigation.navigate('Nosotros') }
        />
        <Button
            title="Administrador de citas"
            onPress={ () => navigation.navigate('Administrador de Citas') }
        />
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F2EFE9'
        
    }
})

export default Inicio;