// 1. Tạo Object
// 1.1. Cú pháp tạo đối tượng sử dụng đối tượng bằng chữ
var obj1 = {
    name: "Quang",
    age: "20", // age: 20,
    address: "Thái Bình",
}
console.log(obj1);

// 1.2. Tạo đối tượng bằng cách sử dụng từ khóa new
var obj2 = new Object();
obj2.name = "Quang";
obj2.age = 20;
obj2.address = "Thái Bình";
console.log(obj2);

// 1.3. Sử dụng object constructor
function create_obj(n, a, add)
{
    this.name = n;
    this.age = a;
    this.address = add;
}
var obj3 = new create_obj("Quang", 20, "Thái Bình");
console.log(obj3);

// 2. Truy cập thuộc tính trong Object
console.log(obj1.name); // cách 1
console.log(obj1["name"]); // cách 2

// 3. Các phương thức trong object
// 3.1. Object.assign() 
// Phương thức này được sử dụng để sao chép các thuộc tính có thể đếm được và sở hữu từ một đối tượng nguồn sang một đối tượng đích
// Các thuộc tính trong đối tượng đích sẽ bị ghi lại bởi các thuộc tính trong đối tượng nguồn nếu chúng có cùng key. Tương tự, các thuộc tính nguồn sau sẽ ghi đè lên những thuộc tính nguồn trước. 
// trường hợp object nguồn đầu tiên bị thay đổi propoties
const target1 = { a: 1, b: 2 };
const source1 = { b: 4, c: 5 };
const returnedTarget1 = Object.assign(target, source);
console.log(target1);
console.log(returnedTarget1);
// để object nguồn đầu tiên không bị thay đổi propoties ta thêm một object nhân bản (Cloning an object)
const target2 = { a: 1, b: 2 };
const source2 = { b: 4, c: 5 };
const returnedTarget2 = Object.assign({}, target, source); // thêm cloning an object {}
console.log(target2);
console.log(returnedTarget2);

// 3.2. Object.create() 
// Phương pháp này được sử dụng để tạo một đối tượng mới với các thuộc tính và đối tượng nguyên mẫu được chỉ định.
function run(name, job) {
	const person = {
	  name: "",
	  job: "",
	  printIntroduction: function () {
		console.log(`My name is ${this.name}. My job is ${this.job}`);
	  }
	};
	const me = Object.create(person);
    me.name = name;
    me.job = job;
	me.printIntroduction();
}
run("Quang", "IT");

// 3.3. Object.entries() 
// Phương thức này trả về một mảng với các mảng của các tên thuộc tính, giá trị.
// Trả về một mảng có các phần tử là các mảng tương ứng với các cặp [key, value] thuộc tính chuỗi có thể đếm được được tìm thấy trực tiếp trên đối tượng. 
// Thứ tự của các thuộc tính giống như thứ tự được đưa ra bằng cách lặp qua các giá trị thuộc tính của đối tượng theo cách thủ công.
function run() {
	var data = { a: 'x', b: 'y'};
	var data2 = Object.entries(data);
	console.log(data2);
}
run();

// 3.4. Object.keys() 
// Phương thức này trả về một mảng các tên thuộc tính riêng của đối tượng đã cho.
// trả về một mảng các tên thuộc tính có thể đếm được của một đối tượng cụ thể, theo thứ tự như chúng ta nhận được với một vòng lặp thông thường.
function run() {
	var person = {
		firstName:"Trung",
		lastName:"Vuong",
		age:50,
		eyeColor:"blue"
	};
	var m = Object.keys(person);
	for (i in m)
    {
        console.log(m[i]);
    }
}

// 3.5. Object.values() 
// Phương thức này trả về một mảng các giá trị.
// Trả về một mảng các giá trị thuộc tính có thể đếm được của chính một đối tượng nhất định, theo cùng thứ tự
function run() {
	var person = {
		firstName:"Trung",
		lastName:"Vuong",
		age:50,
		eyeColor:"blue"
	};
	var m = Object.values(person);
	for (i of m)
    {
        console.log(i);
    }
}

// Object.defineProperty() //Phương pháp này được sử dụng để khai báo hay xác định thuộc tính của object
// Object.defineProperties() //Phương pháp này được sử dụng để tạo mới hay khai báo nhiều thuộc tính của object
// Object.freeze() //Phương pháp này ngăn chặn các thuộc tính hiện có bị loại bỏ.
// Object.getOwnPropertyDescriptor() //Phương thức này trả về một mô tả thuộc tính cho thuộc tính được chỉ định của đối tượng được chỉ định.
// Object.getOwnPropertyDescriptors() //Phương thức này trả về tất cả các mô tả thuộc tính riêng của một đối tượng nhất định.
// Object.getOwnPropertyNames() //Phương thức này trả về một mảng của tất cả các thuộc tính (liệt kê hoặc không) được tìm thấy.
// Object.getOwnPropertySymbols() //Phương thức này trả về một mảng của tất cả các thuộc tính khóa ký hiệu riêng.
// Object.getPrototypeOf() //Phương thức này trả về nguyên mẫu của đối tượng đã chỉ định.
// Object.is() //Phương pháp này xác định xem hai giá trị có cùng giá trị hay không
// Object.isExtensible() //Phương pháp này xác định nếu một đối tượng có thể mở rộng
// Object.isFrozen() //Phương pháp này xác định nếu một đối tượng đã bị đóng băng.
// Object.isSealed() //Phương pháp này xác định nếu một đối tượng được niêm phong.
// Object.preventExtensions() //Phương pháp này được sử dụng để ngăn chặn mọi phần mở rộng của một đối tượng.
// Object.seal() //Phương pháp này ngăn các thuộc tính mới được thêm vào và đánh dấu tất cả các thuộc tính hiện có là không thể cấu hình.
// Object.setPrototypeOf() //Phương thức này đặt nguyên mẫu của một đối tượng được chỉ định cho một đối tượng khác.

