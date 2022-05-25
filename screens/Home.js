import {
  StyleSheet, Text, SafeAreaView,
  TouchableOpacity, ImageBackground
} from "react-native";
import HomeBackground from "../assets/home-background.jpg"


export default function Home ({navigation}) {
  return (
    <SafeAreaView style={styles.container}>

      <ImageBackground
        source={HomeBackground}
        resizeMode="cover"
        style={styles.image}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cards')}>
          <Text style={styles.buttonText}>
            Login
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
    elevation: 20,
    width: "70%",
    bottom: 100
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    padding: 15
  }
});
