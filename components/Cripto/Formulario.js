import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker';

const Formulario = () => {
    return ( 

        <View>
            <Text style={styles.label}>Moneda:</Text>
           
            <Picker>
                <Picker.Item label="– Seleccione" value=""/>
                <Picker.Item label="USD" value="USD"/>
                <Picker.Item label="EUR" value="EUR"/>
                <Picker.Item label="GBP" value="GBP"/>
            </Picker>
           
            <Text style={styles.label}>Criptomoneda:</Text>

            <Picker>
                <Picker.Item label="– Seleccione" value=""/>
                <Picker.Item label="USD" value="USD"/>
                <Picker.Item label="EUR" value="EUR"/>
                <Picker.Item label="GBP" value="GBP"/>
            </Picker>
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
    }
});
 
export default Formulario;