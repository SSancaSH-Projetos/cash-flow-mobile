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
        bottom: '5%',
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },
      imageContainer:{
        alignItems:'center',
        justifyContent:'center'
      },
      image:{
        width:150,
        height:150,
        margin:40
      }
    
});

export default styles;
