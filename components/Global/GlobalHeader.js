import React from "react";
import { Text, StyleSheet, Platform, View, TouchableHighlight } from "react-native";


const Header = ({navigation}) => {
    
    const volver = () => {
        navigation.goBack();
    }

    return(
        <>
            <View style={styles.encabezado}>
                <TouchableHighlight onPress={ () => volver() }>
                    <>
                    <AntDesign name="left" size={18} style={styles.icono}/> 
                    <Text style={styles.inicio}>Inicio</Text>
                    </>
                </TouchableHighlight>
                <Text style={styles.titulo}>Hola</Text>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    encabezado: {
        paddingTop: Platform.OS === 'ios' ? 50 : 20,
        flexDirection: 'row',
        marginHorizontal: '2%',
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    icono: {
        color: '#fff',
        marginRight: '1%'

    },
    inicio: {
        color: '#fff',
        fontSize: 18,
        marginRight: '1%'

    },
    titlecontainer: {
        flex: 1,

        
    },
    titulo: {
        fontFamily: 'FredokaOne-Regular',
        fontSize: 30,
        color: '#fff',
        marginLeft: '5%'


        }
})

export default Header;