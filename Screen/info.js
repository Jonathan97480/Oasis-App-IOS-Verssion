import React from 'react';
import { Text, View, StyleSheet, Pressable, ScrollView, SafeAreaView } from 'react-native';
import Header from '../components/header';
import Communications from 'react-native-communications'
import { FontAwesome5 } from '@expo/vector-icons';



export default function Info() {



    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Text style={styles.title}>INFORMATIONS</Text>
            <ScrollView contentContainerStyle={styles.infoContent}>

                <Pressable
                    onPress={() => {
                        Communications.phonecall('+262262011397', false)
                    }}
                    style={styles.pressable}
                >
                    <View style={{
                        backgroundColor: "#4d76d0", height: "100%", width: "20%", alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 5, borderBottomLeftRadius: 5
                    }}>
                        <FontAwesome5 name="phone-alt" size={24} color="white" />
                    </View>
                    <Text style={styles.textPressable}>0262 01 13 97</Text>


                </Pressable>

                <Pressable
                    onPress={() => {

                        Communications.web('https://www.instagram.com/radiofr.oasis/?hl=fr');
                    }}
                    style={styles.pressable}
                >
                    <View style={{
                        backgroundColor: "#4d76d0", height: "100%", width: "20%", alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 5, borderBottomLeftRadius: 5
                    }}>
                        <FontAwesome5 name="instagram" size={24} color="white" />
                    </View>
                    <Text style={styles.textPressable}>Instagram</Text>


                </Pressable>
                <Pressable
                    onPress={() => {

                        Communications.email('contact.froasis@gmail.com', null, null, null, '');
                    }}
                    style={styles.pressable}
                >
                    <View style={{
                        backgroundColor: "#4d76d0", height: "100%", width: "20%", alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 5, borderBottomLeftRadius: 5
                    }}>
                        <FontAwesome5 name="mail-bulk" size={24} color="white" />
                    </View>
                    <Text style={styles.textPressable}>contact.froasis@gmail.com</Text>


                </Pressable>
                <Pressable
                    onPress={() => {

                        Communications.web('https://www.facebook.com/974radiooasis')
                    }}
                    style={styles.pressable}
                >
                    <View style={{
                        backgroundColor: "#4d76d0", height: "100%", width: "20%", alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 5, borderBottomLeftRadius: 5
                    }}>
                        <FontAwesome5 name="facebook" size={24} color="white" />
                    </View>
                    <Text style={styles.textPressable}>974radiooasis</Text>


                </Pressable>
                <Pressable
                    onPress={() => {

                        Communications.web('https://twitter.com/frequenceoasis?lang=fr')
                    }}
                    style={styles.pressable}
                >
                    <View style={{
                        backgroundColor: "#4d76d0", height: "100%", width: "20%", alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 5, borderBottomLeftRadius: 5
                    }}>
                        <FontAwesome5 name="twitter" size={24} color="white" />
                    </View>
                    <Text style={styles.textPressable}>@FrequenceOasis</Text>


                </Pressable>
                <Pressable
                    onPress={() => {

                        Communications.web('https://www.froasis.re/')
                    }}
                    style={styles.pressable}
                >
                    <View style={{
                        backgroundColor: "#4d76d0", height: "100%", width: "20%", alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 5, borderBottomLeftRadius: 5
                    }}>
                        <FontAwesome5 name="globe-europe" size={24} color="white" />
                    </View>

                    <Text style={styles.textPressable}>www.froasis.re</Text>

                </Pressable>
                <Pressable
                    onPress={() => {

                        Communications.web('https://www.google.fr/maps/search/Adresse+28+Ter,+rue+de+l%E2%80%99%C3%89glise+97432+Ravine+des+Cabris/@-21.2882989,55.4731243,19z')
                    }}
                    style={styles.pressable}
                >
                    <View style={{
                        backgroundColor: "#4d76d0", height: "100%", width: "20%", alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 5, borderBottomLeftRadius: 5
                    }}>
                        <FontAwesome5 name="map-marker-alt" size={24} color="white" />
                    </View>

                    <Text style={styles.textPressable}>Où sommes-nous</Text>


                </Pressable>



            </ScrollView>


        </SafeAreaView>
    );




}

const styles=StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: "#1D1D1B",
        minHeight: "100%",
        maxHeight: "100%"
    },
    title: {
        fontSize: 24,
        lineHeight: 24,
        textAlign: 'center',
        fontFamily: 'Yanone Kaffeesatz',
        color: 'white',

    }, infoContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }, pressable: {
        marginVertical: "5%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "90%",
        height: 48,
        elevation: 6
        , backgroundColor: '#FCD918',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }, textPressable: {
        width: "80%",
        textAlign: 'center', color: 'black'
    }

});
