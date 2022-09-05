import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable, Modal, Platform, SafeAreaView } from "react-native";
import NetInfo from '@react-native-community/netinfo';


const ConnexionIndicator=() => {

    const [modalVisible, setModalVisible]=useState(false);
    const closeApp=() => {
        BackHandler.exitApp();
    }


    if (Platform.OS==="android") {
        // For Android devices
        NetInfo.fetch().then(state => {
            if (modalVisible!==!state.isConnected) {
                setModalVisible(!state.isConnected);
            }
        });

    } else {
        // For iOS devices
        const unsubscribe=NetInfo.addEventListener(state => {
            if (modalVisible!==!state.isConnected) {
                setModalVisible(!state.isConnected);
            }

        });
    }





    return (

        <Modal

            presentationStyle="overFullScreen"
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {

                setModalVisible(!modalVisible);
                closeApp();
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Une connexion Internet est nécessaire
                        pour le bon fonctionnement de l'application veuillez
                        activer votre connexion wifi ou cellular ou quitter l'application.</Text>

                </View>
            </View>
        </Modal>


    );
}




const styles=StyleSheet.create({

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },


    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,

    },

})

export default ConnexionIndicator