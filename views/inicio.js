import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const Inicio = ({ navigation }) => {
    return( 
        <View style={styles.contenedor} >
        <Text style={styles.title}>Mis aplicaciones:</Text>
        <Button
            title="Administrador de citas"
            onPress={ () => navigation.navigate('Administrador de Citas') }
        />
        <Button
            title="Layouts"
            onPress={ () => navigation.navigate('Layouts') }
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
        
    },
    title: {
        marginVertical: 8
    }
})

export default Inicio;