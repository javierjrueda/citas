import React, { useState} from "react";
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Animated } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Form = () => {

    const [animacionboton] = useState(new Animated.Value(1))

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
                    placeholder="Ciudad"
                    placeholderTextColor='#666'
                    style={styles.input}
                />
            </View>
            <View>
                <Picker
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