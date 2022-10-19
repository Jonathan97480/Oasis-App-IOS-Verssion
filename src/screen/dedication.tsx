import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, ScrollView, TextInput } from "react-native";
import { Btn, Header } from "../components";




const DedicationScreen = () => {

    const [IsLoad, setIsLoad] = useState(false);
    const [formDedication, setFormDedication] = useState<{ name: string, nameError: string, dedication: string, dedicationError: string }>({
        name: '',
        nameError: '',
        dedication: '',
        dedicationError: ''
    })


    const [sendStatus, setSendStatus] = useState('standby');
    const [isEmptyFields, setIsEmptyFields] = useState(false);

    const email = 'appoasis@oasis.re';

    const postDedication = () => {


        if (!getFormError(formDedication, setFormDedication)) {

            setIsLoad(true)
            const from = new FormData();
            from.append("yourname", formDedication.name);
            from.append("youremail", email);
            from.append("yourmessage", formDedication.dedication);

            if (formDedication.nameError === '' && formDedication.dedicationError === '') {

                fetch('http://www.froasis.re/wp-json/contact-form-7/v1/contact-forms/212667/feedback', {
                    method: 'POST',

                    body: from
                    //Request Type 
                }).then((response) => response.json())
                    .then((json) => {
                        if (json.status !== 'mail_sent') {

                            setSendStatus('error')

                        } else {
                            setSendStatus('send')
                            setFormDedication({
                                name: '',
                                nameError: '',
                                dedication: '',
                                dedicationError: ''
                            })


                        }

                        setIsLoad(false)
                        setTimeout(() => setSendStatus('standby'), 2000)
                    }).catch((e) => {
                        setIsLoad(false)
                        setSendStatus('error')
                        setTimeout(() => setSendStatus('standby'), 2000)

                    })

            } else {
                setIsLoad(false)
                setIsEmptyFields(true)
                setTimeout(() => setIsEmptyFields(false), 10000)

            }
        }

    }

    if (!IsLoad) {
        return (
            <SafeAreaView style={styles.container}>
                <Header />

                <Text style={styles.title}>PASSER UNE DÉDICACE</Text>

                {isEmptyFields && <Text style={styles.error}>Tous les champs doivent être remplis</Text>}
                <View style={styles.cont2}>
                    {sendStatus == 'standby' &&
                        <ScrollView automaticallyAdjustKeyboardInsets={true}>
                            <View  >
                                {formDedication.nameError !== '' && <Text style={styles.formError}>{formDedication.nameError}</Text>}
                                <TextInput
                                    style={styles.input}
                                    value={formDedication.name}
                                    onChangeText={(text) => setFormDedication({ ...formDedication, name: text })}
                                    placeholder="Nom et prénom"

                                    accessibilityLabel="Votre nom complet"
                                />
                                {formDedication.dedicationError !== '' && <Text style={styles.formError}>{formDedication.dedicationError}</Text>}
                                <TextInput style={styles.textArea}
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor="grey"
                                    placeholder="Votre message"
                                    returnKeyType="send"
                                    onKeyPress={(e) => {
                                        if (e.nativeEvent.key === 'Enter') {
                                            postDedication()

                                        }
                                    }}
                                    multiline={true}
                                    numberOfLines={10}
                                    value={formDedication.dedication}
                                    onChangeText={(text) => setFormDedication({ ...formDedication, dedication: text })}
                                    accessibilityLabel="Votre dédicace"

                                />
                                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginTop: 20 }}>
                                    <Btn
                                        text={'Envoyer Votre Dédicace'}
                                        onPress={
                                            () => {
                                                postDedication();
                                            }
                                        }
                                    />
                                </View>

                            </View>
                        </ScrollView>
                    }
                </View>

                {
                    sendStatus == 'send' && <View>
                        <Text style={styles.title} >Votre dédicace a été envoyée</Text>
                    </View>
                }

                {
                    sendStatus == "error" && <View>
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

            <Text style={styles.title}>PASSER UNE DÉDICACE</Text>
            <ActivityIndicator size={50} color={"yellow"} />
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
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
        marginBottom: "5%",
        height: 50,


    }, textArea: {
        backgroundColor: 'white',
        height: 150,
        marginBottom: "5%"
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
    }, formError: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
        width: '100%',
        height: 20,
    }

});

export default DedicationScreen;

function getFormError(formDedication: { name: string, nameError: string, dedication: string, dedicationError: string }, setFormDedication: any): boolean {

    let error = false;

    if (formDedication.name.length < 3) {
        error = true;
        formDedication.nameError = 'Le nom doit contenir au moins 3 caractères';
        setFormDedication(formDedication);
    } else {
        formDedication.nameError = '';
        setFormDedication(formDedication);
    }

    if (formDedication.dedication.length < 3) {
        error = true;
        formDedication.dedicationError = 'La dédicace doit contenir au moins 3 caractères';
        setFormDedication(formDedication);
    } else {
        formDedication.dedicationError = '';
        setFormDedication(formDedication);


    }

    return error;
}
