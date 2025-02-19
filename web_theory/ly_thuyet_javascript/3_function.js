// // hàm không tham số
// function hello()
// {
//     console.log("Hello world");
// }
// hello(); // gọi hàm


// // Hàm có tham số
// function hi(name)
// {
//     console.log("Hi " + name);
// }
// hi("World");


// // đối tượng arguments (không giới hạn số lượng đối số truyền vào)
// function run_string()
// {
//     var str = "";
//     for (var item of arguments)
//     {
//         str += item;
//         str += " ";
//     }
//     console.log(str);
// }
// run_string("hello", "world", "my", "...");


// // hàm có kiểu trả về
// function tinh_tong(a, b)
// {
//     return a + b;
// }
// var tong = tinh_tong(2, 6);
// console.log(tong);


// định nghĩa hàm trong hàm
function show()
{
    function show1()
    {
        console.log("show show");
    }
    show1()
}
show()