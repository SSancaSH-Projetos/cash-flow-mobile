import { StyleSheet } from "react-native";
import Colors from "../../../colors";


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    titleContainer:{
        width: '100%',
        height: 70,
        marginTop: 10,
        paddingLeft:10,
    },
    textDestino:{
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    textOrigem:{
        fontSize: 16,
        color: Colors.cinza,
    },
    date:{
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between',
        marginLeft: 6,
        marginRight:6,
    },
    dateInicio:{
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateFinal:{
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateTextItem:{
        fontSize: 20,
    },
    dateText:{
        backgroundColor: Colors.primary,
        width: '80%',
        color: Colors.branco,
        borderRadius: 6,
        fontSize:20,
        padding: 7,

    },
    descriptionContainer:{
        width: '100%',
        padding: 6,

    },
    description:{
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.primary
    },
    descriptionText:{
        fontSize: 16,

    },
    containerCard:{
        flex: 1,
        marginTop: 15,
    },
    contentTitle: {
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText:{
        fontSize: 20,
        color: Colors.primary,
        fontWeight: 'bold',
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