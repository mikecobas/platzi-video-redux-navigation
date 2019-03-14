import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView
} from 'react-native'

function Header(props) {
    return (
        <View>
            <SafeAreaView style={styles.statusBar}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../../assets/logo.png')}
                        style={styles.logo}
                    />
                    <View style={styles.right}>
                    {props.children}
                </View>
                </View>
                
           
            </SafeAreaView>
       
        </View>
    )
}

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: 'white',
    },
    logoContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row'
    },
    logo: {
        width: 80,
        height: 26,
        resizeMode: 'contain',
    },
    right:{
       
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end'

    }

})

export default Header;