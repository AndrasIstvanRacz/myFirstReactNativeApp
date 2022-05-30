import {FlatList, StyleSheet, Text, View} from "react-native";
import Card from "../components/Card";
import {getData} from "../data/Data";
import {useState, useEffect} from "react";



export default function Cards() {
  const [data, setData] = useState();

  useEffect(() => {
    getData().then(response => {
      setData(response)
    });
  }, []);



  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Card data={item}/>}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardList: {
    flex: 1,
  }
});
