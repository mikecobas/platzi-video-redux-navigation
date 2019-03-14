import React, { Component } from 'react';
import {
    FlatList,
    Text
} from 'react-native'

import Layout from '../../screens/components/suggestion-list-layout'
import Empty from '../../screens/components/empty'
import Separator from '../../screens/components/vertical-separator'
import Suggestion from '../../screens/components/suggestion'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

function mapStateToProps(state){
 return {
     list: state.videos.suggestionList
 }
}


class SuggestionList extends Component {
    renderEmpty = () => <Empty text="No hay sugerencias :(" />
    itemSeparator = () => <Separator />
    viewMovie = (item) =>{
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: item,  
            }
        })
        this.props.dispatch(
            NavigationActions.navigate({
                routeName: 'Movie'
            })
        )
    }
    renderItem = ({item}) =>{
        return (
            <Suggestion 
                {...item} 
                onPress={()=> {this.viewMovie(item)}}

            />
        )
    } 
    keyExtractor = (item) => item.id.toString()

    render() {
       
        return (
            <Layout 
             title='Recomendado para ti'
            >
             <FlatList
                keyExtractor={this.keyExtractor}
                data={this.props.list}
                ListEmptyComponent={this.renderEmpty}
                ItemSeparatorComponent={this.itemSeparator}
                renderItem= {this.renderItem}
             />
            </Layout>
           
        )
    }

}

export default connect(mapStateToProps) (SuggestionList)