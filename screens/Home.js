import {
  StyleSheet, Text, SafeAreaView,
  TouchableOpacity, ImageBackground, StatusBar
} from "react-native";
import HomeBackground from "../assets/home-background.jpg"


export default function Home ({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>
      <ImageBackground
        source={HomeBackground}
        resizeMode="cover"
        style={styles.image}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cards')}>
          <Text style={styles.buttonText}>
            Continue
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  button: {
    backgroundColor: "#a12d2d",
    alignItems: "center",
    borderRadius: 8,
    width: "70%",
    bottom: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    padding: 15
  }
});
