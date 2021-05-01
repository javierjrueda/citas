import React, {useState} from 'react';
import { Text, StyleSheet, View, TouchableHighlight, TextInput, Button, Alert, ScrollView} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';


const Formulario = (citas, setCitas, guardarMostrarForm) => {
    
    const [paciente, guardarPaciente] = useState('');
    const [propietario, guardarPropietario] = useState('');
    const [telefono, guardarTelefono] = useState('');
    const [fecha, guardarFecha] = useState('');
    const [hora, guardarHora] = useState('');
    const [sintomas, guardarSintomas] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    //Muestra u oculta el Date picker
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const confirmarFecha = date => {
        const options = { year: 'numeric', month: 'long', day: "numeric" };
        guardarFecha(date.toLocaleDateString('es-ES', options));
        hideDatePicker(); 
    };

    //Muestra u oculta el Time picker
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };
    
    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const confirmarHora = hour => {
        const opciones = { hour: 'numeric', minute: '2-digit', hour12: false };
        guardarHora(hour.toLocaleString('es-ES',opciones));
        hideTimePicker();
    };

    // Crear nueva cita
    const crearNuevaCita = () => {
        //Validación de datos
        if(paciente.trim() === '' || 
            propietario.trim() === '' || 
            telefono.trim() === '' || 
            fecha.trim() === '' || 
            hora.trim() === '' || 
            sintomas.trim() === '')
            {
            //Falla la validación
            mostrarAlerta();
            }
        
        // Crear una nueva cita
        const cita = { paciente, propietario, telefono, fecha, hora, sintomas}
        cita.id = shortid.generate();
        //console.log(cita);

        //Agregar al state
        const citasNuevo = [...citas, cita];
        setCitas(citasNuevo);
        
        //Ocultar el formulario
        guardarMostrarForm(false);
        //Resetear el formulario
    }

    // Muestra una alerta si falla la validación
    const mostrarAlerta = () => {
        Alert.alert(
           'Error', //Título
           'Todos los campos son obligatorios', //Mensaje
           [{
               text: 'OK' //Arreglo de botones
           }]
        )
    }


    return (
      <>
        <ScrollView style={styles.formulario}>
            <View>
                <Text style={styles.label}>Paciente:</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={ texto => guardarPaciente(texto) }
                />
            </View>
            <View>
                <Text style={styles.label}>Dueño:</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={ texto => guardarPropietario(texto) }
                />
            </View>
            <View>
                <Text style={styles.label}>Teléfono:</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={ texto => guardarTelefono(texto) }
                    keyboardType='numeric'
                />
            </View>
            <View>
                <Text style={styles.label}>Fecha:</Text>
                <Button title="Seleccionar fecha" onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={confirmarFecha}
                    onCancel={hideDatePicker}
                    locale='es_ES'
                    headerTextIOS="Elige la fecha"
                    cancelTextIOS="Cancelar"
                    confirmTextIOS="Confirmar"

                />
                <Text style={styles.fecha}>{fecha}</Text>
            </View>
            <View>
                <Text style={styles.label}>Hora:</Text>
                <Button title="Seleccionar hora" onPress={showTimePicker} />
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={confirmarHora}
                    onCancel={hideTimePicker}
                    locale='es_ES'
                    headerTextIOS="Elige una hora"
                    cancelTextIOS="Cancelar"
                    confirmTextIOS="Confirmar"
                />
                <Text>{hora}</Text>
            </View>
            <View>
                <Text style={styles.label}>Síntomas:</Text>
                <TextInput 
                    multiline
                    style={styles.input}
                    onChangeText={ texto => guardarSintomas(texto) }
                />
            </View>
            <View>
                <TouchableHighlight onPress={() => crearNuevaCita()} style={styles.btnSummit}>
                    <Text style={styles.textoSummit}>
                        Agregar
                    </Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
      </>  
    );
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#FFF',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginHorizontal: '2.5%',
        borderRadius: 10
    },
    label: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 20,
        paddingHorizontal: 10,
    },
    input: {
        margin: 10,
        height: 30,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 4

    },
    btnSummit: {
        padding: 5,
        backgroundColor: '#80C7F2',
        marginVertical: 10,
        width: 100,
        alignSelf: 'center',
        borderRadius: 4

    },
    textoSummit: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    fecha: {
        fontSize: 20,
        textAlign: 'center'
    }
})

export default Formulario;