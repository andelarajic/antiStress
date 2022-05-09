import React, { useEffect } from 'react'
import { StyleSheet, Image, View, Button } from 'react-native';
import { Audio } from 'expo-av';
import logo from '../../assets/Relaxing.png'


//const SampleTrack = require('../../assets/ForestSound.mp3');
const SampleTrack = require('../../assets/Breathing.mp3');

export const RelaxationSound = () => {
  const [Loaded, SetLoaded] = React.useState(false);
  const [Loading, SetLoading] = React.useState(false);
  const sound = React.useRef(new Audio.Sound());

  React.useEffect(() => {
    LoadAudio();
  }, []);

  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.current.playAsync();
        }
      }
    } catch (error) {}
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.pauseAsync();
        }
      }
    } catch (error) {}
  };

  const StopAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.stopAsync();
        }
      }
    } catch (error) {}
  };

  const RepeatAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        sound.current.replayAsync();
      }
    } catch (error) {}
  };

  const LoadAudio = async () => {
    SetLoading(true);
    const checkLoading = await sound.current.getStatusAsync();
    if (checkLoading.isLoaded === false) {
      try {
        const result = await sound.current.loadAsync(SampleTrack, {}, true);
        if (result.isLoaded === false) {
          SetLoading(false);
          console.log('Error in Loading Audio');
        } else {
          SetLoading(false);
          SetLoaded(true);
        }
      } catch (error) {
        console.log(error);
        SetLoading(false);
      }
    } else {
      SetLoading(false);
    }
  };



/*
  const [sound, setSound] = React.useState<Audio.Sound>();

  useEffect(() => {

  }, [])

  async function initSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/ForestSound.mp3')
    );
    setSound(sound);
  }

  async function playSound() {
    console.log('Playing Sound');
    await sound?.playAsync();
  }

  async function stopSound() {
    
  }


  React.useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  */

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={PlayAudio} />
      <Button title="Pause Sound" onPress={PauseAudio} />
      <Button title="Stop Sound" onPress={StopAudio} />
      <Button title="Repeat Sound" onPress={RepeatAudio} />
      <Image style={styles.logo} source={logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingTop: 50
  },
  logo: {
    width: 300,
    height: 300,
  }
});