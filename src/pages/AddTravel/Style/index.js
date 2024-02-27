import { StyleSheet } from "react-native";
import Colors from "../../../colors";


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    content:{
        width: '100%',
        height: '100%',
        alignContent: 'center',
    },
    title:{
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        padding: 30,
    },
    boxDate: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around', 
        alignItems: 'center',
        marginBottom: 15 
      },
      date: {
        width: '47%',
        height: 50,
        borderWidth: 2,
        borderRadius: 6,
        borderColor: Colors.primary,
        fontSize: 20, // aumentando o tamanho da fonte
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center' // centralizando o texto verticalmente
      },
    address:{
        width: '97%',
        height:50,
        borderWidth:2,
        borderRadius:5,
        borderColor:Colors.primary,
        fontSize:16,
        marginLeft:6,
        marginBottom:15,
        paddingLeft:6,
    },
    description: {
        width: '97%',
        height: 200,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.primary,
        fontSize: 16,
        marginLeft: 6,
        marginBottom: 15,
        paddingLeft: 6,
        textAlign: 'left',
        textAlignVertical: 'top' 
    },
    alert:{
        textAlign: 'center',
        color: Colors.vermelho,
        marginBottom: 15,
        fontWeight: 'bold',
        fontSize: 16,
    },
    areaBottom:{
        width:'97%',
        height:50,
        backgroundColor:Colors.secondary,
        borderRadius:5,
        alignContent: 'center',
        justifyContent: 'center', 
        marginLeft: 6,
    },
    textBottom:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
    
      

});

export default styles;