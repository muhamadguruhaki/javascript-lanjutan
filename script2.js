// let Mahasiswa = {
//     nama: "Muhamad Guruh",
//     energi: 20,
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan`);
//     }
// }



// function Mahasiswa(nama, energi) {
    
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan`);
//     }

//     mahasiswa.main = function(jam) {
//         this.energi += jam;
//         console.log(`${this.nama} Sedang bermain`);
//     }

//     return mahasiswa;
// }

// let guruh = Mahasiswa('Guruh', 20);

function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat makan`);
    }

    this.main = function(jam) {
        this.energi -= jam;
        console.log(`${this.nama} Sedang Bermain`)
    }
}

let guruh = new Mahasiswa("Guruh", 20);