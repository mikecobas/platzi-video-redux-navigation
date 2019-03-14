import {
    createStore,
    applyMiddleware,

} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducer/index'
import {
    
    createReactNavigationReduxMiddleware

} from 'react-navigation-redux-helpers'

/*const store = createStore(reducer,{
    suggestionList: [],
    categoriesList: []
})*/

const persistConfig = {
    key: 'root',
    storage,
    blacklist:['navigation']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const navigationMiddleware = createReactNavigationReduxMiddleware(
    state => state.navigation //aqui va la configuración o nombre del reducer de la navegación en index.js
)

const store = createStore(
    persistedReducer,
    applyMiddleware(navigationMiddleware)
    
    )
const persistor = persistStore(store)

export {store, persistor}