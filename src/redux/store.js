// import { configureStore } from '@reduxjs/toolkit';

// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// // import boardReducer from './board/boardSlice';

// import themeReducer from './theme/theme-slice';

// export const store = configureStore({
//   reducer: {
//     theme: themeReducer,
//     // board: boardReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

// export default store;









// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import themeReducer from './theme/theme-slice';
// // import boardReducer from './board/boardSlice';
// import authReducer from './auth/authSlice';
// import sidebarReducer from './sidebar/sidebarSlice';
// import { boardsListReducer } from './boards-list/boardsListSlice';

// export const store = configureStore({
//   reducer: {
//     theme: themeReducer,
//     // board: boardReducer,
//     auth: authReducer,
//     sidebar: sidebarReducer,
//     boardsList: boardsListReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

// export default store;

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

const persistConfig = {
  key: 'root',
  // key: 'auth',
  storage,
  whitelist: ['auth'], // Specify the reducers to be persisted
  // whitelist: ['token'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    theme: themeReducer,
    auth: authReducer,
    sidebar: sidebarReducer,
    boardsList: boardsListReducer,
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
