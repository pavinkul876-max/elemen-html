// Deklarasi variabel
let nama = 'Pavito Kevin Imanu Rafif'; // String
let usia = 16; // Number
let nilaiRata = 88.5; // Number (desimal)
let lulus = true; // Boolean
let alamat = null; // Null (sengaja kosong)
let hobi; // Undefined (belum diisi)
const NAMA_SEKOLAH = 'SMK TJP Tuban'; // Konstanta
const PI = 3.14159;
// Mengubah nilai let (boleh)
nama = 'Budi Santoso';
usia = usia + 1;
// Mengubah nilai const (TIDAK BOLEH — akan error!)
// NAMA_SEKOLAH = 'SMK Lain'; // TypeError!
// Cek tipe data dengan typeof
console.log(typeof nama); // 'string'
console.log(typeof usia); // 'number'
console.log(typeof lulus); // 'boolean'
console.log(typeof alamat); // 'object' (keunikan JS)
console.log(typeof hobi); // 'undefined'
// Template Literal (backtick) — cara modern menulis string
let namaSiswa = 'Andi';
let kelas = 'X RPL 1';
// Cara lama (konkatenasi)
let pesan1 = 'Halo, ' + namaSiswa + '! Kamu di kelas ' + kelas;
// Cara modern (template literal) — lebih mudah dibaca
let pesan2 = `Halo, ${namaSiswa}! Kamu di kelas ${kelas}`;
console.log(pesan1); // Halo, Pavito! Kamu di kelas X RPL 1
console.log(pesan2); // Halo, Pavito! Kamu di kelas X RPL 1
// Array — indeks mulai dari 0
let buah = ['Apel', 'Mangga', 'Jeruk'];
console.log(buah[0]); // 'Apel'
console.log(buah[2]); // 'Jeruk'
console.log(buah.length); // 3
// Object
let siswa = {
nama: 'Siti Rahayu',
usia: 15,
kelas: 'X RPL 1',
aktif: true
};
console.log(siswa.nama); // 'Siti Rahayu'
console.log(siswa['kelas']); // 'X RPL 1'