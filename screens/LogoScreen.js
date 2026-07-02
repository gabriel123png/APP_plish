import { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Easing } from 'react-native';

export default function LogoScreen({ navigation }) {
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 🌊 Flotación suave infinita
    Animated.loop(
      Animated.timing(floatAnim, {
        toValue: 1,
        duration: 2500,
        easing: Easing.inOut(Easing.sin),
        useNativeDriver: true,
      })
    ).start();

    // ⏳ después de 3 segundos cambia de pantalla
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, []);

  const translateY = floatAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -15],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/nutrick.png')}
        style={[
          styles.logo,
          {
            transform: [{ translateY }],
          },
        ]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 220,
    height: 220,
  },
});