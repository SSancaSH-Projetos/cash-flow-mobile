import { StyleSheet } from "react-native";
import Colors from "../../../colors";


const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadow:{
        margin:50,
        padding:20,
        width: 320,
        height: 180,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
    },
    header:{
        flexDirection:"row"
    },
    body:{

    },
    footer:{
        flexDirection:"row"
    }
});

export default styles;