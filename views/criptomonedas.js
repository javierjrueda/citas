import React, { useState, useEffect} from 'react';
import { Text, StyleSheet, View, Button, Image, ImageBackground, ScrollView} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import axios from 'axios';

import Encabezado from '../components/Cripto/Header';
import Formulario from '../components/Cripto/Formulario';
import Cotizacion from '../components/Cripto/Cotizacion';


const Cripto = () => {

    const [moneda, setMoneda] = useState('');
    const [criptomoneda, setCriptomoneda] = useState('');
    const [consultarAPI, setConsultarAPI] = useState(false);
    const [resultado, setResultado] = useState({});
    
    useEffect(() => {
        const cotizarCriptomoneda = async () => {
            if(consultarAPI){
                //Consultar la API para obtener la cotización
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
                const resultado = await axios.get(url);
                setResultado(resultado.data.DISPLAY[criptomoneda][moneda])
                setConsultarAPI(false)
            }
        }
        cotizarCriptomoneda();
    }, [consultarAPI])

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
                <Formulario 
                    style={styles.container}
                    moneda={moneda}
                    criptomoneda={criptomoneda}
                    setMoneda={setMoneda}
                    setCriptomoneda={setCriptomoneda}
                    setConsultarAPI={setConsultarAPI}
                />
                <Cotizacion
                resultado={resultado}
                />
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