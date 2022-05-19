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
            <Text style={styles.text}>{props.text}</Text>
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
    backgroundColor: "#99badd",
margin: 10,
    borderRadius: 30, 
    alignItems: "center",
    height: 100,
    padding:10,
    opacity: 0.8
  },
  image: {
    flexDirection: "row",
    height: 60,
    width:120,
    padding: 20,
    borderRadius: 60, 
    marginRight: 10,
  },
  text: {
    flexDirection: "row",
    fontSize: 20,
    color: "white",
    textAlignVertical: "center"


  },
});