//Viết một function có tên numberOneTriangle(). 
//Hàm có tham số truyền vào là một số nguyên trong khoảng (1-10) có tác dụng in ra hình tam giác.
function numberOneTriangle(n){
    if ( n <= 10){
        for (let i = 1; i <= n ; i++) {
            let s = '';
            for (let j = 1; j <= i; j++) {
                s = s + '* ';
            }
            console.log(s);
        }
    }
    
}
numberOneTriangle(9);
