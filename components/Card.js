import {
  StyleSheet, Text, Image,
  TouchableOpacity, View,
  Animated, Pressable
} from "react-native";
import AnimatedAddition from "react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedAddition";
import {Component} from "react";

class Card extends Component{

  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({value}) => {
      this.value = value;
    })

    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })

    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    })

  }

  flipCard = () => {
    if (this.value >= 90){
      Animated.spring(this.animatedValue,{
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true
      }).start();
    } else {
      Animated.spring(this.animatedValue,{
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true
      }).start();
    }
  }

 render() {
   const frontAnimatedStyle = {
     transform: [
       { rotateY: this.frontInterpolate}
     ]
   }

   const backAnimatedStyle ={
     transform: [
       { rotateY: this.backInterpolate}
     ]
   }
    return (
      <Pressable
        style={styles.container}
        onPress={() => this.flipCard()}>
        <View>
          <Animated.View style={[styles.card, frontAnimatedStyle]}>
              <Image
                style={styles.image}
                resizeMode='cover'
                source={{
                  uri: this.props.data.download_url,
                }}/>
            <Text
              style={styles.author}>
              {this.props.data.author}
            </Text>
          </Animated.View>

          <Animated.View style={[styles.card, styles.back, backAnimatedStyle]}>
            <Text
              style={styles.author}>
              {this.props.data.author}
            </Text>
          </Animated.View>
        </View>
      </Pressable>
    );
 }
}
export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    width: 400,
    height: 300,
    margin: 10,
    marginBottom: 5,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff',
    backfaceVisibility: "hidden",
  },
  image: {
    flex: 9,
    width: '100%',
    height: 250,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  author: {
    flex: 1,
    fontSize: 25,
    padding: 5,
  },
  back: {
    position: "absolute",
  },

});

