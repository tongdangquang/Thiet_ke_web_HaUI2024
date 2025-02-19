// 1. flag
    // i: cho phép tìm kiếm không phân biệt chữ hoa và chữ thường
    // g: cho phép tìm kiếm toàn cục (trên toàn bộ văn bản hoặc câu văn)
    // m: cho phép tìm kiếm trên nhiều dòng


// 2. Pattern
// 2.1. assertions
var regex1 = /abc/gi; // tìm kiếm chuỗi abc không phân biệt chữ hoa, chữ thường trong chuỗi
var regex2 = /^t/gi; // kí tự '^' thể hiện kí tự đầu tiên của một dòng, trong ví dụ này là tìm kiếm vị trí của kí tự t đầu tiên của 1 dòng
var regex3 = /t$/gi; // kí tự '$' thể hiện kí tự cuối cùng của dòng, trong ví dụ này là tìm kiếm vị trí của kí tự t cuối cùng của 1 dòng
var regex4 = /\bon/gi; // kí tự '\b' thể hiện kí tự nàm giữa 1 dấu cách và 1 từ, trong ví dụ này là tìm kiếm vị trí của chữ on đứng riêng lẻ

// 2.2. character classes
var regex5 = /\d/g; // kí từ \d là kí tự số, trong ví dụ là tìm kí tự số trong chuỗi
var regex6 = /\d\d\d/g; // tìm 3 số liền nhau trong chuỗi
var regex7 = /\d\d\d$/g; // tìm 3 số cuối cùng trong 1 chuỗi

var regex8 = /\w/g; // kí tự \w tìm kiếm các kí tự la tinh trong xâu, a-z, A-Z, 0-9, dấu gạch dưới(_)
var regex9 = /\s/g; // tìm kiếm kí tự dấu cách trong xâu
var regex10 = /./g; // tìm kiếm tất cả các kí tự trong chuỗi

// 2.3. sets and ranges
var regex11 = /word/gi; // tìm kiếm một kí tự (hoặc chuỗi kí tự) được chỉ định bất kì trong chuỗi
var regex12 = /[abxy]/gi; // tìm kiếm tất cả các kí tự a, b, x, y trong chuỗi
var regex13 = /#[a-z0-9][a-z0-9][a-z0-9][a-z0-9][a-z0-9][a-z0-9]/g; // có thể kết hợp thê các kí tự ngoài ngoặc vuông như ví dụ tìm mã màu
var regex14 = /[^1-5]/g; // tìm các kí tự không nằm trong khoảng 1-5

// 2.4. quantifiers
var regex15 = /\d{5}/g; // tìm một dãy số lặp đi lặp lại 5 lần (dãy số có 5 số liên tiếp)
var regex16 = /\d{3,}/g; // tìm một dãy số có ít nhất 3 phần tử
var regex17 = /\d+/g; // tìm dãy số có ít nhất 1 phần tử, có thể thay + bằng *
var regex18 = /colo?r/g; // trong trường hợp này, chuỗi cần tìm có thể có hoặc không có 1 kí tự khác thay dấu ?, ví dụ tìm color, colour,...

// 2.5. greedy and lazy quantifiers
var regex19 = /".+?"/g; // tìm các chuỗi trong dấu ""

// 2.6. capturing groups
var regex20 = /(go)+/g; // tìm một chuỗi kí tự lặp lại liên tiếp, kết quả tìm trả về trong ví dụ này là gogogogo
var regex21 = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g; // tên nhóm được đặt trong dấu <>

//2.7 or
var regex22 = /(TOM|JERRY).+CAT/gi; // tìm kiếm chuỗi TOM CAT hoặc JERRY CAT

// 3. Methods
// 3.1. test(): kiểm tra xem một chuỗi có khớp với biểu thức chính quy hay không, và trả về true hoặc false
var regex = /pattern/;
var str = 'string containing pattern';
var result = regex.test(str);
console.log(result);

