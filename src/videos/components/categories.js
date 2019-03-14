import React from 'react'
import {
    StyleSheet,
    Text,
    ImageBackground,
    TouchableOpacity
} from 'react-native'

function Category(props) {
    


    return (
        <TouchableOpacity
            onPress={props.onPress}
        >
            <ImageBackground
                style={styles.wrapper}
                defaultSource={require('../../../assets/no-image.jpg')}
                source={{
                    uri: props.medium_cover_image
                }}
            >
                <Text style={styles.genre}>{props.genres[0]}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        width: 250,
        height:100,
        borderRadius:10,
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center'
    },
    genre: {
        color:'#fff',
        fontSize:36,
        fontWeight:'bold',
        textShadowOffset:{
            width: 2,
            height:2,
        },
        textShadowRadius:4,
        textShadowColor: 'rgba(0,0,0,0.5 )'

    }
})

export default Category;