import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ActivityIndicator, ScrollView } from "react-native";
import { Header } from "../components";
import { FontAwesome5 } from '@expo/vector-icons';
import Accordion from 'react-native-collapsible/Accordion';



interface programmeInterface {
    id: number;
    le_jour_de_lemission_: string,
    heures_de_debut_: string,
    title: string,
    thundail: string[]

}

interface resultInterface {
    day: string,
    data: programmeInterface[]
}


const ProgrammeScreen = () => {
    const [dates, setDates] = useState<resultInterface[]>([])
    const [isLoad, setIsLoad] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        getData().then((data) => {

            setIsLoad(false)
            if (data !== undefined && data !== null) {
                setDates(data);
            }

        })

    }, []);


    const [activeSections, setActiveSections] = useState([]);



    const _renderHeader = (section: any, index: any) => {


        return (
            <View style={styles.header} accessibilityLabel={section.day}>
                <Text style={styles.headerText}>{section.day}</Text>
                <View >
                    <FontAwesome5 name="caret-square-down" size={24} color="white" />
                </View>

            </View>
        );
    };

    const _renderContent = (section: any, index: any) => {

        return (
            <View >

                {

                    section.data.map((prog: programmeInterface) => {
                        return (
                            <View style={styles.cardContent} key={prog.id + ''} accessibilityLabel={prog.title}>
                                {
                                    prog.thundail === null ?
                                        <Image style={styles.thundail} source={require('../../assets/img/thundailNotFound.png')} /> :
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

    const _updateSections = (activeSections: any) => {
        setActiveSections(activeSections);
    };


    return (
        <SafeAreaView style={styles.container}>
            <Header />

            <View style={styles.header} >
                <Text style={styles.headerText}>PROGRAMME DISPONIBLE POUR LA SEMAINE</Text>
            </View>
            <TouchableOpacity >

                {isLoad ? < ActivityIndicator size={50} color='yellow' /> : null}

            </TouchableOpacity>

            <View style={{ height: "65%", }} >
                < ScrollView >
                    {!isError && <Accordion

                        sections={dates}
                        touchableComponent={TouchableOpacity}
                        activeSections={activeSections}

                        renderHeader={_renderHeader}
                        renderContent={_renderContent}
                        onChange={_updateSections}
                        renderAsFlatList={false}
                    />

                    }
                </ScrollView>
            </View>

            {isError && <Text style={styles.headerText}>Le programme n'est pas disponible pour le moment veuillez réessayer plus tard </Text>}


        </ SafeAreaView>


    )




    async function getData() {


        return fetch('https://www.froasis.re/wp-json/wl/v1/oasis_programme')
            .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => {
                //Success 

                if (responseJson !== null && responseJson.length > 0) {

                    const programmes: programmeInterface[] = responseJson;

                    const result: resultInterface[] = [
                        { day: 'lundi', data: [] },
                        { day: 'mardi', data: [] },
                        { day: 'mercredi', data: [] },
                        { day: 'jeudi', data: [] },
                        { day: 'vendredi', data: [] },
                        { day: 'samedi', data: [] },
                        { day: 'dimanche', data: [] },
                    ];

                    programmes.map((programme: programmeInterface) => {

                        result.map((day) => {
                            if (day.day === programme.le_jour_de_lemission_) {

                                day.data.push(programme);
                            }

                        });

                    });

                    /* range par hordre croisant de l'heure de difusion */
                    const GrilleProgramme: resultInterface[] = [];
                    result.map((programme) => {



                        programme.data.sort((a, b) => {
                            if (a.heures_de_debut_ < b.heures_de_debut_) {
                                return -1;
                            }
                            if (a.heures_de_debut_ > b.heures_de_debut_) {
                                return 1;
                            }
                            return 0;
                        });

                        if (programme.data.length > 0) {
                            GrilleProgramme.push(programme);
                        }

                    })

                    return GrilleProgramme;

                }

            }).catch((error) => {
                //Error 

                setIsError(true);
            });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1D1D1B",

    }
    , header: {

        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        marginVertical: 20,
        justifyContent: 'space-evenly',


    }, headerText: {
        fontSize: 20,

        textAlign: 'left',
        fontFamily: 'Yanone Kaffeesatz',
        color: 'white',
        width: '70%',

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
        /*     fontFamily: 'sfProMedium', */
        color: 'white',
        paddingHorizontal: 10,
        maxWidth: '50%'

    }
});

export default ProgrammeScreen;