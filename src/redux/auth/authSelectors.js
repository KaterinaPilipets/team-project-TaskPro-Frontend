export const setToken = state => state.auth.token;


export const setName = state => state.auth.user.name;

export const setColorTheme = state => state.auth.user.theme;

export const activeBoard = state => state.auth.user.activeBoard;

export const avatarURL = state => state.auth.user.avatarURL;

export const isLoggedIn = state => state.auth.isLoggedIn;

export const isRefreshing = state => state.auth.isRefreshing;

export const getTheme = state => state.auth.user.theme;

