import {
  Platform, StatusBar,
  StyleSheet, TextInput, View
} from "react-native";
import {useState} from "react";


const Header = ({onSearch}) => {

  return (
    <View style={styles.headerContainer}>
      <TextInput
        style={styles.input}
        onChangeText={onSearch}
        placeholder="Author"
      />
    </View>
  )
}
export default Header

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#282c34',
  },
  input: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: 'white',
    borderRadius: 25,
    margin: 10,
    marginBottom: 20,
    padding: 10,
  }
});
