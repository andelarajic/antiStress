import React, { useRef } from 'react'
import { StyleSheet, Text, View,  Dimensions, Animated, Button } from 'react-native';
import { Audio } from 'expo-av';

const { width, height } = Dimensions.get("window");
const circleWidth = width / 2;

export const BreathingAnimation = () => {
    const move = useRef(new Animated.Value(0)).current;
    const textOpacity = useRef(new Animated.Value(1)).current;
    const [sound, setSound] = React.useState<Audio.Sound>();
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(textOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(move, {
            toValue: 1,
            duration: 4000,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(textOpacity, {
            delay: 100,
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(move, {
            delay: 1000,
            toValue: 0,
            duration: 4000,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
    const translate = move.interpolate({
      inputRange: [0, 1],
      outputRange: [0, circleWidth / 6],
    });
    const exhale = textOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    });

    async function playSound() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(
         require('../../assets/Breathing.mp3')
      );
      setSound(sound);
  
      console.log('Playing Sound');
      await sound.playAsync(); }

      React.useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync(); }
          : undefined;
      }, [sound]);

    return (
      <View style={styles.container}>
            <View style={styles.container}>
          <Button title="Play Sound" onPress={playSound} />
        </View>
        <Animated.View
          style={{
            width: circleWidth,
            height: circleWidth,
            ...StyleSheet.absoluteFill,
            alignItems: "center",
            justifyContent: "center",
            opacity: textOpacity,
            left: width / 4,
            top: height / 4, 
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Inhale
          </Text>
        </Animated.View>
        <Animated.View
          style={{
            width: circleWidth,
            height: circleWidth,
            ...StyleSheet.absoluteFill,
            left: width / 4,
            top: height / 4, 
            alignItems: "center",
            justifyContent: "center",
            opacity: exhale,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Exhale
          </Text>
        </Animated.View>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => {
          const rotation = move.interpolate({
            inputRange: [0, 1],
            outputRange: [`${item * 45}deg`, `${item * 45 + 180}deg`],
          });
          return (
            <Animated.View
              key={item}
              style={{
                opacity: 0.1,
                backgroundColor: "blue",
                width: circleWidth,
                height: circleWidth,
                borderRadius: circleWidth / 2,
                ...StyleSheet.absoluteFill,
                left: width / 4,
                top: height / 4, 
                transform: [
                  {
                    rotateZ: rotation,
                  },
                  { translateX: translate },
                  { translateY: translate },
                ],
              }}
            ></Animated.View>
          );
        })}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
   backgroundColor: "#ffff",
    },
  });