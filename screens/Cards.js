import {FlatList, SafeAreaView, StatusBar} from "react-native";
import Card from "../components/Card";
import {getData} from "../data/Data";
import {useState, useEffect} from "react";
import Header from "../components/Header";


export default function Cards() {
  const [data, setData] = useState();

  useEffect(() => {
    getData().then(response => {
      setData(response)
    });
  }, []);

  const handelSearch =(author)=>{
    console.log(author)
  }

  return (
    <SafeAreaView>
      <StatusBar hidden={false} backgroundColor={'#282c34'}/>
      <Header onSearch={handelSearch}/>
      <FlatList
        data={data}
        renderItem={({item}) => <Card data={item}/>}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}/>
    </SafeAreaView>
  );
}
