
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import Info from './Screen/info';



/* Importation des différents écrans de l'application */
import Home from './Screen/home.js';
import Dedicace from './Screen/dedicace.js';
import Programme from './Screen/programme.js';
import Donation from './Screen/donation.js';
import { useFonts } from 'expo-font';



const Tab=createBottomTabNavigator();

export default function App() {


  const [fontsLoaded, error]=useFonts({

    'Yanone Kaffeesatz': require('./assets/fonts/Yanone-Kaffeesatz.ttf')

  })








  if (!fontsLoaded) {
    return <AppLoading />
  }




  return (


    <NavigationContainer >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;


            if (route.name==='Live Radio') {
              if (focused) {
                iconName=<MaterialIcons name="radio" size={24} color="white" />

              } else {
                iconName=<MaterialIcons name="radio" size={24} color="black" />

              }

            } else if (route.name==='Programme') {

              if (focused) {
                iconName=<FontAwesome5 name="calendar-alt" size={24} color="white" />
              } else {
                iconName=<FontAwesome5 name="calendar-alt" size={24} color="black" />

              }
            } else if (route.name==='Dédicace') {

              if (focused) {
                iconName=<FontAwesome5 name="compact-disc" size={24} color="white" />

              } else {
                iconName=<FontAwesome5 name="compact-disc" size={24} color="black" />

              }

            } else if (route.name==='Donation') {

              if (focused) {
                iconName=<FontAwesome5 name="donate" size={24} color="white" />

              } else {
                iconName=<FontAwesome5 name="donate" size={24} color="black" />

              }
            } else if (route.name==='informations') {

              if (focused) {
                iconName=<FontAwesome5 name="info-circle" size={24} color="white" />

              } else {
                iconName=<FontAwesome5 name="info-circle" size={24} color="black" />

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
        }

        )}


      >
        <Tab.Screen name="Live Radio" component={Home}
          options={{




          }} />
        <Tab.Screen name="Programme" component={Programme} />
        <Tab.Screen name="Dédicace" component={Dedicace} />
        <Tab.Screen name="Donation" component={Donation} />
        <Tab.Screen name="informations" component={Info} />

      </Tab.Navigator>
    </NavigationContainer>
  );





}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 20,
    height: 20,
  }
});
