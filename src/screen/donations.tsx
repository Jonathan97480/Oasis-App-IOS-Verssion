import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";
import WebView from "react-native-webview";
import { Header } from "../components";



const DonationsScreen = () => {
    return (

        <SafeAreaView style={styles.SafeAreaView}>
            <Header />

            <View style={{ flex: 1 }}>
                <WebView
                    bounces={false}
                    source={{
                        html: `
          <!DOCTYPE html>

<html ng-app="OasisApp" ng-controller="indexCtrl">

<head>
    <meta charset="utf-8">
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="viewport" content="initial-scale=1, width=device-width, viewport-fit=cover">
    <meta name="color-scheme" content="light dark">
    <meta http-equiv="Access-Control-Allow-Origin" content="*">
    <meta http-equiv="Content-Security-Policy" content="default-src * 'unsafe-inline' 'unsafe-eval'">
    <meta property="og:title" content="Oasis Radio Live">
    <meta property="og:description" content="Oasis Radio Live">
    <meta property="og:image" content="../assets/LogoFrOasis250px.png">
    
    <link rel="icon" href="../assets/favicon.ico">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Oasis Radio Live</title>
</head>

<body style="width:100vw;margin:0;padding:0;height:100vh;background-color:"#000";>

            <iframe  id="haWidget" allowtransparency="true" scrolling="auto" src="https://www.helloasso.com/associations/frequence-oasis/formulaires/3/widget" style="width:100%;height:100%;border:none;" onload="window.scroll(0, this.offsetTop)"></iframe>
            </body>
            </html>
            ` }}

                    renderError={(errorName) => <Text style={{ color: '"fff' }} >{errorName} error</Text>}
                    renderLoading={() => <View style={{ backgroundColor: '#1D1D1B', position: 'absolute', height: '100%', width: '100%', top: 0, left: 0, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        < ActivityIndicator size={'large'} color='yellow' />
                    </View>}
                    startInLoadingState={true}
                    mixedContentMode="always"

                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        backgroundColor: "#1D1D1B",
        minHeight: "100%"
    },
    SafeAreaView: {
        backgroundColor: "#1D1D1B",
        minHeight: "100%",
        width: '100%',
    },
    paragraph: {
        margin: 24,
        marginTop: 0,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logo: {
        height: 128,
        width: 128,
    }
});


export default DonationsScreen;