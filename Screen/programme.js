import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { FontAwesome5 } from '@expo/vector-icons';
import Header from '../components/header';


export default function Programme() {

  const [dates, setDates]=useState([])
  const [isload, setIsload]=useState(true);
  const [iserror, setIserror]=useState(false);
  useEffect(() => {
    getData().then((data) => {

      setIsload(false)
      setDates(data);

    })

  }, []);


  const [activeSections, setActiveSections]=useState([]);

  const _renderSectionTitle=(section, index) => {
    return (
      null
    );
  };

  const _renderHeader=(section, index) => {


    return (
      <View style={styles.header} accessibilityLabel={section.day}>
        <Text style={styles.headerText}>{section.day}</Text>
        <View style={{ marginLeft: '50%' }}>
          <FontAwesome5 name="caret-square-down" size={24} color="white" />
        </View>

      </View>
    );
  };

  const _renderContent=(section, index) => {

    return (
      <View style={styles.content} >

        {

          section.data.map((prog) => {
            return (
              <View style={styles.cardContent} key={prog.id+''} accessibilityLabel={prog.title}>
                {
                  prog.thundail===false?
                    <Image style={styles.thundail} source={require('../assets/img/thundailNotFound.png')} />:
                    <Image style={styles.thundail} source={{ uri: prog.thundail[0] }} />
                }

                <Text style={styles.cardTitle} >{prog.title}</Text>
                <Text style={styles.cardTitle} >{prog.heures_de_debut_}</Text>
              </View>

            )
          })
        }

      </View>
    );
  };

  const _updateSections=(activeSections) => {
    setActiveSections(activeSections);
  };


  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TouchableOpacity >
        <View style={styles.header}>
          <Text style={styles.headerText}>PROGRAMME DE LA SEMAINE</Text>
        </View>
        {isload? < ActivityIndicator size={50} color='yellow' />:null}

      </TouchableOpacity>

      <View style={{ height: "65%" }} >
        < ScrollView >
          {!iserror&&<Accordion

            sections={dates}
            touchableComponent={TouchableOpacity}
            activeSections={activeSections}
            renderSectionTitle={_renderSectionTitle}
            renderHeader={_renderHeader}
            renderContent={_renderContent}
            onChange={_updateSections}
            renderAsFlatList={false}
          />

          }
        </ScrollView>
      </View>

      {iserror&&<Text style={styles.headerText}>Le programme n'est pas disponible pour le moment veuillez réessayer plus tard </Text>}


    </ SafeAreaView>


  )
}


async function getData() {


  return fetch('https://www.froasis.re/wp-json/wl/v1/oasis_programme')
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
      //Success 

      if (responseJson!==null&&responseJson.length>0) {
        let data=responseJson;
        let resutl=[
          { day: 'lundi', data: [] },
          { day: 'mardi', data: [] },
          { day: 'mercredi', data: [] },
          { day: 'jeudi', data: [] },
          { day: 'vendredi', data: [] },
          { day: 'samedi', data: [] },
          { day: 'dimanche', data: [] },
        ];

        data.map((programmme) => {

          resutl.map((day) => {
            if (day.day===programmme.le_jour_de_lemission_) {

              day.data.push(programmme);
            }

          });

        });

        /* range par hordre croisant de l'heure de difusion */
        resutl.map((programmme) => {

          programmme.data.sort((a, b) => {
            if (a.heures_de_debut_<b.heures_de_debut_) {
              return -1;
            }
            if (a.heures_de_debut_>b.heures_de_debut_) {
              return 1;
            }
            return 0;
          });

        })

        return resutl;

      }

    }).catch((error) => {
      //Error 

      setIserror(true);
    });

}


const styles=StyleSheet.create({


  container: {
    width: '100%',
    minHeight: '100%',
    paddingBottom: 50,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: "#1D1D1B",
    alignItems: 'center'

  }, header: {
    display: 'flex',
    flexDirection: 'row',
    width: "100%",
    alignItems: 'center',
    marginVertical: 20,
    justifyContent: 'space-evenly',


  }, headerText: {
    fontSize: 20,
    lineHeight: 20,
    textAlign: 'center',
    fontFamily: 'Yanone Kaffeesatz',
    color: 'white',
    width: 100

  }, cardContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 5,
    maxWidth: '100%',
    paddingHorizontal: '5%'
  }, thundail: {
    width: 92,
    height: 88
  }, cardTitle: {
    fontSize: 18,
    lineHeight: 20,
    textAlign: 'center',
    fontFamily: 'Yanone Kaffeesatz',
    color: 'white',
    paddingHorizontal: 10,
    maxWidth: '50%'

  }
});
