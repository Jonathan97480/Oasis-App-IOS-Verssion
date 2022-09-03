import * as React from 'react';
import { View, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import WebView from 'react-native-webview';
import Header from '../components/header';
export default function Replay() {

  return (

    <SafeAreaView style={styles.SafeAreaView}>
      <Header />
      <View style={{ flex: 1 }}>
        <WebView

          source={{ html: `<iframe  id="haWidget" allowtransparency="true" scrolling="auto" src="https://www.helloasso.com/associations/frequence-oasis/formulaires/3/widget" style="width:100%;height:100%;border:none;" onload="window.scroll(0, this.offsetTop)"></iframe>` }}
          renderError={(errorName) => <Text style={{ color: '"fff' }} >{errorName} error</Text>}
          renderLoading={() => <View style={{ backgroundColor: '#1D1D1B', position: 'absolute', height: '100%', width: '100%', top: 0, left: 0, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            < ActivityIndicator size={'large'} color='yellow' />
          </View>}
          startInLoadingState={true}
          mixedContentMode="always"

        />
      </View>
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: "#1D1D1B",
    minHeight: "100%"
  },
  SafeAreaView: {
    backgroundColor: "#1D1D1B",
    minHeight: "100%",
    width: '100%',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
