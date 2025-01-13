import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Animated } from 'react-native';

export default function HeroButton() {
  const translateX = new Animated.Value(0);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: 10,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={startAnimation}>
      <Text style={styles.text}>Get Started</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    width: 270,
    height: 50,
    backgroundColor: '#1d2129',
    borderRadius: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    shadowColor: '#bebebe',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
    letterSpacing: 1.2,
    flex: 1,
    textAlign: 'center',
  },
  iconContainer: {
    width: 45,
    height: 45,
    backgroundColor: '#f59aff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#1d2129',
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: 'black',
    borderRadius: 5,
  },
});
