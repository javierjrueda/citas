import React, {useState} from 'react';
import { Text, StyleSheet, View, FlatList, TouchableHighlight, TouchableWithoutFeedback, Keyboard, Platform, Touchable, Button} from 'react-native';
import Cita from '../components/Cita';

const ListaCitas = ({navigation}) => {

    //definir el state de citas
    const [citas, setCitas] = useState([
        { id: "1", paciente: "Hook", propietario: "Juan", sintomas: "No come"},
        { id: "2", paciente: "Redux", propietario: "Javier", sintomas: "No duerme"},
        { id: "3", paciente: "Native", propietario: "Pedro", sintomas: "No canta"}
    ]);

      //Elimina los pacientes del state
    const eliminarPaciente = id => {
        setCitas( (citasActuales) => {
        return citasActuales.filter(cita => cita.id !== id)
        })
    }

    const visitarNosotros = () => {
        navigation.navigate('Inicio')
        console.log("click");
    }

    return(
        <View>
            <TouchableHighlight>
                title="Ir a Formulario"
                onPress={ () => visitarNosotros() }
            </TouchableHighlight>
            <Text style={styles.titulo}>{citas.length > 0 ? 'Administra tus citas' : 'No hay citas programadas'}</Text>
            <FlatList
                style={styles.listado}
                data={citas}
                renderItem={ ({item}) => <Cita item={item} eliminarPaciente={eliminarPaciente}/>}
                keyExtractor={cita => cita.id}
            />
        </View>

    );

};

const styles = StyleSheet.create({
    listado:{
        marginHorizontal: '2.5%',
    },
    titulo: {
    textAlign: 'center',
    marginTop: Platform.OS === 'ios' ? 50 : 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    
    },
});


export default ListaCitas;
