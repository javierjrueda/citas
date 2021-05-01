import React, { useState, useEffect} from 'react';
import { StyleSheet, View, ActivityIndicator, ImageBackground} from 'react-native';
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
    const [cargando, setcargando] = useState(false);
    
    useEffect(() => {
        const cotizarCriptomoneda = async () => {
            if(consultarAPI){
                //Consultar la API para obtener la cotización
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
                const resultado = await axios.get(url);
                console.log(resultado);
                setcargando(true);

                //Ocultar el spinner y mostrar el resultado
                setTimeout(() => {
                    setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
                    setConsultarAPI(false);
                    setcargando(false);
                }, 1000);
            }
        }
        cotizarCriptomoneda();
    }, [consultarAPI])

    //Mostrar el spinner o el resultado
    const componente = cargando ? <ActivityIndicator size='large' style={styles.spinner} /> : <Cotizacion resultado={resultado}/>


    return(
        
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
                {componente}

            </ImageBackground>


            </View>
            </LinearGradient>
        </View>

        


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
        
    },
    container_margins: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal:'2,5%',
      },
    spinner: {
        marginVertical:20
    }
})

export default Cripto;