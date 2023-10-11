import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage';
import { BrowserRouter } from 'react-router-dom';
import popularMoviesApi from './redux/PopularMovies';
import { MovieReducer } from './redux/SingleMovie';
import { FavouritesReducer } from './redux/Favourites';

const persistConfig = {
  key: 'root',
  version: 1,
  whitelist: ['TheMovie', 'FavouritesArray'],
  storage,
}
const reducer=combineReducers({
  TheMovie: MovieReducer,
  FavouritesArray: FavouritesReducer,
  [popularMoviesApi.reducerPath]:popularMoviesApi.reducer
})
const thePersisReducer = persistReducer(persistConfig, reducer)
const store = configureStore({
  reducer: thePersisReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(popularMoviesApi.middleware),})
const persistor = persistStore(store)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ApiProvider api={popularMoviesApi}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
      </PersistGate>
      </Provider>
    </ApiProvider>
  </BrowserRouter>
);


reportWebVitals();
