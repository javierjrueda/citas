import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Alert } from "react-native";
import {Picker} from '@react-native-picker/picker';
import axios from "axios";

const Formulario = ({ moneda, criptomoneda, setMoneda, setCriptomoneda, setConsultarAPI}) => {


    const [criptomonedas, setCriptomonedas] = useState([]);


    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            setCriptomonedas(resultado.data.Data);
        }
        consultarAPI();
    }, []);

    //Almacena las opciones del usuario
    const obtenerMoneda = moneda => {
        setMoneda(moneda)
    }
    const obtenerCriptomoneda = cripto => {
        setCriptomoneda(cripto)
    }
    const cotizarPrecio = () => {
        if(moneda.trim() === '' || criptomoneda.trim() === '' ){
            mostrarAlerta();
            return;
        }
        // Cambiar el state de consultarAPI
        setConsultarAPI(true)
    }
    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Ambos campos son obligatorios',
            [
                {text: 'OK'}
            ]
        )
    }

    return ( 
        <View>
            <Text style={styles.label}>Moneda:</Text>
           
            <Picker
                selectedValue={moneda}
                onValueChange={ moneda => obtenerMoneda(moneda)}
                itemStyle={{ height: 120, color: "white", fontWeight:'bold', fontFamily: 'FredokaOne-Regular' }}
            >
                <Picker.Item label="– Seleccione" value=""/>
                <Picker.Item label="USD" value="USD"/>
                <Picker.Item label="EUR" value="EUR"/>
                <Picker.Item label="GBP" value="GBP"/>
            </Picker>
           
            <Text style={styles.label}>Criptomoneda:</Text>

            <Picker
                selectedValue={criptomoneda}
                onValueChange={ cripto => obtenerCriptomoneda(cripto)}
                itemStyle={{ height: 120, color: "white", fontWeight:'bold', fontFamily: 'FredokaOne-Regular' }}
                mode="dropdown"

            >
                <Picker.Item label="– Seleccione" value=""/>
   
                { criptomonedas.map( cripto => (
                    <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name}/>
                ) ) }
                    
            </Picker>
            <TouchableHighlight style={styles.btnCotizar} onPress={ () => cotizarPrecio()}>
                    <Text style={styles.textoCotizar}>Cotizar</Text>
            </TouchableHighlight>

        </View>

     );
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'FredokaOne-Regular',
        fontSize: 22, 
        marginVertical: 20,
        color: '#fff',
        marginLeft: 20
    }, 
    textoCotizar: {
        fontFamily: 'FredokaOne-Regular',
        color: '#fff',
        fontSize: 15, 
        textAlign: 'center'

    },
    btnCotizar: {
        width: '60%',
        backgroundColor: '#8579e1ff', 
        padding: 10,
        marginTop: 20, 
        alignSelf: 'center', 
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    }
});
 
export default Formulario;