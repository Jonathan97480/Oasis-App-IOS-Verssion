import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default function Header() {

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/img/logo.png')}
                style={{ width: 53, height: 52 }}
            />
            <Text style={styles.paragraph}>RADIO CHRÉTIENNE</Text>

        </View>
    );
}

const styles=StyleSheet.create({


    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 40,
        width: "100%",
        backgroundColor: "#1D1D1B",
        paddingBottom: 20


    },
    paragraph: {
        marginTop: 0,
        fontSize: 24,
        lineHeight: 24,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'sfProMedium',

    },
    logo: {
        height: 128,
        width: 128,
    }
});
