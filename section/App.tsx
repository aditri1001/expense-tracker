import React from 'react';
import HeroPage from './login-signup/HeroPage';
import LoginPage from "./login-signup/LoginPage"
import Statics from './statistics/Statics';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* <HeroPage/> */}
          {/* <LoginPage /> */}
          <Statics />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
