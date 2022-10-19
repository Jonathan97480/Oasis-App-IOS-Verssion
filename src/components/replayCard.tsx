import React from 'react';
import { View, StyleSheet, Pressable, Image } from 'react-native';

interface ReplayProps {
    rePlay: {
        url: string;
        img: any
    }[],
    gotoReplay: (url: string) => void
}

const ReplayCard = (props: ReplayProps) => {

    const { rePlay, gotoReplay } = props;

    return (

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}  >

            {
                rePlay.map((_replay, index) => {
                    return (
                        <Pressable key={index} onPress={() => {
                            gotoReplay(_replay.url)
                        }}
                            style={{ margin: 10 }}
                        >


                            <Image

                                source={_replay.img.path}
                                accessibilityLabel={_replay.img.accessibilityLabel}
                                resizeMode='cover'
                            />

                        </Pressable>
                    )
                })
            }


        </View>

    );


}


export default ReplayCard;