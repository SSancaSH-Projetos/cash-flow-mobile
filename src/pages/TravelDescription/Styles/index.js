import { StyleSheet } from "react-native";
import Colors from "../../../colors";


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    titleContainer:{
        width: '100%',
        height: '10%'

    }, 
    textOrigem:{
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 30,
        marginTop:10,
        marginBottom: 10,

    },
    textDestino:{
        color: Colors.branco,
        fontSize: 20,
        fontWeight: 20,
    },
    date:{
        width:'100%',
        height: '15%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:10,
    }, 
    dateInicio:{
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dateInicioText:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    dateText:{
        fontSize:25,
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 10,
        color: Colors.branco,
    },
    dateFinal:{
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dateFinalText:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    descriptionContainer:{
        width: '100%',
        height: 'auto',
        padding: 10,
    },
    description:{
        fontSize: 30,
        fontWeight: 'bold',
    }, 
    descriptionText:{
        fontSize: 16,
        textAlign: 'justify'
    },
    containerBottom:{
        flex: 1,
        position: 'absolute',
        left:'75%',
        top:'85%',
        width:70,
        height:70,
        borderRadius:100,
        backgroundColor:Colors.secondary,
        alignItems: 'center',
        justifyContent: 'center'
    }

   
    
});

export default styles;