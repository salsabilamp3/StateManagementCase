import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import USERLIST from '../../_mock/user';

const initialState = {
    users: USERLIST,
    selectedUsers: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleUserSelection: (state, action) => {
            const newSelected = action.payload;
            state.selectedUsers = newSelected;
        },                   
        deleteUser: (state, action) => {
            const nameToDelete = action.payload;
            state.users = state.users.filter((user) => user.name !== nameToDelete);
            state.selectedUsers = state.selectedUsers.filter((user) => user !== nameToDelete);
        },          
    },
});

const persistConfig = {
    key: 'user',
    storage: storageSession,
    whitelist: ['users', 'selectedUsers'],
};

const persistedUserReducer = persistReducer(persistConfig, userSlice.reducer);

export const { toggleUserSelection, deleteUser } = userSlice.actions;
export default persistedUserReducer;
