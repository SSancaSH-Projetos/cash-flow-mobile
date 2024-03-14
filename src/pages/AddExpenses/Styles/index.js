import { StyleSheet } from 'react-native';
import Colors from '../../../colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    form:{
      
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,

      },
      areaButton:{
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    
      },
      button:{
        width: '94%',
        backgroundColor: Colors.secondary,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        borderRadius: 5,
        
      },
      textButton:{
        fontSize: 18,
        color: Colors.branco,
      }, 
      areaButtonAdd:{
        position: 'absolute',
        bottom: '7%',
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },
      imageContainer:{
        padding: 10,
        alignItems:'center',
        justifyContent:'center',
        width: '100%',
        height: '40%',
      },
      image:{
        width:'100%',
        height:'100%',
        margin:40
      },

      //MODAL
      areaModal: {
        flex: 1,
    },
    modalContainer: {
        borderRadius: 10,
        padding: 20,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formModal: {
        marginBottom: 20,
        alignItems: 'center',
    },
    titleFormModal: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    buttonsContainerModal: {
      width: '100%',
        alignItems: 'center',
    },
    buttonModalCan: {
        width: '100%',
        backgroundColor: '#ff0000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 30,
    },
    buttonTextModal: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    buttonModal: {
      width: '100%',
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginBottom: 10,
  },
    
});

export default styles;
