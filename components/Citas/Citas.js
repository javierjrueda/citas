import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';

const Cita = ({item, eliminarPaciente}) => {
    const dialogoEliminar = (id) => {
        console.log('eliminando... id: ', id);
        eliminarPaciente(id);

    }
    return (
        <View style={styles.cita}>
            <View>
                <Text style={styles.label}>Paciente: </Text>
                <Text style={styles.texto}>{item.paciente}</Text>
            </View>
            <View>
                <Text style={styles.label}>Propietario: </Text>
                <Text style={styles.texto}>{item.propietario}</Text>
            </View>
            <View>
                <Text style={styles.label}>Síntomas: </Text>
                <Text style={styles.texto}>{item.sintomas}</Text>
            </View>
            <View>
                <TouchableHighlight onPress={() => dialogoEliminar(item.id)} style={styles.btnEliminar}>
                    <Text style={styles.textoEliminar}>
                        Eliminar &times;
                    </Text>
                </TouchableHighlight> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: '5%',
        borderRadius: 10

    },
    label: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 20,
        marginLeft: 25

    },
    texto: {
        fontSize: 25,
        marginLeft: 25
    },
    btnEliminar: {
        padding: 5,
        backgroundColor: '#80C7F2',
        marginVertical: 10,
        width: 100,
        alignSelf: 'flex-end',
        borderRadius: 4,
        marginHorizontal: 25
    },
    textoEliminar: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }

})

export default Cita;

