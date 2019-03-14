import React , { Component } from 'react'

import {
    View,
    FlatList,

} from 'react-native'
import Layout from '../../screens/components/category-list-layout'
import Empty from '../../screens/components/empty'
import Separator from '../../sections/components/horizontal-separator'
import Category from '../components/categories'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

function mapStateToProps(state){
 return {
     list: state.videos.categoriesList
 }
}

class CategoryList extends Component {
    renderEmpty = () => <Empty text="No hay categorias :(" />
    itemSeparator = () => <Separator />
    viewCategory = (item) => {
        this.props.dispatch(
            NavigationActions.navigate({
                routeName: 'Category',
                params: {
                    genre: item.genres[0]
                }
            })
        )
    }
    renderItem = ({item   }) =>{
        return (
            <Category 
            {...item} 
            onPress={() => { this.viewCategory(item)}}
            />
        )
    } 
    keyExtractor = (item) => item.id.toString()
    
    render(){
        return (
            <Layout 
            title='Categorias'
           >
            <FlatList 
               horizontal
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

export default connect(mapStateToProps) (CategoryList)