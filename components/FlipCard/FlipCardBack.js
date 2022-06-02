import {Animated, Text, ImageBackground, Linking} from "react-native";

export const FlipCardBack = ({styles, author, width,
                           height, source, imgURL,
                           animationStyle, isFront}) => {

  return (
    <Animated.View style={[styles.card, styles.back, animationStyle]}>
      <ImageBackground
        source={{uri: imgURL}}
        resizeMode="cover"
        style={{
          height: '100%',
          width: '100%',
          alignItems: "center"}}
        imageStyle={{ borderRadius: 8, opacity: 0.4}}
        blurRadius={25}>
        <Text style={{marginTop: 25, marginBottom: 3, fontWeight: "bold"}}>
          Made by
        </Text>
        <Text style={{marginBottom: 15, fontSize: 15}}>
          {author}
        </Text>
        <Text style={{marginBottom: 3, fontWeight: "bold"}}>
          Size
        </Text>
        <Text style={{marginBottom: 15, fontSize: 15}}>
          {height}×{width}
        </Text>
        <Text style={{marginBottom: 3, fontWeight: "bold"}}>
        Source
        </Text>
        <Text
          style={isFront ? {
            fontSize: 15,
            textDecorationStyle: "solid",
            textDecorationLine: "underline"}
            :
          {display: "none"}}
          onPress={() => Linking.openURL(source)}>
          {source}
        </Text>
      </ImageBackground>
    </Animated.View>
  );
}

