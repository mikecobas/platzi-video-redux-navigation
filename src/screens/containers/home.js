import React, { Component, Fragment } from 'react'
import {
    StatusBar
  } from 'react-native';
import {connect} from 'react-redux' 



import Header from '../components/header'
import SuggestionList from '../../videos/containers/suggestions-list'
import API from '../../../utils/api'
import CategoriesList from '../../videos/containers/categories-list'
import Movie from '../containers/movie'
import Search from '../../sections/containers/search'
import Icon from 'react-native-vector-icons/FontAwesome';



class  Home extends Component {
    static navigationOptions = () =>{
        return {
            header: Header,
            drawerIcon: <Icon name="home" size={16} />
        }
    }
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
       
          this.focus = this.props.navigation.addListener('didFocus', () =>{
            StatusBar.setBarStyle('dark-content')
            StatusBar.setBackgroundColor('white')
          }); 
        
      }
      componentWillUnmount(){
        this.focus.remove()
      }
    render(){
        
        return(
            <Fragment>
              <Search/>
                  <CategoriesList />
              <SuggestionList />
            </Fragment>

        )
    }
}


export default connect(null) (Home)