import React from 'react'
import { StyleSheet, Image, View, Button } from 'react-native';
import { Audio } from 'expo-av';
import logo from '../../assets/pppp.jpeg'

export const RelaxationSound = () => {
    const [sound, setSound] = React.useState<Audio.Sound>();

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
           require('../../assets/ForestSound.mp3')
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
  
        const styles = StyleSheet.create({
          container: {
            paddingTop: 50,
          },
          tinyLogo: {
            width: 200,
            height: 50,
          },
          logo: {
            width: 66,
            height: 58,
          },
        });

        return (
            <View style={styles.container}>
                <Button title="Play Sound" onPress={playSound} />
                <Image style={styles.tinyLogo} source={logo} />
              
              </View>
                );
            }

            const styles = StyleSheet.create({
                container: {
                  flex: 1,
               backgroundColor: "#ffff",
                },
              });