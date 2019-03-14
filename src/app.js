import React, { Component } from 'react'
import {
    Text,
    SafeAreaView
  
  } from 'react-native';
import {connect} from 'react-redux' 


import Home from './screens/containers/home'
import Header from './screens/components/header'
import SuggestionList from './videos/containers/suggestions-list'
import API from '../utils/api'
import CategoriesList from './videos/containers/categories-list'
import Movie from './screens/containers/movie'
import Search from './sections/containers/search'



class  AppLayout extends Component {
    async componentDidMount(){
    
        const categoriesList = await API.getMovies();
        this.props.dispatch({
          type: 'SET_CATEGORY_LIST', //nombre de la accion
          payload: {
            categoriesList
          }
        })
        /* console.log(categories);
    
       this.setState({
          suggestionList: movies,
          categoriesList: categories,
        })*/
        
        const suggestionList = await API.getSuggestion(10);
        this.props.dispatch({
          type: 'SET_SUGGETION_LIST', //nombre de la accion
          payload: {
            suggestionList
          }
        })
      }
    render(){
        if (this.props.selectedMovie){
            return(
                <Movie/>
            )
        }
        return(
            <Home>
              <Header/>
              <Search/>
                  <CategoriesList />
              <SuggestionList />
            </Home>

        )
    }
}

function mapStateToProps(state){
    return{ 
        selectedMovie: state.selectedMovie,
    }
}

export default connect(mapStateToProps) (AppLayout)