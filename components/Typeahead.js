import { Text, StyleSheet, TouchableOpacity, Image, Linking} from 'react-native'
import React from 'react'

const Typeahead = (props) => {

  return (
    <TouchableOpacity style={styles.touchableStyle} onPress={() => Linking.openURL(props.redirect)}>
      <Image source={{uri: props.url}} style={styles.imageStyle}/>
      <Text style={styles.textStyle}>{props.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchableStyle: {
    margin: 15,
    alignItems: "center"
  },
  imageStyle: {
    width: 90,
    height: 90,
    borderRadius: 80,
    borderColor: "white",
    borderWidth: 2,
  },
  textStyle: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold"
  }
})

export default Typeahead