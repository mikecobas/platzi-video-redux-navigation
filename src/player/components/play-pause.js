import React from 'react'
import {
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Text,
    StyleSheet,
    Platform

} from 'react-native'
import Icon from '../../icons/components/icon';



function PlayPause(props){

    const playIcon = Platform.select({
        ios: 'ios-play',
        android: 'md-play',
      });
    
      const pauseIcon = Platform.select({
        ios: 'ios-pause',
        android: 'md-pause',
      });

    return(
        <TouchableHighlight
            onPress={props.onPress}
            style={styles.container}
            underlayColor='white'
            hitSlop={{
                left:5,
                top:5,
                bottom:5,
                right:5,
            }}
        >
            {
                props.paused ?
                <Icon iconName={playIcon}/>
                :
                <Icon iconName={pauseIcon}/>
            }
       
        
        </TouchableHighlight>      
    )
}

const styles = StyleSheet.create({
    button:  {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },
    container:  {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 30,
        marginRight: 10,
        marginVertical: 5,
       
        
    }
})

export default PlayPause