import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Pressable, ActivityIndicator, Modal, SafeAreaView } from 'react-native';

import WebView from 'react-native-webview';
import { FontAwesome5 } from '@expo/vector-icons';



const ReplayWebView=({ url, close }) => {

    const [curentUrl, setCurentUrl]=useState('');

    useEffect(() => {
        setCurentUrl(url)
    }, [url]);



    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={curentUrl!==''}


        >
            <SafeAreaView style={{
                backgroundColor: "#1D1D1B",
                minHeight: "100%",
                width: '100%',
            }}>

                <View style={{ width: '100%', height: 60 }}>
                    <Pressable
                        style={styles.btnContent}
                        onPress={() => {
                            close()
                        }}
                    >
                        <FontAwesome5 name="chevron-left" size={24} color="black" />
                        <Text style={styles.btnText} >

                            Retourner au live</Text>
                    </Pressable>
                </View>

                <View style={{ flex: 1 }}>
                    <WebView
                        bounces={false}
                        onMessage={(event) => {
                            console.info(event.nativeEvent.data)
                        }}
                        source={{ uri: curentUrl }}
                        renderError={(errorName) => <Text style={{ color: '"fff' }} >{errorName} error</Text>}
                        renderLoading={() => <View style={{ backgroundColor: '#1D1D1B', position: 'absolute', height: '100%', width: '100%', top: 0, left: 0, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            < ActivityIndicator size={'large'} color='yellow' />
                        </View>}
                        startInLoadingState={true}
                        mixedContentMode="always"

                        injectedJavaScript={
                            `
                   document.querySelector('header').style.display='none';  
                   document.body.style.backgroundColor = '#1D1D1B';
                   document.body.style.color='white';
                   document.querySelectorAll('nav').forEach((e)=>{
                         e.style.display='none';
                   });
                   document.querySelector('footer').style.display='none';
                 `
                        }


                    />
                </View>
            </SafeAreaView>
        </Modal>
    )
}


const styles=StyleSheet.create({

    btnContent: {
        flex: 1,
        backgroundColor: '#FCD918',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        maxWidth: "100%",
        height: 48,
        borderRadius: 5,
        elevation: 10,


    }, btnText: {
        width: '100%',
        color: 'black',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    }

});

export default ReplayWebView;