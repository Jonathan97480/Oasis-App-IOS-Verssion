import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Pressable, Button, Modal, BackHandler, SafeAreaView } from 'react-native';
import Btn from '../components/btn';
import WebView from 'react-native-webview';
import Header from '../components/header';
import Player from '../components/player';
import NetInfo from '@react-native-community/netinfo';


export default function Home() {

  const [curentScrenn, setCurentScreeen]=useState('Home');
  const [isConnected, setIsConnected]=useState(false);
  const [modalVisible, setModalVisible]=useState(false);
  const [replayUrl, setReplayUrl]=useState('');


  const getConnexion=() => {

    NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);

      return isConnected;
    })



  }

  const gotoReplay=(url) => {

    setReplayUrl(url)
    setCurentScreeen('WebView')


  }



  const closeApp=() => {
    BackHandler.exitApp();
  }

  if (curentScrenn==='Home'&&isConnected) {

    return (

      <SafeAreaView style={styles.container}>
        <Header />
        <Text style={styles.title}>ÉCOUTER NOUS EN LIVE</Text>


        <Player />


        <Text style={styles.title}>REPLAY</Text>

        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.scrollContent}  >

            <Pressable onPress={() => {
              gotoReplay('https://soundcloud.com/froasis/sets/parlez-moi-de-vous')
            }} style={styles.picPressable}  >
              <Image style={styles.pic} source={require('../assets/img/Pmv.png')} accessibilityLabel="parlez moi de vous" />

            </Pressable>

            <Pressable onPress={() => {
              gotoReplay('https://soundcloud.com/froasis/sets/coeur-a-coeur-avec-leglise')
            }} style={styles.picPressable}>
              <Image style={styles.pic} source={require('../assets/img/couer.png')} accessibilityLabel="couer a couer" />
            </Pressable>
          </View>
          <View style={styles.scrollContent} >
            <Pressable onPress={() => {
              gotoReplay('https://soundcloud.com/froasis/sets/tresor-du-ciel')
            }} style={styles.picPressable}>
              <Image style={styles.pic} source={require('../assets/img/tresor.png')} accessibilityLabel="tresor di ciel" />
            </Pressable>
            <Pressable onPress={() => {
              gotoReplay('https://soundcloud.com/froasis/sets/decouverte-dartiste')
            }} style={styles.picPressable}>
              <Image style={styles.pic} source={require('../assets/img/Artistes.png')} accessibilityLabel="Découverte artistes" />

            </Pressable>
          </View>



          <View style={styles.scrollContent} >
            <Pressable onPress={() => {
              gotoReplay('https://soundcloud.com/froasis/sets/kozserieux')
            }} style={styles.picPressable}>
              <Image style={styles.pic} source={require('../assets/img/koz.png')} accessibilityLabel="Allon kozé" />
            </Pressable>
            <Pressable onPress={() => {
              gotoReplay('https://soundcloud.com/froasis/sets/sak-y-fo-savoir-casud')
            }} style={styles.picPressable}>
              <Image style={styles.pic} source={require('../assets/img/casud.png')} accessibilityLabel="casud Réunion" />
            </Pressable>
          </View>
          <View style={styles.btnContent}>
            {<Btn
              title={'Voir plus de replay'}
              action={() => {
                gotoReplay('https://soundcloud.com/froasis/sets')
              }}
            />}

          </View>
        </ScrollView>

      </SafeAreaView>
    );
  }


  if (!isConnected) {

    getConnexion()

    return (
      <View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {

            setModalVisible(!modalVisible);
            closeApp();
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Une connexion Internet est nécessaire pour le bon fonctionnement veuillez la relancer l'application après avoir activé votre connexion.</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => closeApp}>
                <Text style={styles.textStyle}>D'accord j ai compris</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    )

  }


  if (curentScrenn==='WebView') {

    return (
      <>
        <Header />
        <Btn action={() => {
          setCurentScreeen('Home')
        }}
          title={'Back'}
        />

        <WebView

          source={{ uri: replayUrl }}

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
      </>
    )
  }
}

const styles=StyleSheet.create({
  container: {

    alignItems: 'center',
    backgroundColor: "#1D1D1B",
    margin: 0,
    padding: 0,

    /*    minHeight: "100%",
       maxHeight: "100%" */

  },
  title: {

    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: 'Yanone Kaffeesatz',
    color: 'white',
    marginBottom: 20
  }, scroll: {
    width: '100%',
    paddingBottom: 380,


  }, scrollContent: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'

  }, btnContent: {
    marginBottom: 30
  }, picPressable: {
    alignItems: 'center',

    width: "40%"
  }, pic: {

    width: "100%",
    marginHorizontal: 20,
    marginVertical: 10

  }, centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});
