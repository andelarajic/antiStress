import React, { useEffect } from 'react'
import { StyleSheet, Image, View, Button } from 'react-native';
import { Audio } from 'expo-av';
import logo from '../../assets/Relaxing.png';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

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
    } catch (error) { }
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.pauseAsync();
        }
      }
    } catch (error) { }
  };

  const StopAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.stopAsync();
        }
      }
    } catch (error) { }
  };

  const RepeatAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        sound.current.replayAsync();
      }
    } catch (error) { }
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

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.buttons}>
        <AntDesign name="playcircleo" size={32} color="black" onPress={PlayAudio} />
        <AntDesign name="pause" size={32} color="black" onPress={PauseAudio} />
        <Entypo name="controller-stop" size={32} color="black" onPress={StopAudio} />
        <FontAwesome name="repeat" size={32} color="black" onPress={RepeatAudio} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    justifyContent: 'center',

    alignItems: 'center',
  },
  image: {
    paddingBottom: 60
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 90,
  },
  logo: {
    width: 300,
    height: 300,
  }
});