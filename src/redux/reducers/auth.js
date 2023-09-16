import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

const actionTypes = {
  SetToken: 'SET_TOKEN',
};

const initialAuthState = {
  token: null,
};

const persistConfig = {
  key: 'AuthenticationForJTK',
  storage: storageSession,
  whitelist: ['token'],
};

const authReducer = (state = initialAuthState, action) => {
  if (action.type === actionTypes.SetToken) {
    const { token } = action.payload;
    return { ...state, token };
  }
  return state;
};

export default persistReducer(persistConfig, authReducer);
