import {Animated, ImageBackground, Text} from "react-native";

export const FlipCardFront = ({styles, imgURL, author, animationStyle}) => {
  return (
    <Animated.View style={[styles.card, animationStyle]}>
      <ImageBackground
        source={{uri: imgURL}}
        resizeMode="cover"
        style={{
          height: '100%',
          width: '100%',
          alignItems: "flex-end",
          justifyContent: "flex-end"}}
        imageStyle={{ borderRadius: 8}}>
        <Text
          style={{color: "white", margin: 5}}>
          by {author}
        </Text>
      </ImageBackground>
    </Animated.View>
  );
}
