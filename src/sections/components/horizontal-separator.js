import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'


function HorizontalSeparator(props){
    return (
        <View style={styles.separator} />
       
    )
}

const styles = StyleSheet.create({
    separator:{
        flex:1,
        marginHorizontal:4,
        flexWrap: 'wrap'
    }
})

export default HorizontalSeparator;