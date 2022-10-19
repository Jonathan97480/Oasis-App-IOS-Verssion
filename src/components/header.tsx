import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default function Header() {

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/img/logo.png')}
                style={{ width: 53, height: 52 }}
            />
            <Text style={styles.paragraph}>RADIO CHRÉTIENNE</Text>

        </View>
    );
}

const styles = StyleSheet.create({


    container: {
        alignItems: 'center',
        flexDirection: 'row',
        width: "100%",
        backgroundColor: "#1D1D1B",
        paddingBottom: 20,
        justifyContent: 'center',


    },
    paragraph: {

        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        width: '70%',
        fontFamily: 'Yanone Kaffeesatz',

    },
    logo: {
        height: 128,
        width: 128,

    }
});
