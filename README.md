# Field Case Studies [(Padepokan Tujuh Sembilan)](https://minimal-kit-react.vercel.app/)

![Technology](https://img.shields.io/badge/Technology-React.js-blue)

# Show All Selected User Information on Detail Page (State Management)
State management berfungsi untuk me-manage state terpusat untuk memanipulasi dan mengelola state sesuai kebutuhan.
![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green)

Problem

> Pada Screen User terdapat Table dengan `Data User` (Client-Side Pagination) dimana pada page tersebut terdapat masalah untuk menampilkan keseluruhan detail informasi semua user yang telah di `Checklist` pada kolom Checkbox, yang nantinya akan ditampilkan pada `Page User Detail`.

DoD

> Pada `Page User Detail` seluruh `Informasi User` yang sudah di `Checklist` pada halaman user, dapat ditampilkan semuanya.

# Solusi Penyelesaian
### 1. Menambahkan Reducer
Membuat reducer untuk list users dan selected users dengan menambahkan file users.js di folder reducer agar state bisa diakses secara global.
```javascript
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
```

### 2. Menambahkan reducers users di store.js 
Reducer users ditambahkan pada store agar bisa diakses di semua komponen
```javascript
const rootReducer = combineReducers({ 
  auth: authReducer,
  user: userReducer,
});
```

### 3. Membaca data dengan useSelector di user page
Pada user page perlu menampilkan list user dan bisa memilih data user dengan checkbox, list user dan selected user disimpan dalam state global dan bisa diakses dengan menggunakan useSelector.
 ```javascript
  const users = useSelector((state) => state.user.users);
  const selectedUsers = useSelector((state) => state.user.selectedUsers);
```

### 4. Merubah state dengan useDispatch
Pada user page, untuk merubah isi dari selected users digunakan useDispatch agar bisa mengakases action yang tersedia untuk merubah state yang sudah didefinisikan di reducer.
```javascript
const dispatch = useDispatch();
...
const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.name);
      dispatch(toggleUserSelection(newSelecteds));
      return;
    }
    dispatch(toggleUserSelection([]));
  };
```

### 5. Mengakses selected users di user page detail
Sama seperti di user page, state users dan selected users diakses di user detail page dengan useSelector
```javascript
const selectedUsers = useSelector((state) => state.user.selectedUsers);
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const matchingUsers = [];

  selectedUsers.forEach((data) => {
    users.forEach((user) => {
      if (user.name === data) {
        matchingUsers.push(user);
      }
    });
  });
```

### 6. Menghapus data di user page detail
Sama seperti select user di user page, untuk menghapus data sudah didefinisikan action-nya di reducer dan dipanggil di user page detail dengan bantuan useDispatch.
```javascript
const handleDeleteUser = (name) => {
    dispatch(deleteUser(name));
  };
```

# Hasil
#### 1. Select users
![image](https://github.com/salsabilamp3/StateManagementCase/assets/95154453/65ba4f17-cdc3-4b11-83d4-f08b2f0177f4)

#### 2. Display selected user detail
![image](https://github.com/salsabilamp3/StateManagementCase/assets/95154453/48dc046b-8414-4430-a09f-21b6a265a21a)

#### 3. Delete user in user detail page
![image](https://github.com/salsabilamp3/StateManagementCase/assets/95154453/240e2f3a-48dc-4a75-a047-4cbbb62ffc3b)

#### 4. Go back page, 1 row deleted, the rest still selected
![image](https://github.com/salsabilamp3/StateManagementCase/assets/95154453/133bbef4-f84c-4547-8dc7-4120554be48c)
