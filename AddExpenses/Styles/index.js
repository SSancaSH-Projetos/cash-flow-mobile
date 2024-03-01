import { StyleSheet } from 'react-native';
import Colors from '../../../colors'; // Certifique-se de importar suas cores corretamente



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', // Cor de fundo branca
    },
    
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.primary, // Cor da barra azul
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    logo: {
        width: 50,
        height: 40,
    },
    menuIcon: {
        padding: 5,
        borderRadius: 5,
    },
    formContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        paddingTop: 90,
    },
    inputContainer: {
        marginBottom: 15,
        
    },
    input: {
        borderWidth: 2,
        borderColor: Colors.primary,
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginBottom: 30,
        borderRadius: 5,
        height: 55
    },
    photoButton: {
        flexDirection: 'row-reverse', // Inverte a ordem dos itens na linha
        justifyContent: 'space-between', // Distribui os itens na linha
        alignItems: 'center',
        backgroundColor: Colors.secondary, // Cor do botão "Tirar Foto da Nota Fiscal"
        padding: 14,
        borderRadius: 5,
        marginTop: 40,
        width:370,
        borderWidth: 1,
        borderColor: Colors.primary
        
    },    
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Centraliza o conteúdo horizontalmente
        backgroundColor: Colors.secondary, // Cor do botão "Adicionar Despesa"
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10, // Ajuste o espaçamento conforme necessário
        width: 300, // Ajuste a largura do botão conforme necessário
        borderWidth: 1,
        borderColor: Colors.primary
    },    
    buttonTextAdd: {
        color: '#000',
        fontSize: 19,
        marginLeft: 5,
    },
    buttonText:{
        color: '#000',
        fontSize: 19,
        textAlign: 'center', // Alinha o texto ao centro
    },    
    centeredButtonContainerPhoto:{
        alignItems: 'center', // Centraliza horizontalmente
        marginTop: 0, // Ajuste o espaçamento conforme necessário
    },
    centeredButtonContainer:{
        alignItems: 'center',
        marginTop: 160,
        
    },

    
    
});

export default styles;
