//Tạo một ứng dụng web, cho phép nhập vào 2 số a và b. 
//Hiển thị tất cả các số nguyên tố trong khoảng a và b.  Nhập trên HTML

function isNguyenTo(n) {
    if (n <= 1) {
        return false;
    }
    let isNguyenTo = true;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) { // 2 là số nguyên tố chẵn duy nhất
            return false;
        }
    }

    return isNguyenTo;
}
let arr=[];
document.getElementById('idClick').onclick = function () {
    const $a = document.getElementById('idOne').value;
    const $b = document.getElementById('idTwo').value;

    for (let i = $a; i <= $b; i++) {
        let check = isNguyenTo(i);
        if (check) { 
            arr.push(i);
            document.getElementById('snt').innerHTML = arr;
        }
    }
};
