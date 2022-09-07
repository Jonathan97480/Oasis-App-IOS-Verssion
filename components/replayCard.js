import React from 'react';
import { View, StyleSheet, Pressable, Image } from 'react-native';


const ReplayCard=({ replay, gotoReplay }) => {



    return (

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}  >

            {
                replay.map((_replay, index) => {
                    return (
                        <Pressable key={index} onPress={() => {
                            gotoReplay(_replay.url)
                        }}
                            style={{ margin: 10 }}
                        >

                            <Image

                                source={_replay.img.picUrl}
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