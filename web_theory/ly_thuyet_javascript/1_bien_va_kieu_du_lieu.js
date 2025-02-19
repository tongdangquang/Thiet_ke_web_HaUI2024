// I: Kiểu Dữ Liệu Nguyên Thủy (Primitive Data Types):
// 1. Number
let age = 25;

// 2. String
let name = "Tống Đăng Quang";

// 3. Boolean
let is_person = true;

// 4. Undefined (Không xác định)
let variable;

// 5. Null
let person = null;

// 6. Object
let obj = {ten: "Quang", lop: "HTTT02", truong: "Haui"};

// 7. Array
var colors = ["red", "yellow", "brown", "orange"];
console.log(colors[2]); // truy xuất phần tử

// 8. function()
var fun = function()
{
    return "Hello world";
}
console.log(typeof fun()); // output: function
console.log(fun()); // output: Hello world

// 8. Toán tử logic: and (&&), or(||), not (!)


// II: Ép kiểu dữ liệu (dữ liệu mặc định khi nhập bằng lệnh prompt là kiểu string)
// 1. Ép sang kiểu nguyên int
let number1 = parseInt(prompt("Nhập number 1: "))

// 2. Ép sang kiểu số thực float
let number2 = parseFloat(prompt("Nhập number 2: "))

// 3. Sử dụng number để ép kiểu dữ liệu
let number3 = Number(prompt("Nhập number 3: "))

// 4. Kiểm tra kiểu dữ liệu
console.log("Kiểu dữ liệu của number 1: " + typeof number1)


// III: Các phép toán so sánh, tượng tự như những ngôn ngữ khác như c++, python,...nhưng có sự khác nhau nhất định...
let a = 3;
let b = 3;
let c = "3";
let d = 4;
// 1. so sánh bằng (==) không quan tâm tới kiểu dữ liệu
console.log(a == b); // return true
console.log(a == c); // return true

// 2. so sánh khác
console.log(a != d); // return true
console.log(c != d); // return true

// 3. so sánh tuyệt đối (===) so sánh cả kiểu dữ liệu và giá trị
console.log(a === b); // return true
console.log(a === c) // return false

// 4. so sánh khác
console.log(a !== b); // return false
console.log(a !== c); // return true
