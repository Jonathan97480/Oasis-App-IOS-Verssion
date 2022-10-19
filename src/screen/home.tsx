import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { ReplayWebView, ReplayCard, Header, Btn, Player } from "../components";
import Communications from 'react-native-communications'


const HomeScreen = () => {
    const [replayUrl, setReplayUrl] = useState('');

    const gotoReplay = (url: string) => {
        Communications.web(url)
        /*  setReplayUrl(url) */
        setRefreshPLayer(!refreshPLayer)

    }

    const [refreshPLayer, setRefreshPLayer] = useState(false);



    const closeReplay = () => {

        setReplayUrl('')
    }
    return (
        <SafeAreaView style={styles.container} >



            <Header />
            <Text style={styles.title}>ÉCOUTER NOUS EN LIVE</Text>
            <Player refresh={refreshPLayer} />
            <Text style={styles.title}>REPLAY</Text>
            <ScrollView   >

                <ReplayCard
                    rePlay={[
                        {
                            url: 'https://soundcloud.com/froasis/sets/parlez-moi-de-vous',
                            img: {
                                path: require('../../assets/img/Pmv.jpg'),
                                accessibilityLabel: 'parlez moi de vous'
                            }
                        },
                        {
                            url: 'https://soundcloud.com/froasis/sets/coeur-a-coeur-avec-leglise',
                            img: {
                                path: require('../../assets/img/couer.jpg'),
                                accessibilityLabel: 'couer a couer'
                            }
                        },
                        {
                            url: 'https://soundcloud.com/froasis/sets/tresor-du-ciel',
                            img: {
                                path: require('../../assets/img/tresor.jpg'),
                                accessibilityLabel: 'tresor di ciel'
                            }
                        },
                        {
                            url: 'https://soundcloud.com/froasis/sets/decouverte-dartiste',
                            img: {
                                path: require('../../assets/img/Artistes.jpg'),
                                accessibilityLabel: 'Découverte artistes'
                            }
                        },
                        {
                            url: 'https://soundcloud.com/froasis/sets/kozserieux',
                            img: {
                                path: require('../../assets/img/koz.jpg'),
                                accessibilityLabel: 'Allon kozé'
                            }
                        },
                        {
                            url: 'https://soundcloud.com/froasis/sets/sak-y-fo-savoir-casud',
                            img: {
                                path: require('../../assets/img/casud.jpg'),
                                accessibilityLabel: 'casud Réunion'
                            }
                        },
                    ]}
                    gotoReplay={gotoReplay}
                />




                <View style={styles.btnContent}>

                    <Btn
                        text={'Voir plus de replay'}
                        onPress={() => {
                            gotoReplay('https://soundcloud.com/froasis/sets')
                        }}
                    />

                </View>
            </ScrollView>
            {/*  <ReplayWebView url={replayUrl} close={
                closeReplay

            } /> */}


        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1D1D1B",
    },
    title: {

        fontSize: 24,
        lineHeight: 24,
        textAlign: 'center',
        fontFamily: 'Yanone Kaffeesatz',
        color: 'white',
        marginBottom: 20,


    },
    btnContent: {
        marginVertical: 20,
        marginBottom: 70,
        width: '100%',

        flexDirection: 'row',
        justifyContent: 'center',

    },

});

export default HomeScreen;