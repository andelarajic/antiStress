import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native';


export default function YogaFetch() {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('http://localhost:8081/relax/tips')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
  }, []);

  return (
    <View>

      
    </View>
    )
}