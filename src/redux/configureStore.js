
// import devTools from "remote-redux-devtools";

import { createStore,combineReducers } from 'redux';
import setState from './reducers/setState';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({

   setState:setState

});


const persistedReducer = persistReducer(persistConfig, rootReducer)
export default () => {
  let store = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  let persistor = persistStore(store)
  return { store, persistor }
}




