import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import Form from "../components/Weather/Formulario";
import Clima from "../components/Weather/Clima";


const Weather = () => {

    const [busqueda, setbusqueda] = useState({
        ciudad: '',
        pais: ''
    });
    const [consultar, setconsultar] = useState(false);
    const [resultado, setresultado] = useState({});
    const [bgcolor, setbgcolor] = useState('rgb(71,149,202)');

    const {ciudad, pais} = busqueda;

    useEffect(() => {
        const consultarClima = async () => {
            if(consultar){
                const appid = 'a0b9cdb4193d7ac3dd65e7b89381846d'; 
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`;
    
                try {
                    const respuesta = await fetch(url);
                    const resultado = await respuesta.json();
                    setresultado(resultado);
                    setconsultar(false);

                    //Modifica los colores de fondo basado en la temperatura
                    const kelvin = 273.15
                    const { main } = resultado;
                    const actual = main.temp - kelvin;

                    if( actual < 10 ) {
                        setbgcolor('rgb(105, 108, 149)')

                    } else if ( actual >= 10 && actual < 25 ){
                        setbgcolor('rgb(71,149,202)')

                    } else {
                        setbgcolor('rgb(178, 28, 61)')

                    }

                } catch (Error) {
                    mostrarAlerta();
                }
            }
        }
        consultarClima();
    }, [consultar])

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'No hay resultados, intenta con otra ciudad o país.',
            [{ text: 'Entendido'}]
        )
    }

    const ocultarTeclado = () => {
        Keyboard.dismiss();
    }

    const bgColorApp = {
        backgroundColor: bgcolor
    }

    return ( 
        <TouchableWithoutFeedback onPress={ () => ocultarTeclado() }>
        <View style={[styles.app, bgColorApp]}>
            <View style={styles.contenido}>
                <Clima 
                    resultado={resultado}
                />
                <Form 
                    busqueda={busqueda}
                    setbusqueda={setbusqueda}
                    setconsultar={setconsultar}
                />

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