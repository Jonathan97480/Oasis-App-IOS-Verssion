import * as React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';


interface BtnProps {
    text: string;
    onPress: () => void;

}

export default function Btn(props: BtnProps) {

    const { text, onPress } = props;


    return (
        <Pressable style={styles.btnContent}
            onPress={() => onPress()}
        >


            <Text style={styles.btnText}>{checkTitle(text)}</Text>


        </Pressable>
    );
}

const checkTitle = (title: string) => {
    if (title == null) { title = 'no title' }
    return title
}

const styles = StyleSheet.create({

    btnContent: {
        flex: 1,
        backgroundColor: '#FCD918',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 500,
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
