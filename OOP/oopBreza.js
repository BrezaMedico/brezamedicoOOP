const mouse = {
        merek : "Razor",
        warna: 'Hitam',
        harga : 200000,
        madeIn: 'China',
        klickKiri: () => {
          console.log('attack');
        },
        klickKanan: () => {
          console.log('open scope');
        },
        scroll: () => {
          console.log('switch weapon');
        }
}
console.log(mouse.merek);
console.log(mouse.warna);
console.log(mouse.harga);
console.log(mouse.madeIn);
mouse.klickKiri();
mouse.klickKanan();
mouse.scroll();

const karakter = {
    nama : "CJ",
    warnaBaju: 'Hijau',
    darah : 100,
    rambut: 'curtain',
    arrowLeft: () => {
      console.log('jalan ke kiri');
    },
    arrowKanan: () => {
      console.log('jalan ke kanan');
    },
    arrowUp: () => {
      console.log('jalan ke depan');
    }
}
console.log(karakter.nama);
console.log(karakter.warnaBaju);
console.log(karakter.darah);
console.log(karakter.rambut);
karakter.arrowLeft();
karakter.arrowKanan();
karakter.arrowUp();
