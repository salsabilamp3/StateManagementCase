# Field Case Studies [(Padepokan Tujuh Sembilan)](https://minimal-kit-react.vercel.app/)

![Technology](https://img.shields.io/badge/Technology-React.js-blue)

## `Getting started`

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## `Case Study`

## 1. Show All Selected User Information on Detail Page (State Management)
State management berfungsi untuk me-manage state terpusat untuk memanipulasi dan mengelola state sesuai kebutuhan.
![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green)

Problem

> Pada Screen User terdapat Table dengan `Data User` (Client-Side Pagination) dimana pada page tersebut terdapat masalah untuk menampilkan keseluruhan detail informasi semua user yang telah di `Checklist` pada kolom Checkbox, yang nantinya akan ditampilkan pada `Page User Detail`.

DoD

> Pada `Page User Detail` seluruh `Informasi User` yang sudah di `Checklist` pada halaman user, dapat ditampilkan semuanya.

## 2. Unauthorized Handling (Exception Handling)
Exception handling berfungsi untuk menangani kesalahan atau error yang terjadi pada aplikasi, dengan menggunakan mekanisme tertentu.
![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green)

Problem

> Pada Screen Blog terdapat request Rest API dengan return error yaitu response `Status Code 404`.

DoD

> Buatkan handling terpusat ketika terdapat error response yang menghasilkan `Status Code 404` agar dapat di `Logout` atau di navigate ke login awal secara otomatis.

Notes: Karena menggunakan Rest API Dummy, asumsikan `Status Code 404` tersebut menjadi seperti `Status Code 401`. Pada real case seharusnya status code yang biasanya dibutuhkan untuk handling hal tersebut adalah `401 (Unauthorized)`.

## 3. List of Product Not Showing Up (Async/Await)
Async/Await berfungsi sebagai pengelola operasi sekuensial untuk membantu dalam eksekusi permintaan / request pada promise / rest api
![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green)

Problem

> Pada Halaman Product meskipun request Rest API `Success` dan mapping data product sudah benar, tetapi daftar product tersebut masih belum ditampilkan pada halaman `Product`.

DoD

> Menampilkan daftar Product beserta informasinya, dan juga dapat memahami penyebab masalah tersebut. 

## 4. The Version of Application is not Updated After Deployment (Cache)
Cache berfungsi sebagai penyimpanan sementara data atau informasi di komputer pengguna atau server aplikasi web
![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green)

Problem

> Pada saat setiap kali deployment aplikasi, aplikasi yang sudah terdeploy tersebut tidak terupdate otomatis dan perlu dilakukan clear cache manual setiap selesai melakukan deployment.

DoD

> Aplikasi yang sudah di deploy tersebut dapat langsung diakses tanpa perlu di clear cache. 
# StateManagementCase
