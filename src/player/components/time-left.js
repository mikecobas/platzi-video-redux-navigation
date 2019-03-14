import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

function TimeLeft(props){
  return(
    <View>
      <Text style={styles.time}>{props.currentTime} / {props.duration} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  time: {
    color: 'white',
    fontSize: 11,
    paddingLeft:8,
    paddingRight:8
  }
})

export default TimeLeft;