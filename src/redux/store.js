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

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import themeReducer from './theme/theme-slice';
// import boardReducer from './board/boardSlice';
import authReducer from './auth/authSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    // board: boardReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
