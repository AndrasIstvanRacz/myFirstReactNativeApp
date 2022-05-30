import {FlatList, SafeAreaView, StatusBar} from "react-native";
import Card from "../components/Card";
import {getData} from "../data/Data";
import {useState, useEffect} from "react";
import Header from "../components/Header";


export default function Cards() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getData().then(response => {
      setData(response)
      setFilteredData(response)
    });
  }, []);

  const handelSearch = (author) => {
    console.log(author)
    setFilteredData(
      data.filter((value) => value.author
        .toLowerCase()
        .includes(author.toLowerCase())
      )
    )
  }

  return (
    <SafeAreaView>
      <StatusBar hidden={false} backgroundColor={'#282c34'}/>
      <Header onSearch={handelSearch}/>
      <FlatList
        contentContainerStyle={{paddingBottom: 100}}
        data={filteredData}
        renderItem={({item}) => <Card data={item}/>}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}/>
    </SafeAreaView>
  );
}
