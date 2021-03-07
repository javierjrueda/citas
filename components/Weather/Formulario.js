import React, { useState} from "react";
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Animated, Alert} from "react-native";
import { Picker } from "@react-native-picker/picker";

const Form = ({ busqueda, setbusqueda, setconsultar}) => {

    const {pais, ciudad} = busqueda;

    const [animacionboton] = useState(new Animated.Value(1))

    const consultarClima = () => {
        if(pais.trim() === '' || ciudad.trim() === ''){
            mostrarAlerta();
            return;
        }
        //Consultar la API
        setconsultar(true);
    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Agrega una ciudad y país para la búsqueda.',
            [{ text: 'Entendido'}]
        )
    }

    const animacionEntrada = () => {
        Animated.spring( animacionboton, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
    }

    const animacionSalida = () => {
        Animated.spring( animacionboton, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    }

    const estiloAnimacion = {
        transform: [{ scale: animacionboton }],
    }

    return ( 
        <>
        <View style={styles.form}>
            <View>
                <TextInput
                    value={ciudad}
                    style={styles.input}
                    onChangeText= { ciudad => setbusqueda({ ...busqueda, ciudad})}
                    placeholder="Ciudad"
                    placeholderTextColor='#666'
                />
            </View>
            <View>
                <Picker
                    selectedValue={pais}
                    onValueChange= { pais => setbusqueda({ ...busqueda, pais})}
                    itemStyle={{height: 120, backgroundColor: '#fff'}}
                >
                    <Picker.Item label="– Seleccione un país" value=''/>
                    <Picker.Item label="Estados Unidos" value='US'/>
                    <Picker.Item label="España" value='ES'/>
                    <Picker.Item label="Alemania" value='DE'/>
                    <Picker.Item label="Argentina" value='AR'/>
                    <Picker.Item label="Costa Rica" value='CR'/>
                </Picker>
            </View> 
            <TouchableWithoutFeedback
                onPressIn={ () => animacionEntrada() }
                onPressOut={ () => animacionSalida() }
                onPress={ () => consultarClima() }

            >
                <Animated.View style={[styles.btn, estiloAnimacion]}>
                    <Text style={styles.textobtn}>Buscar clima</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
        </>
     );
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        height: 50, 
        backgroundColor: '#fff',
        fontSize: 20, 
        marginBottom: 20,
        textAlign: 'center'
    },
    btn: {
        marginTop: 50,
        backgroundColor: '#fff',
        padding: 10,
        justifyContent: 'center'
    },
    textobtn: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18


    }
});
 
export default Form;