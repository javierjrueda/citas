import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0 ) return null;

    return ( 
        <View style={styles.resultado}>
            <Text style={styles.texto}>Precio: {' '}
                <Text style={styles.span}>{resultado.PRICE}</Text>
            </Text>
            <Text style={styles.texto}>Precio más alto del día: {' '}
                <Text style={styles.span}>{resultado.HIGHDAY}</Text>
            </Text>            
            <Text style={styles.texto}>Precio más bajo del día: {' '}
                <Text style={styles.span}>{resultado.LOWDAY}</Text>
            </Text>            
            <Text style={styles.texto}>Variación últimas 24h: {' '}
                <Text style={styles.span}>{resultado.CHANGEPCT24HOUR} %</Text>
            </Text>            
            <Text style={styles.texto}>Última actualización: {' '}
                <Text style={styles.span}>{resultado.LASTUPDATE}</Text>
            </Text>
        </View>

     );
}
const styles = StyleSheet.create ({
    resultado: {
        backgroundColor: '#8579e1ff', 
        width: '90%',
        padding: 20, 
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

    }, 
    texto:{
        fontFamily: 'FredokaOne-Regular',
        color: '#fff',
        fontSize: 17,
        marginBottom: 10,
    },
    precio: {
        color: '#fff',
        fontFamily: 'FredokaOne-Regular',
    }, 

    span: {
        fontFamily: 'FredokaOne-Regular',
        fontWeight: 'bold'

    }
});
 
export default Cotizacion;

