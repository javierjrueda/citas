import React, {useState} from 'react';
import { Text, StyleSheet, View, FlatList, TouchableHighlight, TouchableWithoutFeedback, Keyboard, Platform, Touchable} from 'react-native';
import Cita from '../components/Cita';
import Formulario from '../components/Formulario';


const AdministradorCitas = () => {
  const [mostrarForm, guardarMostrarForm] = useState('false');

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

  //Muestra u oculta el formulario
  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarForm);
  }

  //Ocultar teclado
  const cerrarTeclado = () => {
    Keyboard.dismiss();
  }

  return(
    <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
    <View style={styles.contenedor}>
      <View style={styles.crearCita}>
        <TouchableHighlight onPress={() => mostrarFormulario()} style={styles.btnMostrarForm}>
            <Text style={styles.textoMostrarForm}>
              { mostrarForm ? 'Cancelar cita':'Crear cita'}
            </Text>
        </TouchableHighlight>
      </View>
      <View style={styles.contenido}>
        { mostrarForm ?(
          <>
          <Text style={styles.titulo}>Crear nueva cita</Text>
          <Formulario
            citas={citas}
            setCitas={setCitas}
            guardarMostrarForm={guardarMostrarForm}
          />
          </>
        ) : (
          <>
          <Text style={styles.titulo}>{citas.length > 0 ? 'Administra tus citas' : 'No hay citas programadas'}</Text>
          <FlatList
            style={styles.listado}
            data={citas}
            renderItem={ ({item}) => <Cita item={item} eliminarPaciente={eliminarPaciente}/>}
            keyExtractor={cita => cita.id}
          />
          </>
        )}
        </View>
        <View sytle={styles.separador}/>
    </View>
    </TouchableWithoutFeedback>

  );
};

const styles = StyleSheet.create({
  contenedor:{
    backgroundColor: '#80C7F2',
    flex: 1,
  },
  titulo: {
    textAlign: 'left',
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: '2.5%',

    
  },
  contenido:{
    marginHorizontal: '2.5%',
  },
  listado:{
    marginHorizontal: '2.5%',
  },
  btnMostrarForm: {
      padding: 5,
      backgroundColor: 'white',
      marginVertical: 20,
      alignSelf: 'center',
      borderRadius: 4

  },
  textoMostrarForm: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
  },
  crearCita: {

  },
  separador: {
    height: 40,
  }
});

export default AdministradorCitas;
