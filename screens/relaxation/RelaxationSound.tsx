import React, { useRef } from 'react'
import { StyleSheet, Text, View,  Dimensions, Animated, Button } from 'react-native';
import { Audio } from 'expo-av';

export const RelaxationSound = () => {
    const [sound, setSound] = React.useState<Audio.Sound>();

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
                <Button title="Play Sound" onPress={playSound} />
              </View>
                );
            }

            const styles = StyleSheet.create({
                container: {
                  flex: 1,
               backgroundColor: "#ffff",
                },
              });