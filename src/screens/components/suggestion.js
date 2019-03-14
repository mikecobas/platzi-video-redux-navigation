import React from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

function Suggestion(props) {
    return (
        <TouchableOpacity

            onPress={props.onPress}
        >
        
            <View style={styles.container}>
                <View style={styles.left}>
                <Image
                    style={styles.cover}
                    source={{
                        uri:   props.medium_cover_image
                    }}
                /> 
                <View style={styles.genre}>
                    <Text style={styles.genreText}>
                        {props.genres[0]}
                    </Text>
                </View>
                
                </View>  
                <View style={styles.right}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.year}>{props.year}</Text>
                    <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>{props.rating} / 10  </Text>
                    <Icon name="star" size={16} color="#ffd700" />
                    </View>
                </View>  
            </View>  
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    cover:{
        height:150,
        width:100,
        resizeMode:'contain'
    },
    genre:{
        position:'absolute',
        left:0,
        top:0,
        backgroundColor: 'black'
    },
    genreText:{
        color: 'white',
        fontSize: 11,
        paddingVertical:5,
        paddingHorizontal:7
    },
    right:{
        paddingLeft:10,
        justifyContent:'space-between'
    },
    title:{
        fontSize:18,
        color: '#44546b'
    },
    year:{
        backgroundColor: '#70b125',
        paddingVertical: 4,
        color: '#fff',
        fontSize:11,
        borderRadius: 5,
        overflow: 'hidden',
        paddingHorizontal: 6,
        alignSelf: 'flex-start'
    },
    ratingContainer:{
        flexDirection:'row'
    },
    rating:{
        color: '#6b6b6b',
        fontSize:14,
        fontWeight: 'bold',

    }
})

export default Suggestion