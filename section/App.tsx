import React from 'react';
import HeroPage from './home/heropage';

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
          <HeroPage/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
