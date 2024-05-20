import React, { useState } from "react";
import { View, Image, TouchableOpacity, Modal, Button, Text } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import Styles from './Styles'
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import { serviceLogoutMethod } from "../../service/UserService";


export default function Header() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    async function handleLogout(){
        setModalVisible(true);
    }

    async function confirmLogout() {
        await logOut();
    }

    async function logOut() {
        const response = await serviceLogoutMethod();
        if(response){
            setModalVisible(false);
            navigation.navigate('Welcome');
        }
    }

    return(
        <View style={Styles.container}>
            <TouchableOpacity onPress={()=> {navigation.navigate('TravelList')}}>
                <Image 
                    source={require('../../img/logo_branca.png')}
                    style={{width:54, height:49}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
                 <Icon name="menu" size={50} color="#fff"/>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={Styles.modalContainer}>
                    <View style={Styles.modalView}>
                        <Text style={Styles.modalText}>Tem certeza que deseja Sair?</Text>
                        <TouchableOpacity style={styles.btnLogout}onPress={confirmLogout}>
                            <Text style={styles.buttonText}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
