import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";


const Inicio = ({ navigation }) => {
    return( 
        <LinearGradient
                colors={['#432581','#99f0fb']}
                style={styles.background}
                start={[0,0]}
                end={[1,1]}
        >
            <View style={styles.contenedor}>
                <Text style={styles.title}>Mis aplicaciones:</Text>
                <Button
                    title="🚀 Criptomonedas"
                    onPress={ () => navigation.navigate('Criptomonedas') }
                    color="white"

                />
                <Button
                    title="👨🏻‍🎨 Layouts"
                    onPress={ () => navigation.navigate('Layouts') }
                    color="white"
                />

                <Button
                    title="💅🏼 Administrador de citas"
                    onPress={ () => navigation.navigate('Administrador de Citas') }
                    color="white"
                />
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    title: {
        fontFamily: 'FredokaOne-Regular',
        fontSize: 22, 
        marginVertical: 20,
        color: '#fff',
        marginLeft: 20
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        flex: 1

    },
})

export default Inicio;