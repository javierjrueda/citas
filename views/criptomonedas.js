import React from 'react';
import { Text, StyleSheet, View, Button, Image, ImageBackground} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Encabezado from '../components/Cripto/Header';
import Formulario from '../components/Cripto/Formulario';


const Cripto = () => {
    return(
    <>
        
        <View style={styles.container}>
            <LinearGradient
                colors={['#432581','#8579e1']}
                style={styles.background}
            >
            <Encabezado/>
            <View style={styles.container_margins}>
            <ImageBackground
                source={ require('../assets/img/Saly-2.png')}
                style={styles.imgbackground}
            >
                <Formulario style={styles.container}/>

            </ImageBackground>
            </View>
            </LinearGradient>
        </View>

        
        
    </>
    );
};

const styles = StyleSheet.create({
    imagen: {
        width: '100%',
        height: 350,
        alignSelf: 'center'

    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        flex: 1

    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'orange',
      },
    imgbackground: {
        width: '100%',
        height: '90%',
        alignSelf: 'flex-end',
        
    },
    container_margins: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:'2,5%'
      },
})

export default Cripto;