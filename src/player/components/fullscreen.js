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



function FullScreen(props){

    const fullIcon = Platform.select({
        ios: 'ios-expand',
        android: 'md-expand',
      });
    
      const exitFullIcon = Platform.select({
        ios: 'ios-contract',
        android: 'md-contract',
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
           
                <Icon iconName={fullIcon}/>
           
        
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

export default FullScreen