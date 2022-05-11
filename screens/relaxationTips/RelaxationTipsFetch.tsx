import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';


export default function RelaxationTipsFetch() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('http://localhost:8081/relax/tips')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  
  return (
    <View style={{ flex: 1, padding: 24 }}>
    {isLoading ? <Text>Loading...</Text> : 
    ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
        <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
        <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
        <FlatList
          data={data.articles}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.id + '. ' + item.title}</Text>
          )}
        />
      </View>
    )}
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