// 3.2. exec(): tìm kiếm một biểu thức chính quy trong chuỗi, nếu tìm thấy nó trả về một mảng chứa thông tin về sự khớp, nếu không nó trả về null
var regex = /pattern/;
var str = "string containing pattern";
var result = regex.exec(str);
console.log(result); // in ra thông tin của phần tử khớp với chuỗi
console.log(result.index); // truy xuất đến vị trí của phần tử cần tìm
var m = [];
while (result !== null)
{
    m.push(result.index);
    result = regex.exec(str); // cập nhật biến result để tiếp tục tìm kiếm trên chuỗi vì hàm exec() chỉ trả về thông tin của vị trí khớp đầu tiên nên cần lặp đến lúc nó trả về null
}
console.log(m); // in ra mảng chứa thông tin là vị trí của từ cần tìm

// 3.3. match(): tìm tất cả các khớp của một biểu thức chính quy trong một chuỗi và trả về một mảng chứa các kết quả hoặc null nếu không có khớp nào
var regex = /pattern/gi;
var str = "string cotaining pattern";
var result = str.match(regex);
console.log(result); // trả về mảng chứa các regex xuất hiện trong str (có thể dùng match() để đếm số phần tử regex xuất hiện trong str bằng cách m.length)

// 3.4. replace(): thay thế các khớp của biểu thức chính quy trong một chuỗi bằng một chuỗi hoặc hàm và trả về một chuỗi mới là chuỗi đã được thay thế chứ nó không làm thay đổi chuỗi gốc
// thay thế bằng 1 chuỗi
var regex = /pattern/gi;
var str = "string Pattern containing pattern";
var result = str.replace(regex, "hello world");
console.log(result); // chuỗi mới là chuỗi được thay thế
console.log(str); // chuỗi gốc không thay đổi

// thay thế bằng một hàm
var str = "Hello world! Replace this pattern, and this pattern too.";
var regex = /pattern/g;
function replacePattern(matchedStr, index) // Đối số matchedStr là chuỗi đã khớp và index là vị trí của chuỗi đã khớp trong chuỗi gốc.
{
    return "replacement-" + index;
}
var newStr = str.replace(regex, replacePattern);
console.log(newStr);

// 3.5. search(): tìm kiếm một chuỗi để khớp với một biểu thức chính quy và trả về chỉ mục của sự xuất hiện đầu tiên của chuỗi nếu có, nếu không trả về -1
var str = "string pattern containing pattern";
var regex = /pattern/g;
var index = str.search(regex); // lưu ý: search() chỉ trả về vị trí khớp đầu tiên mà không trả về các vị trí sau nên không thể kết hợp với mảng để tìm các vị trí khớp trong chuỗi
console.log(index);

// 3.6. split(): chia một chuỗi thành một mảng các chuỗi con bằng các sử dụng một biểu thức chính quy
var regex = / /;
var str = "split this string";
var result = str.split(regex);
console.log(result);


// 4. Biểu thức chính quy thông dụng
var regex1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // kiểm tra email hợp lệ
var regex2 = /^(http|https):\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/; // kiểm tra URL hợp lệ
var regex3 = /^\s+|\s+$/g; // loại bỏ dấu cách đầu và cuối trong chuỗi
var regex4 = /\bword\b/g; // tìm từ trong một chuỗi
var regex5 = /^[0-9]+$/; // kiểm tra một chuỗi chỉ chứa kí tự số
var regex6 = /^[a-zA-Z]+$/; // kiểm tra một chuỗi chỉ chứa kí tự chữ cái
var regex7 = /^[a-zA-Z0-9]+$/; // kiểm tra một chuỗi chỉ chứa ký tự số và chữ cái
var regex8 = /[^\w\s]/g;// loại bỏ dấu câu và ký tự đặc biệt trong chuỗi
var regex9 = /^\+(?:[0-9] ?){6,14}[0-9]$/; // kiểm tra một số điện thoại hợp lệ (định dạng số điện thoại quốc tế)
var regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Kiểm tra mật khẩu mạnh (phải chứa ít nhất 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt)



