// 1. for ()
function tinh_tong(n)
{
    var tong = 0;
    for (i = 0; i <= n; i++)
    {
        tong += i;
    }
    // return tong;
    console.log(tong);
}
// var a = tinh_tong(5);
// console.log(a)
tinh_tong(5);

// 2.for-in
function for_in(m)
{
    for (i in m)
    {
        console.log(i + " is " + m[i]);
    }
}
var my = {name: "quang", class: "httt02", school: "Haui", address: "thái bình"};
for_in(my);

// 3. for-of
function for_of(m)
{
    for (i of m)
    {
        console.log(i);
    }
}
var m = [1, 6, 3, 6];
for_of(m);

// 4. đảo ngược chuỗi
function run(str_input) {
    var str = "";
    for (i = str_input.length - 1; i >= 0; i--)
    {
        str += str_input[i];
    }
    console.log(str);
}

function dao_nguoc(str)
{
    var str_reverse1 = str.split(""); // sử dụng split("") để chuyển chuỗi thành mảng
    var str_reverse2 = str_reverse1.reverse(); // sử dụng reverse() để đảo ngược mảng
    var str_reverse3 = str_reverse2.join("");
    console.log(str_reverse3);
}
// mấy cái while, do...while tương tự C++