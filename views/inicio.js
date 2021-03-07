import React from 'react';
import { Text, StyleSheet, View, Image, TouchableWithoutFeedback} from 'react-native';
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
                colors={['rgba(62,161,219,1)','rgba(93,52,236,1)']}
                style={styles.background}
                start={[1,1]}
                end={[0,0]}



        >
            <View style={styles.contenedor}>
                <Text style={styles.title}>Mis aplicaciones:</Text>
                <View style={styles.listado}>
                <TouchableWithoutFeedback onPress={ () => navigation.navigate('El Tiempo') }>
                    <View style={styles.card5}>
                        <Image 
                            style= {styles.cover}
                            source={ require('../assets/img/weather.jpg')}
                        />
                        <View style={styles.button}>
                                <Text style={styles.texto}>El Tiempo</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>  
                <TouchableWithoutFeedback onPress={ () => navigation.navigate('Criptomonedas') }>
                    <View style={styles.card1}>
                        <Image 
                            style= {styles.cover}
                            source={ require('../assets/img/token.jpeg')}
                        />
                        <View style={styles.button}>
                                <Text style={styles.texto}>Criptomonedas</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={ () => navigation.navigate('Organizador de viajes') }>
                    <View style={styles.card2}>
                        <Image 
                            style= {styles.cover}
                            source={ require('../assets/img/travel.jpg')}
                            //#CBE6DC
                        />
                        <View style={styles.button}>
                                <Text style={styles.texto}>Organiza tu viaje</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback  onPress={ () => navigation.navigate('Administrador de Citas') }>
                    <View style={styles.card3}>
                        <Image 
                            style= {styles.cover}
                            source={ require('../assets/img/health.png')}
                        />
                        <View style={styles.button}>
                                <Text style={styles.texto}>Admin. de citas</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={styles.card4}>
                        <Image 
                            style= {styles.cover}
                            source={ require('../assets/img/avo.jpg')}
                        />
                        <View style={styles.button}>
                                <Text style={styles.texto}>More coming soon...</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>


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
        fontSize: 22, 
        marginVertical: 20,
        color: '#fff',
        marginLeft: 20,
        fontWeight: 'bold'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0, 
        flex: 1

    },
    card1: {
        width: '48%',
        height: 200,
        backgroundColor: '#F99F8B',
        borderRadius: 10,
        marginVertical: '1.5%'
    },
    card2: {
        width: '48%',
        height: 200,
        backgroundColor: '#CFE7D9',
        borderRadius: 10,
        marginVertical: '1.5%'
    },
    card3: {
        width: '48%',
        height: 200,
        backgroundColor: '#E5EBEF',
        borderRadius: 10,
        marginVertical: '1.5%'
    },
    card4: {
        width: '48%',
        height: 200,
        backgroundColor: '#BAC378',
        borderRadius: 10,
        marginVertical: '1.5%'
    },
    card5: {
        width: '48%',
        height: 200,
        backgroundColor: '#2CBEFF',
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