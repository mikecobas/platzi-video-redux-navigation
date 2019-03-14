import React , { Component } from 'react'
import MovieLayout from '../components/movie'
import Player from '../../player/containers/player'
import Header from '../components/header'
import Close from '../../sections/components/close'
import Details from '../../videos/components/details'
import {connect} from 'react-redux'
import {
    Animated,
    StatusBar,
    SafeAreaView
} from 'react-native'

class Movie extends Component {
    static navigationOptions = ({ navigation }) =>{
        return {
            header: (
                <Header>
                        <Close 
                            onPress={() => { navigation.goBack() }}
                        />
                    </Header> 
            ),
            
        }
    }
    state={
        opacity: new Animated.Value(0),
    }
    closeVideo = () =>{
         this.props.dispatch({
             type:'SET_SELECTED_MOVIE',
             payload:{
                 movie: null,
             }
         })
    }
   componentDidMount(){
        Animated.timing(
            this.state.opacity,
            {
                toValue: 1,
                duration: 1000,
            }
        ).start();

         this.focus = this.props.navigation.addListener('didFocus', () =>{
              StatusBar.setBarStyle('dark-content')
            }); 
        
   }

   componentWillUnmount(){
    this.focus.remove()
  }
    render(){
       return(
            <SafeAreaView>
                <MovieLayout >
                    
                    <Details  {...this.props.movie}/>
                </MovieLayout>

            </SafeAreaView>
                
        
       ) 
    }
}

function mapStateToProps(state){ 
    return{
        movie: state.videos.selectedMovie
    }
    
}

export default connect(mapStateToProps) (Movie)