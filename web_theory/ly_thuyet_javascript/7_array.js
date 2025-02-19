// 1. Khai báo mảng
// 1.1. Cú pháp tạo mảng bằng cách sử dụng mảng bằng chữ (cách thông thường)
var m1 = [1, 2, 3, 8, 6];

// 1.2. Tọa mảng bằng cách dùng từ khóa new
var m2 = new Array();
m2[0] = "Tong";
m2[1] = "Dang";
m2[2] = "Quang";

// 1.3 Sử dụng Array constructor (kết hợp từ khóa new)
var m3 = new Array("Quang", "Tong", 20);
console.log(m3);



// 2. Thuộc tính và phương thức
// 2.1. Array.length 
// Thuộc tính length của một mảng trả về số phần tử trong mảng đó. Length luôn lớn hơn chỉ mục lớn nhất của mảng (chỉ mục lớn nhất chính là dộ dài của mảng trừ đi 1).
var m = [1, 2, 4, 5, 3];
console.log(m.length); // out: 5

// 2.2. concat() 
// Nó trả về một đối tượng mảng mới chứa hai hoặc nhiều mảng được hợp nhất.
var num1 = [1, 2, 3], num2 = [4, 5, 6], num3 = [7, 8, 9];
var nums = num1.concat(num2, num3);
console.log(nums); // output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 2.3. every() 
// Nó xác định xem tất cả các phần tử của một mảng có thỏa mãn các điều kiện (hàm) được cung cấp hay không.
function chan(x)
{
    return x % 2 == 0;
}
function run(data) 
{
	var check = data.every(chan);
	if (check)
		console.log("Yes"); // in ra yes nếu các phần tử trong mảng là chẵn
    else
		console.log("No"); // in ra no nếu các phần tử trong mảng là lẻ
}

// 2.4. some()
// Phương thức some() kiểm tra xem ít nhất một phần tử trong mảng có vượt qua kiểm tra được thực hiện bởi hàm được cung cấp hay không. Nó trả về giá trị Boolean.
function chan(x)
{
    return x % 2 == 0;
}
function run(data) 
{
	var check = data.some(chan);
	if (check)
		console.log("Yes");
	else
		console.log("No");
}
run([1, 9, 1, 5, 7]);

// 2.5. filter() 
// Nó trả về mảng mới chứa các phần tử vượt qua các điều kiện hàm được cung cấp.
function so_duong(x)
{
    return x > 0;
}
function run(data) 
{
	var result = data.filter(so_duong);
	console.log(result); // in ra những số dương trong mảng data
}
run([1, -2, 3, -4]);

// 2.6. find() 
// Trả về giá trị của phần tử đầu tiên trong mảng thỏa mãn hàm kiểm tra được cung cấp. Nếu không, không xác định được trả lại.
// 2.7. findIndex() 
// Nó trả về giá trị chỉ mục của phần tử đầu tiên trong mảng đã cho thỏa mãn điều kiện đã chỉ định.
function so_duong(x)
{
    return x > 0;
}
function run (data) 
{
	var a = data.find(so_duong); // giá trị của số dương đầu tiên trong mảng
	var b = data.findIndex(so_duong); // vị trí của số dương đầu tiên trong mảng
    if(!isNaN(a)) // kiểm tra xem kiểu dữ liệu là number hay undefined
    {
	    console.log(b + " " + a); 
    }
    else
    {
        console.log("No result"); // trường hợp không tồn tại số dương trong mảng
    }
}

// 2.8. includes() 
// Nó kiểm tra xem mảng đã cho có chứa phần tử đã chỉ định hay không.
function run(data) 
{
	var check = data.includes(5); // kiểm tra xem mảng có chứa số 5 hay không
	if(check)
        console.log("Yes");
    else
        console.log("No");
}
run([1, 2, 5]); // out: Yes

// 2.9. indexOf() 
// Nó tìm kiếm phần tử được chỉ định trong mảng đã cho và trả về chỉ mục đầu tiên, nếu không có thì trả về -1.
// 2.10. lastIndexOf() 
// Nó tìm kiếm phần tử được chỉ định trong mảng đã cho và trả về chỉ mục cuối cùng, nếu không có thì trả về -1.
function run(data)
{
	var fi = data.indexOf(2); // tìm vị trí của số 2 đầu tiên
	var li = data.lastIndexOf(2); // tìm vị trí của số 2 cuối cùng
    if(fi == -1 || li == -1)
        console.log("No result");
    else
	    console.log(fi + " " + li);
}
data = [-1, 2, 3, 4, 2, 6]; // out: 1 4

// 2.11. join() 
// Nó kết hợp các phần tử của một mảng dưới dạng một chuỗi.
function run(data) 
{
	var m = data.join(", "); // out:  "A, B, C"
	var n = data.join(" + "); // out:  "A + B + C"
	console.log(m);
}
run(["A", "B", "C"]);

// 2.12. map() 
// Nó gọi hàm được chỉ định cho mọi phần tử mảng và trả về mảng mới.
function abs(x) // tìm trị tuyệt đối của 1 số
{
    if (x < 0)
        return -x;
    else
        return x;
}
function run(data) 
{
	var m = data.map(abs) // tìm mảng trị tuyệt đối của mảng gốc
	console.log(m);
}
data = [2, -1, -8];  //out [2, 1, 8]

// 2.13. thêm, xóa đầu và cuối mảng
shift() // Nó loại bỏ và trả về phần tử đầu tiên của một mảng.
unshift() // Nó thêm một hoặc nhiều phần tử vào đầu mảng đã cho.
pop() // Nó loại bỏ và trả về phần tử cuối cùng của một mảng.
push() // Nó thêm một hoặc nhiều phần tử vào cuối của một mảng.
function run(data) 
{
	var data1 = data.shift(); // xóa phần tử đầu tiên của mảng
	var data2 = data.pop(); // xóa phần tử cuối cùng của mảng
	data.unshift("Z") // thêm phần tử vào đầu mảng
	data.push("X"); // thêm phần tử vào cuối mảng
	console.log(data);
}

// 2.14. reverse() 
// Nó đảo ngược các phần tử của mảng nhất định.
function run(data) 
{
	var data_reverse = data.reverse();
	console.log(data_reverse);
}

// 2.15. sort() 
// Nó trả về phần tử của mảng đã cho theo thứ tự được sắp xếp.
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
// out: [1, 2, 3, 4, 5]

// 2.16. forEach() 
// Nó gọi hàm được cung cấp một lần cho mỗi phần tử của một mảng.
function run(data) 
{
	data.forEach
	(
		function(element) 
		{
			if(element % 5 == 0)
			{
				console.log(element);
			}
		}
	);
}
data = [1, 5, 30, 26]; // out: 5, 30


copywithin() // Nó sao chép một phần của mảng đã cho bằng các phần tử của chính nó và trả về mảng đã sửa đổi.
fill() // Nó điền các phần tử vào một mảng với các giá trị tĩnh.
slice() // Nó trả về một mảng mới chứa bản sao của một phần của mảng đã cho.
splice() // Nó thêm / xóa các phần tử đến / từ mảng đã cho.
