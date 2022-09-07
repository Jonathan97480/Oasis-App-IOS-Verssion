import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Btn from '../components/btn';
import Header from '../components/header';
import Player from '../components/player';
import ReplayWebView from '../components/replayWebView';
import { StatusBar } from 'expo-status-bar';
import ReplayCard from '../components/replayCard';





export default function Home() {


  const [replayUrl, setReplayUrl]=useState('');

  const gotoReplay=(url) => {

    setReplayUrl(url)
    setRefreshPLayer(!refreshPLayer)

  }

  const [refreshPLayer, setRefreshPLayer]=useState(false);



  const closeReplay=() => {

    setReplayUrl('')
  }

  return (

    <SafeAreaView
      style={styles.SafeAreaView}
    >
      <StatusBar style='light' />

      <Header />
      <Text style={styles.title}>ÉCOUTER NOUS EN LIVE</Text>
      <Player refresh={refreshPLayer} />
      <Text style={styles.title}>REPLAY</Text>
      <ScrollView   >

        <ReplayCard
          replay={[
            {
              url: 'https://soundcloud.com/froasis/sets/parlez-moi-de-vous',
              img: {
                picUrl: require('../assets/img/Pmv.jpg'),
                accessibilityLabel: 'parlez moi de vous'
              }
            },
            {
              url: 'https://soundcloud.com/froasis/sets/coeur-a-coeur-avec-leglise',
              img: {
                picUrl: require('../assets/img/couer.jpg'),
                accessibilityLabel: 'couer a couer'
              }
            },
            {
              url: 'https://soundcloud.com/froasis/sets/tresor-du-ciel',
              img: {
                picUrl: require('../assets/img/tresor.jpg'),
                accessibilityLabel: 'tresor di ciel'
              }
            },
            {
              url: 'https://soundcloud.com/froasis/sets/decouverte-dartiste',
              img: {
                picUrl: require('../assets/img/Artistes.jpg'),
                accessibilityLabel: 'Découverte artistes'
              }
            },
            {
              url: 'https://soundcloud.com/froasis/sets/kozserieux',
              img: {
                picUrl: require('../assets/img/koz.jpg'),
                accessibilityLabel: 'Allon kozé'
              }
            },
            {
              url: 'https://soundcloud.com/froasis/sets/sak-y-fo-savoir-casud',
              img: {
                picUrl: require('../assets/img/casud.jpg'),
                accessibilityLabel: 'casud Réunion'
              }
            },
          ]}
          gotoReplay={gotoReplay}
        />




        <View style={styles.btnContent}>

          <Btn
            title={'Voir plus de replay'}
            action={() => {
              gotoReplay('https://soundcloud.com/froasis/sets')
            }}
          />

        </View>
      </ScrollView>
      <ReplayWebView url={replayUrl} close={
        closeReplay

      } />

    </SafeAreaView>
  );
}




const styles=StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: "#1D1D1B",

  },
  title: {

    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: 'sfProMedium',
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
