import {
  StyleSheet, Text, SafeAreaView,
  TouchableOpacity, Image, View, Pressable
} from "react-native";




const Card = ({data}) => {

  return (
    <Pressable
      style={styles.card}
      onPress={() => console.log(data.download_url)}>
      <View style={{width: '100%', height: 250}}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={{
            uri: data.download_url,
          }}/>
      </View>
        <Text
          style={styles.author}>
          {data.author}
        </Text>
    </Pressable>
  );
}
export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 10,
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  author: {
    flex: 1,
    fontSize: 25,
    alignSelf: 'center',
    padding: 5,
  },
});

