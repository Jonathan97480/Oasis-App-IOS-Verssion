import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Pressable, SafeAreaView } from 'react-native';
import Btn from '../components/btn';
import Header from '../components/header';
import Player from '../components/player';
import ReplayWebView from '../components/replayWebView';
import ConnexionIndicator from '../components/connexionIndicator';



export default function Home() {

  const [curentScrenn, setCurentScreeen]=useState('Home');
  const [replayUrl, setReplayUrl]=useState('');

  const gotoReplay=(url) => {

    setReplayUrl(url)
    setCurentScreeen('WebView')
  }



  if (curentScrenn==='Home') {

    return (

      <SafeAreaView style={styles.container}>
        <Header />

        <Text style={styles.title}>ÉCOUTER NOUS EN LIVE</Text>
        <Player />
        <Text style={styles.title}>REPLAY</Text>
        <View style={{ height: '52%', width: '100%' }}>
          <ScrollView contentContainerStyle={styles.scroll}  >
            <View style={styles.scrollContent}  >

              <Pressable onPress={() => {
                gotoReplay('https://soundcloud.com/froasis/sets/parlez-moi-de-vous')
              }} style={styles.picPressable}  >
                <Image style={styles.pic} source={require('../assets/img/Pmv.jpg')} accessibilityLabel="parlez moi de vous" resizeMode='cover' />

              </Pressable>

              <Pressable onPress={() => {
                gotoReplay('https://soundcloud.com/froasis/sets/coeur-a-coeur-avec-leglise')
              }} style={styles.picPressable}>
                <Image style={styles.pic} source={require('../assets/img/couer.jpg')} accessibilityLabel="couer a couer" />
              </Pressable>
            </View>
            <View style={styles.scrollContent} >
              <Pressable onPress={() => {
                gotoReplay('https://soundcloud.com/froasis/sets/tresor-du-ciel')
              }} style={styles.picPressable}>
                <Image style={styles.pic} source={require('../assets/img/tresor.jpg')} accessibilityLabel="tresor di ciel" />
              </Pressable>
              <Pressable onPress={() => {
                gotoReplay('https://soundcloud.com/froasis/sets/decouverte-dartiste')
              }} style={styles.picPressable}>
                <Image style={styles.pic} source={require('../assets/img/Artistes.jpg')} accessibilityLabel="Découverte artistes" />

              </Pressable>
            </View>



            <View style={styles.scrollContent} >
              <Pressable onPress={() => {
                gotoReplay('https://soundcloud.com/froasis/sets/kozserieux')
              }} style={styles.picPressable}>
                <Image style={styles.pic} source={require('../assets/img/koz.jpg')} accessibilityLabel="Allon kozé" />
              </Pressable>
              <Pressable onPress={() => {
                gotoReplay('https://soundcloud.com/froasis/sets/sak-y-fo-savoir-casud')
              }} style={styles.picPressable}>
                <Image style={styles.pic} source={require('../assets/img/casud.jpg')} accessibilityLabel="casud Réunion" />
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
        </View>

      </SafeAreaView>
    );
  }

  if (curentScrenn==='WebView') {

    return (
      <ReplayWebView url={replayUrl} close={
        () => {
          setCurentScreeen('Home')
        }
      } />
    )
  }
}

const styles=StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: "#1D1D1B",

  },
  title: {

    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: 'Yanone Kaffeesatz',
    color: 'white',
    marginBottom: 20
  }, scroll: {


    /* paddingBottom: 380, */


  }, scrollContent: {

    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',

    paddingHorizontal: 10,

  }, btnContent: {
    marginVertical: 20,
    marginBottom: 70,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',

  },
  pic: {
    width: 180,
    height: 150,
    margin: 10,
  },



});
