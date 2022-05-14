import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { RelaxationTip } from '../../model/Relaxation';
import { ChooseTips } from './ChooseTips';

export default function RelaxationTipsFetch() {
  const [data, setData] = useState<RelaxationTip[]>([]);
  console.log(data);

  useEffect(() => {
    fetch('http://localhost:8081/relax/tips')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
  }, []);

  return (
    <View>
      {
        data.map((d, index) => (
          <ChooseTips key={index} tip={d} />
        ))
      }
      
    </View>
    )
}