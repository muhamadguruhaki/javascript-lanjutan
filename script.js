// Cara untuk membuat object di javascript
// 1.Object Literal
// PROBLEM : tidak efektif untuk object yang banyak
// let mahasiswa = {
//     nama: 'Muhamad Guruh',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`);
//     }
// }

// 2. Function Declaration
// PROBLEM : Dengan menggunakan function declaration saat instansiasi object nya, method yg dipanggil akan tersimpan di memori ini akan memberatkan memori
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan`)
//     }

//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Makan`);
//     }

//     return mahasiswa;
// }

// Cara kedua function declaration 
const methodMahasiswa = {
    makan : function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan`)
    },

    main : function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat Bermain`);
    },

    tidur : function(jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, Selamat Tidur`);
    }
};

function Mahasiswa(nama, energi) {
    // cara 1. PROBLEM : saat kita membuat method baru di object methodMahasiswa kita juga harus memanggil nya di function mahasiswa
    // let mahasiswa = {};
    // mahasiswa.nama = nama;
    // mahasiswa.energi = energi;
    // mahasiswa.makan = methodMahasiswa.makan;
    // mahasiswa.main = methodMahasiswa.main;
    // mahasiswa.tidur = methodMahasiswa.tidur;

    // cara 2. PROBLEM : cara paling efektif untuk menangani permasalahan cara 1, namun dengan kita membuat method di object methodMahasiswa dan menyambungkan dengan Object.create(methodMahasiswa) ini masih belum terlalu efektif karena kita masih menyambungkan dua object
    let mahasiswa = Object.create(methodMahasiswa);

    return mahasiswa;
}

let guruh = Mahasiswa('Muhamad Guruh',20);
let deni = Mahasiswa('Deni Afriyan', 15);

// 3. Constructor Function
// keyword new

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan`)
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Makan`);
//     }
// }

// let guruh = new Mahasiswa("Guruh", 20);