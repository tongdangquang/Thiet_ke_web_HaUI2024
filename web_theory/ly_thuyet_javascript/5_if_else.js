function ptb2(a, b, c)
{
    if(a == 0)
    {
        console.log("Phương trình không phải phương tình bậc 2.");
        return;
    }
    var delta = b*b - 4*a*c;
    if(delta > 0)
    {
        var x1 = (-b + Math.sqrt(delta))/(2*a);
        var x1 = (-b - Math.sqrt(delta))/(2*a);
        console.log("Tập nghiệm của phương trình là: S = {" + x1 + ", " + x2 + "}");
    }
    else if(delta == 0)
    {
        var x = (-b)/(2*a);
        console.log("Tập nghiệm của phương trình là: S = {" + x + "}");
    }
    else
    {
        console.log("Phương trình vô nghiệm.");
    }
}

var a = 4, b = 6, c = 2;
console.log("Phương trình bậc 2: " + a + "x2 + " + b + "x + " + c + " = 0" );
ptb2(a, b, c);
