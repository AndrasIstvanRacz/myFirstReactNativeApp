import {
  StyleSheet, View,
  Animated, Pressable
} from "react-native";
import {Component} from "react";
import {FlipCardFront} from "./FlipCardFront";
import {FlipCardBack} from "./FlipCardBack";

class FlipCard extends Component {

  constructor(props) {
    super(props);
    this.state = {isFront: true};
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
    if (this.value >= 90) {
      this.setState({isFront: true})
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true
      }).start();
    } else {
      this.setState({isFront: false})
      Animated.spring(this.animatedValue, {
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
        {rotateY: this.frontInterpolate}
      ]
    }

    const backAnimatedStyle = {
      transform: [
        {rotateY: this.backInterpolate}
      ]
    }
    return (
      <Pressable
        style={styles.container}
        onPress={() => this.flipCard()}>
        <View>
          <FlipCardFront
            styles={styles}
            animationStyle={frontAnimatedStyle}
            imgURL={this.props.data.download_url}r
            author={this.props.data.author}/>
          <FlipCardBack
            styles={styles}
            animationStyle={backAnimatedStyle}
            author={this.props.data.author}
            width={this.props.data.width}
            height={this.props.data.height}
            source={this.props.data.url}
            imgURL={this.props.data.download_url}
            isFront={this.state.isFront}/>
        </View>
      </Pressable>
    );
  }

} export default FlipCard;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    back: {
      position: "absolute",
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
  });





