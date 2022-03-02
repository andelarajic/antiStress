import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text, Image, View, StyleSheet, ImageSourcePropType } from 'react-native';

interface Props {
  destination: string
  text: string
  image: ImageSourcePropType
}

export default function NavButton(props: Props) {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity
      //@ts-ignore
        onPress={() => navigation.navigate(props.destination)}
      >
        <View style={{flexDirection: 'row', width: '100%' , justifyContent: "space-between"}}>
          <View style={{width: '50%', alignItems:"flex-start"}}>
            <Text>{props.text}</Text>
          </View>
          <View style={{width: '50%', alignItems:"flex-end"  }}>
            <Image style={styles.image} source={props.image} /> 
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

  },
  image: {
    flexDirection: "row",
    height: 100,
    width: 100,
 
  },
  text: {
    flexDirection: "row",
  },
});