import React from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native'

import Icon from '../../icons/components/icon';

function Close(props){
    const closeIcon = Platform.select({
        ios: 'ios-close',
        android: 'md-close',
      });
    return(
        <TouchableOpacity
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
        
            <Icon iconColor={"black"} iconName={closeIcon} iconSize={20}/>
       
        
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:  {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
    container:  {
        //backgroundColor:'#14b739',
        borderRadius:50,
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 30,
        marginRight: 10,
        marginVertical: 5,
       
        
    }
})
export default Close