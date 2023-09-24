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
### 1. Menambahkan properties di UserListToolbar
Pada UserListBar ditambahkan properties dataSelected yang berupa array. dataSelected didapatkan dari UserPage.js yang merupakan array berisi name yang dipilih (checked pada checkbox)
```javascript
UserListToolbar.propTypes = {
  numSelected: PropTypes.number,
  dataSelected: PropTypes.array,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};
...
navigate('/dashboard/user-detail', { state: { dataSelected } });
```

### 2. Menampilkan Detail Selected Data 
Pada UserPageDetail, state dataSelected dicocokkan dengan data user dari USERLIST untuk mendapatkan detail data yang lainnya dan ditampilkan.
```javascript
const location = useLocation();
  const { dataSelected } = location.state;
  const matchingUsers = [];

  // matching dataSelected with USERLIST
  dataSelected.forEach((data) => {
    USERLIST.forEach((user) => {
      if (user.name === data) {
        matchingUsers.push(user);
      }
    });
  });
```

### 3. Menyimpan array selected 
Untuk menjaga agar data selected di User Page, array dari data selected disimpan di local storage agar ketika go back data selected tetap ada.
 ```javascript
  ...
  localStorage.setItem('selected', JSON.stringify(newSelected));
useEffect(() => {
    const savedSelected = JSON.parse(localStorage.getItem('selected'));

    if (savedSelected) {
      setSelected(savedSelected);
    }
  }, []);

   // Tambahkan useEffect untuk mereset penyimpanan saat halaman di-refresh
   useEffect(() => {
    window.addEventListener('beforeunload', () => {
      // Hapus status pemilihan dan pengurutan dari localStorage saat halaman di-refresh
      localStorage.removeItem('selected');
    });

    return () => {
      window.removeEventListener('beforeunload', () => {
        // Hapus status pemilihan dan pengurutan dari localStorage saat halaman di-refresh
        localStorage.removeItem('selected');
      });
    };
  }, []);
```

# Hasil
![image](https://github.com/salsabilamp3/StateManagementCase/assets/95154453/255046b6-fdec-405c-9d14-7dbdb5c998f5)

![image](https://github.com/salsabilamp3/StateManagementCase/assets/95154453/21494a07-fbbd-4a07-89e4-b2bcca0cee0b)
