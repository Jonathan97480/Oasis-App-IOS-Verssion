
import React, { useState } from 'react'
import { Text, View, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';
import WebView from 'react-native-webview';




export default function Player() {

    return (
        <View style={styles.container}>
            <WebView

                originWhitelist={['*']}
                source={{
                    html: `<!DOCTYPE html>

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

<body style="width:100vw;margin:0;padding:0;">

    <style>
        #play i {
            position: absolute;
            left: 45%;
            top: 30%;
        }
        .live{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: red;
            width: 80px;
            height: 20px;
            color: white;
            font-weight: bold;
            position: absolute;
            left: 5px;
            top: 5px; 
            font-family: 'Roboto', sans-serif;
            padding: 5px;
            border-radius: 5px; 
            text-align: center;
            text-transform: uppercase;
            font-size: 20px;
        }
        .no-live{

            display:none!important;
        }
        .loading{
            position: absolute;
            left: 45%;
            top: 30%;
        }
        .loading-no{
            display:none!important;
        }
        .lecteur {
            background-image: url('https://rss.com/blog/wp-content/uploads/2021/03/video-podcasting-1024x683.jpg');
            background-position: center;
            background-size: cover;
            width: 100vw;
            overflow: hidden;
            height:100vh;
            margin: 0;
            margin: auto;
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-top: 15px;
        }
    </style>
    <div class="lecteur">
        <span class="live no-live" id="status-id">
            Live
        </span>
        <span class="loading-no" id="loading-id">
            <i class="fas fa-spinner fa-spin fa-3x"></i>
        </span>
        <span data-playing="false" role="switch" aria-checked="false" id="play">
            <i style="color:White;" class="fa-solid fa-play fa-4x"></i>  
        </span>



    </div>
</body>
<script>
  
    const playerIcon=document.getElementById('play');
    var audioSource=new Audio();
    audioSource.setAttribute('type', "audio/mpeg");
    audioSource.setAttribute('preload', "none");

    const statusLive = document.getElementById('status-id');
    const loading = document.getElementById('loading-id');

    playerIcon.addEventListener('click', () => {

        if (playerIcon.getAttribute('data-playing')=="false") {
            audioSource.setAttribute('src', "http://frequenceoasis.ice.infomaniak.ch/frequenceoasis-128.mp3?_=1");
            audioSource.load();
            loading.className = "loading";
            playerIcon.innerHTML='';
            audioSource.addEventListener('loadeddata', () => {
                audioSource.play();
                statusLive.setAttribute('class','live');
                loading.className = "loading loading-no";
                playerIcon.innerHTML='<i style="color:White;" class="fa-solid fa-pause fa-4x"></i>';
                playerIcon.setAttribute("data-playing", "true");
             });   
             
             
           
           

           
        } else {
            console.log("stop")
            playerIcon.setAttribute("data-playing", "false");
            playerIcon.innerHTML='<i style="color:White;" class="fa-solid fa-play fa-4x"></i>';
            statusLive.setAttribute('class','live no-live');
            audioSource.pause();
             audioSource.removeAttribute("src");
            audioSource.load();
        }




    })

</script>

</html>
    ` }}

            />
        </View>


    )
}

const styles=StyleSheet.create({

    WebView: {
        height: 100,

    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '80%',
        height: "20%",
        marginBottom: "5%",
        alignContent: 'center',
        backgroundColor: '#000000',


    }
});
