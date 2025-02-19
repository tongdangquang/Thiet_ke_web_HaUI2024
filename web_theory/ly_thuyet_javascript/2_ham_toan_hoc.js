// 1. tính căn bậc 2 sqrt
let a1 = 16;
let a2= Math.sqrt(a1);
console.log("Căn bậc 2 của " + a1 + " là " + a2);

// 2. tính lũy thừa
let b1 = 2;
let b2 = 3;
let b3 = Math.pow(b1, b2); // tính 2 mũ 3
console.log(b1 + " ^ " + b2 + " = " + b3);

// 3. tính trị truyệt đối
let c1 = -10;
let c2 = Math.abs(c1);
console.log(`|${c1}| = ${c2}`);

// 4. làm tròn số
// 4.1. làm tròn theo quy tắc toán học
let pi = 3.14449474722992;
let fix_pi = pi.toFixed(3); // làm trong 3 số sau dấu phẩy và trả về kiểu string
// 4.2. làm tròn lên (làm tròn lên đến giá trị số nguyên gần nhất)
let ceil_pi = Math.ceil(pi);
// 4.3. làm tròn xuống (làm xuống lên đến giá trị số nguyên gần nhất)
let floor_pi = Math.floor(pi);
// 4.4. làm tròn từ 0.5 (dưới 0.5 thì làm tròn xuống và ngược lại)
let found_pi = Math.round(pi);

// 5. tìm min và max của 1 dãy số
let n1 = 5, n2 = 6, n3 = 4;
let min_value = Math.min(n1, n2, n3);
let max_value = Math.max(n1, n2, n3);

// 6. hàm lấy số ngẫu nhiên
let rd = parseInt(Math.random()*100); // muốn lấy khoảng bao nhiêu thì nhân bấy nhiêu