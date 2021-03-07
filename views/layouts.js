import React from 'react';
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Layouts = ({ navigation }) => {

    return( 
        <ScrollView>
            <View style={{ flexDirection: 'row'}}>
                <Image 
                    style= {styles.banner}
                    source={ require('../assets/img/bg.jpg')}
                />
            </View>
            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Encuentra planes cerca de ti</Text>
                <ScrollView
                horizontal
                >
                    <View>
                        <Image 
                            style= {styles.ciudad}
                            source={ require('../assets/img/actividad1.jpg')}
                        />
                    </View>
                    <View>
                        <Image 
                            style= {styles.ciudad}
                            source={ require('../assets/img/actividad2.jpg')}
                        />
                    </View> 
                    <View>
                        <Image 
                            style= {styles.ciudad}
                            source={ require('../assets/img/actividad3.jpg')}
                        />
                    </View> 
                    <View>
                        <Image 
                            style= {styles.ciudad}
                            source={ require('../assets/img/actividad4.jpg')}
                        />
                    </View> 
                    <View>
                        <Image 
                            style= {styles.ciudad}
                            source={ require('../assets/img/actividad5.jpg')}
                        />
                    </View> 
                </ScrollView>
                <Text style={styles.titulo}>Descubre tu próximo destino</Text>
                <View>
                    <Image 
                        style= {styles.mejores}
                        source={ require('../assets/img/mejores1.jpg')}
                    />
                </View>
                <View>
                    <Image 
                        style= {styles.mejores}
                        source={ require('../assets/img/mejores2.jpg')}
                    />
                </View> 
                <View>
                    <Image 
                        style= {styles.mejores}
                        source={ require('../assets/img/mejores3.jpg')}
                    />
                </View>  
            
                <Text style={styles.titulo}>Alojamientos superhost</Text>
                <View style={styles.listado}>
                    <View style={styles.listadoItem}>
                        <Image 
                            style= {styles.mejores}
                            source={ require('../assets/img/hospedaje1.jpg')}
                        />
                    </View> 
                    <View style={styles.listadoItem}>
                        <Image 
                            style= {styles.mejores}
                            source={ require('../assets/img/hospedaje2.jpg')}
                        />
                    </View> 
                    <View style={styles.listadoItem}>
                        <Image 
                            style= {styles.mejores}
                            source={ require('../assets/img/hospedaje3.jpg')}
                        />
                    </View>
                    <View style={styles.listadoItem}>
                        <TouchableHighlight onPress={ () => navigation.navigate('Inicio') }>
                        <Image 
                            style= {styles.mejores}
                            source={ require('../assets/img/hospedaje4.jpg')}
                        />
                        </TouchableHighlight>
                    </View> 
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    banner: {
        height: 250,
        flex: 1
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 20
    },
    contenedor: {
        marginHorizontal: 10
    },
    ciudad: {
        width: 250,
        height: 300,
        marginRight: 10
    },
    mejores:{
        width: '100%',
        height: 200,
        marginBottom: 10
    },
    listado: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
        
    },
    listadoItem: {
        flexBasis: '49%',
    } 

    
})

export default Layouts;