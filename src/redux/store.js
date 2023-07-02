import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist/es/constants';
import themeReducer from './theme/theme-slice';
// import setTheme from '../redux/auth/authSlice';
import { authReducer } from './auth/authSlice';
import sidebarReducer from './sidebar/sidebarSlice';
import { boardsListReducer } from './boards-list/boardsListSlice';

import { boardReducer } from './board/boardSlice';

const persistConfig = {
  key: 'root',
  // key: 'auth',
  storage,
  // whitelist: ['auth'], // Specify the reducers to be persisted
  // whitelist: ['token'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    theme: themeReducer,
    auth: authReducer,
    sidebar: sidebarReducer,
    boardsList: boardsListReducer,
    board: boardReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
