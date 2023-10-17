import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage';
import { BrowserRouter } from 'react-router-dom';
import { MovieReducer } from './redux/SingleMovie';
import { FavouritesReducer } from './redux/Favourites';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


  const client=new QueryClient()


const persistConfig = {
  key: 'root',
  version: 1,
  whitelist: ['TheMovie', 'FavouritesArray'],
  storage,
}
const reducer=combineReducers({
  TheMovie: MovieReducer,
  FavouritesArray: FavouritesReducer,
  
})

const thePersisReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: thePersisReducer,
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware({
    serializableCheck:false
  })
})
const persistor = persistStore(store)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
      </PersistGate>
      </Provider>
  </BrowserRouter>
  </QueryClientProvider>
);


reportWebVitals();
