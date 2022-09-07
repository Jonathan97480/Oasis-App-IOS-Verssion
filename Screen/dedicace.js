import React, { useState } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-paper';
import Header from '../components/header';
import Btn from '../components/btn';
import { StatusBar } from 'expo-status-bar';

export default function Dedicace() {

  const [Isload, setIsload]=useState(false);
  const [fullname, setFullname]=useState('');
  const [dedicace, setDedicace]=useState('');
  const [sendStatus, setsendStatus]=useState('standby');
  const [isEmptyFields, setIsEmptyFields]=useState(false);

  const email='appoasis@oasis.re';





  const postDedicace=() => {
    setIsload(true)
    let from=new FormData();
    from.append("yourname", fullname);
    from.append("youremail", email);
    from.append("yourmessage", dedicace);

    if (fullname!==''&&dedicace!=='') {

      fetch('http://www.froasis.re/wp-json/contact-form-7/v1/contact-forms/212667/feedback', {
        method: 'POST',

        body: from
        //Request Type 
      }).then((response) => response.json())
        .then((json) => {
          if (json.status!=='mail_sent') {

            setsendStatus('error')

          } else {
            setsendStatus('send')
            setFullname('');
            setDedicace('');

          }

          setIsload(false)
          setTimeout(() => setsendStatus('standby'), 2000)
        }).catch((e) => {
          setIsload(false)
          setsendStatus('error')
          setTimeout(() => setsendStatus('standby'), 2000)

        })

    } else {
      setIsload(false)
      setIsEmptyFields(true)
      setTimeout(() => setIsEmptyFields(false), 10000)

    }


  }

  if (!Isload) {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <StatusBar style='light' />
        <Text style={styles.title}>PASSER UNE DÉDICACE</Text>

        {isEmptyFields&&<Text style={styles.error}>Tous les champs doivent être remplis</Text>}
        <View style={styles.cont2}>
          {sendStatus=='standby'&&
            <ScrollView >
              <View>
                <TextInput
                  style={styles.input}
                  value={fullname}
                  onChangeText={setFullname}
                  label="Votre nom et prénom"
                  accessibilityLabel="Votre nom complet"
                />
                <TextInput style={styles.textArea}
                  underlineColorAndroid="transparent"
                  placeholderTextColor="grey"
                  label="Votre dédicace"
                  multiline={true}
                  numberOfLines={10}
                  value={dedicace}
                  onChangeText={setDedicace}
                  accessibilityLabel="Votre dédicace"

                />
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginTop: 20 }}>
                  <Btn
                    title={'Envoyer Votre Dédicace'}
                    action={
                      () => {
                        postDedicace();
                      }
                    }
                  />
                </View>

              </View>
            </ScrollView>
          }
        </View>

        {
          sendStatus=='send'&&<View>
            <Text style={styles.title} >Votre dédicace a été envoyée</Text>
          </View>
        }

        {
          sendStatus=="error"&&<View>
            <Text style={styles.title} >
              Votre dédicace n'a pas pu être envoyée veuillez réessayer plus tard
            </Text>
          </View>
        }

      </SafeAreaView>


    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <StatusBar style='light' />
      <Text style={styles.title}>PASSER UNE DÉDICACE</Text>
      <ActivityIndicator size={50} color={"yellow"} />
    </SafeAreaView>

  )
}




const styles=StyleSheet.create({
  container: {
    alignItems: 'center',

    backgroundColor: "#1D1D1B",
    minHeight: "100%",
    maxHeight: "100%",
    width: '100%',

  }, cont2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: "65%",
    width: "90%"
  },
  paragraph: {

    fontSize: 24,
    lineHeight: 24,

    textAlign: 'center',
    fontFamily: 'Yanone Kaffeesatz',
    color: 'white'

  }, title: {

    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: 'Yanone Kaffeesatz',
    color: 'white',
    marginBottom: "5%"


  }, blockInput: {
    marginVertical: "2%"


  }, AreaBlock: {
    marginVertical: "5%",
    alignItems: 'center',


  },
  input: {
    backgroundColor: 'white',
    marginVertical: "5%"


  }, textArea: {
    backgroundColor: 'white',

    marginBottom: "2%"
  },
  label: {
    fontSize: 24,
    lineHeight: 28,
    color: 'white',
    fontFamily: 'Yanone Kaffeesatz'
  }, btn: {
    borderRadius: 5,
    color: 'black',
    elevation: 6,

  }, error: {
    color: 'red',
    marginTop: 30,
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 20,
    backgroundColor: 'white'
    , padding: 10,
    borderRadius: 5, elevation: 6
  }

});
