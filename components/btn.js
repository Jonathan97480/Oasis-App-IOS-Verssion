import * as React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';



export default function Btn({ action, title, iconName, width }) {


    if (title==null) { title='no title' }

    return (
        <Pressable style={styles.btnContent}
            onPress={action}
        >


            <Text style={styles.btnText}>{title}</Text>


        </Pressable>
    );
}

const styles=StyleSheet.create({

    btnContent: {
        backgroundColor: '#FCD918',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: "100%",
        height: 48,
        borderRadius: 5,
        elevation: 10,


    }, btnText: {
        color: 'black',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    }

});
