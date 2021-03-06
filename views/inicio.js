import React from 'react';
import { Text, StyleSheet, View, Button, FlatList, Image, TouchableHighlight} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";


const Inicio = ({ navigation }) => {

    //definir el state de proyectos
    const proyectos = [
        { id: "1", nombre: "Administrador de citas", propietario: "actividad5"},
        { id: "2", nombre: "Criptomonedas", propietario: "token"},
        { id: "3", nombre: "Layouts", propietario: "mejores-1"},
    ];




    return( 
        <LinearGradient
                colors={['#432581','#99f0fb']}
                style={styles.background}
                start={[0,0]}
                end={[1,1]}
        >
            <View style={styles.contenedor}>
                <Text style={styles.title}>Mis aplicaciones:</Text>
                <View style={styles.listado}>
                <TouchableHighlight style={styles.card} onPress={ () => navigation.navigate('Criptomonedas') }>
                    <>
                        <Image 
                            style= {styles.cover}
                            source={ require('../assets/img/token.jpeg')}
                        />
                        <View style={styles.button}>
                                <Text style={styles.texto}>Criptomonedas</Text>
                        </View>
                    </>
                </TouchableHighlight>
                <TouchableHighlight style={styles.card} onPress={ () => navigation.navigate('Layouts') }>
                    <>
                        <Image 
                            style= {styles.cover}
                            source={ require('../assets/img/travel.jpg')}
                            //#CBE6DC
                        />
                        <View style={styles.button}>
                                <Text style={styles.texto}>Layouts</Text>
                        </View>
                    </>
                </TouchableHighlight>
                <TouchableHighlight style={styles.card} onPress={ () => navigation.navigate('Administrador de Citas') }>
                    <>
                        <Image 
                            style= {styles.cover}
                            source={ require('../assets/img/health.png')}
                        />
                        <View style={styles.button}>
                                <Text style={styles.texto}>Admin. de citas</Text>
                        </View>
                    </>
                </TouchableHighlight>
                <TouchableHighlight style={styles.card}>
                    <>
                        <Image 
                            style= {styles.cover}
                            source={ require('../assets/img/avo.jpg')}
                        />
                        <View style={styles.button}>
                                <Text style={styles.texto}>New coming soon...</Text>
                        </View>
                    </>
                </TouchableHighlight>


                </View>

            </View>
            
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex:1,
        alignItems: 'center',
        marginHorizontal: '2%',
        
    },
    title: {
        fontFamily: 'FredokaOne-Regular',
        fontSize: 22, 
        marginVertical: 20,
        color: '#fff',
        marginLeft: 20
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0, 
        flex: 1

    },
    card: {
        width: '48%',
        height: 200,
        backgroundColor: '#9983EE',
        borderRadius: 10,
        marginVertical: '1.5%'
    },
    cover: {
        width: '100%',
        height: '70%',
        alignSelf: 'center',
        borderRadius: 10
    }, 
    texto: {
        marginHorizontal: 10,
        fontSize: 15, 
        marginVertical: 5,
        fontWeight: 'bold' ,
    },
    icono: {
        alignSelf: 'flex-end',
        marginRight: 10

    },
    button: {
        marginHorizontal: '5%',
        marginTop: 15,
        backgroundColor: 'white',
        height: '15%',
        borderRadius: 5,
        alignItems: 'center',
    },
    listado: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
})

export default Inicio;