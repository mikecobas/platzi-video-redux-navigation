import React from 'react'
import { 
    createStackNavigator, 
    createAppContainer, 
    createBottomTabNavigator, 
    createSwitchNavigator, 
    createDrawerNavigator } from 'react-navigation'
import Home from './screens/containers/home'
import Movie from './screens/containers/movie'
import Category from './screens/containers/category'
import Header from  './screens/components/header'
import About from  './screens/containers/about'
import Profile from  './screens/containers/profile'
import Lucky from  './screens/containers/lucky'
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from  './screens/containers/login'
import Loading from  './screens/containers/loading'
import Drawer from './sections/components/drawer'


const Main = createStackNavigator(
    {
        Home: Home,
        Category: Category
    },
    {
        defaultNavigationOptions:{
            header: Header,
        }
    }
)

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Main,
            navigationOptions:{
                title:'Inicio',
                tabBarIcon: <Icon name="home" size={16} />, 
            }
        },
        About: {
            screen: About,
            navigationOptions:{
                title:'Acerca',
                tabBarIcon: <Icon name="about" size={16} />, 
            }
        },
        Lucky: {
            screen: Lucky,
            navigationOptions:{
                title:'Buscar',
                tabBarIcon: <Icon name="search" size={16} />, 
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions:{
                title:'Perfil',
                tabBarIcon: <Icon name="user" size={16} />, 
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: 'white',
            activeBackgroundColor: '#65a721'
        }
    }
) 

const WidthModal = createStackNavigator(
        {   
            Main: {
                screen: TabNavigator
            },
            Movie: Movie,
        },
        {
            mode: 'modal',
            headerMode: 'none',
            navigationOptions:{
                gesturesEnabled: true,
            }
        }
    )

const DrawerNavigator = createDrawerNavigator(
    {
        Main: {
            screen: WidthModal,
            navigationOptions:{
                title:'Inicio',
                drawerIcon: <Icon name="home" size={16} />, 
            }
        },
        Sobre: {
            screen: About
        },
        Suerte:{
            screen: Lucky
        }   
    },
    {
        drawerWidth: 200,
        drawerBackgroundColor: '#f6f6f6',
        contentComponent:Drawer,
        contentOptions: {
            activeBackgroundColor: '#65a721',
            activeTintColor: 'white',
            inactiveTintColor: '#828282',
            inactiveBackgroundColor: 'white',
            itemStyle:{
                borderBottomWidth: .5,
                borderBottomColor: 'rgba(0,0,0,0,.5)'
            },
            labelStyle:{
                marginHorizontal: 0
            },
            iconContainerStyle: {
                marginHorizontal: 5
            }
        }
    }
) 
const SwitchNavigator = createSwitchNavigator(
    {
        Loading: Loading,
        App: DrawerNavigator,
        Login: Login
    },
    {
        initialRouteName: 'Loading',
    }
)

export default createAppContainer(SwitchNavigator);