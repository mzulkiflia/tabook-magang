let a,b;
const c = 2;

function tambah (a, b){
    return a+b;
}
function kurang (a, b){
    return a-b;
}
function bagi (a,b){
    return a/b;
}
function kali(a,b){
    return a*b;
}
function akar (a){
    return Math.sqrt(a,c);
}

module.exports = {
    tambah,
    kurang,
    bagi,
    kali,
    akar
}