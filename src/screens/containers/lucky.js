import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Search from '../../sections/containers/search';
import Icon from 'react-native-vector-icons/FontAwesome';

class Lucky extends Component {
  static navigationOptions = () => {
    return{
      title: 'Voy a tener suerte',
      drawerIcon: <Icon name="search" size={16} />
    }
  }


  componentDidMount(){
    this.focus =  this.props.navigation.addListener('didFocus', () =>{
      StatusBar.setBarStyle('dark-content')
    }); 
  }
   
  componentWillUnmount(){
    this.focus.remove()
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>ðŸ€</Text>
        <Search />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Lucky
