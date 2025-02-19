// 1. length() 
// trả về độ dài chuỗi
var n = "TongDangQuang";
console.log(n.length);

// 2. prototype
// cho phép thêm, thuộc tính hay phương thức
// ví dụ: tạo phương thức is_big() để kiểm tra xem chuỗi có phải là chuỗi lớn hay không (chuỗi lớn là chuỗi có độ dài lớn hơn 10)
String.prototype.is_big = function(char) // cú pháp tạo phương thức thông qua prototype
{
    if(this.length > 10)
        return true;
    else 
        return false;
}
function run(str) 
{
	var result = str.is_big(); // sủ dụng phương thức is_big() như những phương thức mặc định khác
	console.log(result);
}
run(n);

var str = "JavaScript";
// 3. charAt() 
// Nó cung cấp giá trị char hiện tại tại chỉ mục được chỉ định.
str.charAt(0); // returns "J"
str.charAt(str.length-1); // returns "t"

// 4. charCodeAt() 
// Nó cung cấp giá trị Unicode của một ký tự có trong chỉ mục được chỉ định.
'ABC'.charCodeAt(0); // returns 65

// 5. concat() 
// Nó cung cấp một sự kết hợp của hai hoặc nhiều chuỗi.
"Java".concat("Script"); // returns "JavaScript"

// 6. indexOf() 
// Nó cung cấp vị trí của một giá trị char có trong chuỗi đã cho, không tồn tại sẽ trả về -1
"JavaScript".indexOf("J"); // returns 0
"JavaScript".indexOf("X"); // returns -1

// 7. lastIndexOf() 
// Nó cung cấp vị trí của một giá trị char có trong chuỗi đã cho bằng cách tìm kiếm một ký tự từ vị trí cuối cùng, không có sẽ trả về -1.
'canal'.lastIndexOf('a'); // returns 3
'canal'.lastIndexOf('x'); // returns -1

// 8. replace() 
// Nó tạo một chuỗi mới là chuỗi gốc đã được thay thế mà không làm thay đổi chuỗi gốc.
"Ab".replace('b', 'a'); // returns Aa

// 9. substr() 
// Nó được sử dụng để tìm nạp một phần của chuỗi đã cho trên cơ sở vị trí và độ dài bắt đầu được chỉ định.
"Mozilla".substr(1, 2); // returns "oz"
"Mozilla".substr(0, 4); // returns "Mozi"

// 10. substring() 
// Nó được sử dụng để tìm nạp một phần của chuỗi đã cho trên cơ sở chỉ mục đã chỉ định.
"Mozilla".substring(1, 3); // returns "oz"

var str1 = "The quick brown fox jumps over the lazy dog.";
// 11. slice() 
// Nó được sử dụng để tìm nạp một phần của chuỗi đã cho. Nó cho phép chúng ta gán chỉ số tích cực cũng như tiêu cực.
str1.slice(4, 19); // returns "quick brown fox"

// 12. toLowerCase() 
// Nó tạo ra một chuỗi mới là chữ thường dựa trên chuỗi gốc chứ không làm thay đổi chuỗi gốc.
"Abc".toLowerCase(); // returns "abc"

// 13. toUpperCase() 
// Nó tạo ra một chuỗi mới là chữ hoa dựa trên chuỗi gốc chứ không làm thay đổi chuỗi gốc.
"Abc".toUpperCase(); // returns "ABC"

// 14. toString() 
// Nó chuyển mọi thứ thành chuỗi.
var array = [1, 2, 3, 4, 5];
console.log(array.toString()); // Output: "1,2,3,4,5"

// 15. split() 
// Nó biến 1 chuỗi thành 1 mảng các chuỗi, bằng cách tách chuỗi theo ký tự dc chỉ định
"The quick brown fox".split(' '); // returns ['The', 'quick', 'brown', 'fox']
"11,22".split(','); // returns ['11', '22']

// 16. includes() 
// Nó xác định xem một chuỗi có thể được tìm thấy trong một chuỗi khác hay không, trả về true hoặc false khi thích hợp.
var str2 = "Hello World";
str2.includes("Hello"); // return: true
str2.includes("Hi"); // return: false

// 17. So sánh độ dài chuỗi
function run(a, b)
{
	if(a.length == b.length)
        return true;
    else
        return false;
}

DataTransferItem() // Nó loại bỏ kí tự khoảng trắng ở đầu và cuối chuỗi
search() // Nó tìm kiếm một biểu thức chính quy định trong một chuỗi đã cho và trả về vị trí của nó nếu xảy ra khớp.
match() // Nó tìm kiếm một biểu thức chính quy định trong một chuỗi đã cho và trả về biểu thức chính quy đó nếu xảy ra khớp.
valueOf() // Nó cung cấp giá trị nguyên thủy của đối tượng chuỗi.
toLocaleLowerCase() // Nó chuyển đổi chuỗi đã cho thành chữ thường trên cơ sở ngôn ngữ hiện tại của máy chủ.
toLocaleUpperCase() // Nó chuyển đổi chuỗi đã cho thành chữ in hoa trên cơ sở ngôn ngữ hiện tại của máy chủ.
