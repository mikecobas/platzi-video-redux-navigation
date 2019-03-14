import React , {Component } from 'react'
import{
    TextInput,
    StyleSheet
} from 'react-native'
import API from '../../../utils/api'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation' 

class Search extends Component {
    state={
        text: ''
    }
    handleSubmit = async () =>{
        //console.log(this.state.text)
        const movies = await API.searchMovie(this.state.text);
        console.log(movies)
        
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: movies[0]
            }
        }),
        this.props.dispatch(
            NavigationActions.navigate({
                routeName: 'Movie'
            })
        )
    }

    handleChangeText = (text) => {
        this.setState({
            text
        })
    }

    render(){
        return( 
            <TextInput 
                placeholder='Busca tu película favorita'
                underlineColorAndroid='transparent'
                autoCorrect={false}
                autoCapitalize='none'
                onSubmitEditing={this.handleSubmit}
                onChangeText={this.handleChangeText}
                style={styles.input}
            />
        )
        
    }

}

const styles = StyleSheet.create({
    input:{
        padding:16,
        fontSize:16,
        borderWidth:1,
        borderColor: '#eaeaea'

    }
})

export default connect(null) (Search)