
function penjumlahan(angka1,angka2){
    return angka1+angka2;
}

function perkalian(angka1,angka2){
    return angka1*angka2;
}

test("testing sederhana",()=>{
    expect(true).toBe(true);
});

test("menjumlahkan nilai",()=>{
    expect(1+1).toBe(2);
    expect(2*3).toBe(6);
});

test("Fungsi penjumlahan",()=>{
    expect(penjumlahan(3,2)).toBe(5);
    expect(penjumlahan(4,8)).toBe(12);
});

test("Fungsi perkalian",()=>{
    expect(perkalian(3,2)).toBe(6);
    expect(perkalian(4,8)).toBe(32);
});