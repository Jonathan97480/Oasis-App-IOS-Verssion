
import { StyleSheet, View } from 'react-native';
import { HomeScreen, ContactScreen, ProgrammeScreen, DedicationScreen, DonationsScreen } from './src/screen';
import { ConnexionIndicator } from './src/components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect } from 'react';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  async function prepare() {
    await SplashScreen.preventAutoHideAsync();
  }

  const [fontsLoaded, error] = useFonts({

    'sfProBold': require('./assets/fonts/sfr-pro-bold.otf'),
    'sfProMedium': require('./assets/fonts/SFPRODISPLAYMEDIUM.otf'),
    'sfProRegular': require('./assets/fonts/SFPRODISPLAYREGULAR.otf'),
    'Yanone Kaffeesatz': require('./assets/fonts/Yanone-Kaffeesatz.ttf'),

  })
  useEffect(() => {
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <ConnexionIndicator />
      <View onLayout={onLayoutRootView}></View>
      <MyTabs />

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const MyTabs = () => {
  return (
    <Tab.Navigator

      screenOptions={({ route }) => ({

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;


          if (route.name === 'Live Radio') {
            if (focused) {
              iconName = <MaterialIcons name="radio" size={24} color="white" />

            } else {
              iconName = <MaterialIcons name="radio" size={24} color="black" />

            }

          } else if (route.name === 'Programme') {

            if (focused) {
              iconName = <FontAwesome5 name="calendar-alt" size={24} color="white" />
            } else {
              iconName = <FontAwesome5 name="calendar-alt" size={24} color="black" />

            }
          } else if (route.name === 'Dédicace') {

            if (focused) {
              iconName = <FontAwesome5 name="compact-disc" size={24} color="white" />

            } else {
              iconName = <FontAwesome5 name="compact-disc" size={24} color="black" />

            }

          } else if (route.name === 'Donation') {

            if (focused) {
              iconName = <FontAwesome5 name="donate" size={24} color="white" />

            } else {
              iconName = <FontAwesome5 name="donate" size={24} color="black" />

            }
          } else if (route.name === 'informations') {

            if (focused) {
              iconName = <FontAwesome5 name="info-circle" size={24} color="white" />

            } else {
              iconName = <FontAwesome5 name="info-circle" size={24} color="black" />

            }
          }



          // You can return any component that you like here!
          return iconName;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        headerShown: false,
        tabBarActiveBackgroundColor: "#4d76d0",
        tabBarStyle: { backgroundColor: '#FCD918' }


      })}

    >

      <Tab.Screen name="Live Radio" component={HomeScreen} />
      <Tab.Screen name="Dédicace" component={DedicationScreen} />
      <Tab.Screen name="Programme" component={ProgrammeScreen} />

      {/*   <Tab.Screen name="Donation" component={DonationsScreen} /> */}
      <Tab.Screen name="informations" component={ContactScreen} />


    </Tab.Navigator>
  );
}

