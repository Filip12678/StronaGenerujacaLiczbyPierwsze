function myFunction() {

i = prompt("Wprowadź dolną granicę generowania liczb pierwszych")
a2 = prompt("Wprowadź górną granicę generowania liczb pierwszych")
i = parseInt(i);
a2 = parseInt(a2);
var arr = [];
for (i; i < a2; i++) {
    w = 0;
    for(j = 2; j <= i; j++) {
        var a = parseInt(i/j);
        var b = parseInt(a*j);
        if (j == i && w == 0) {
            arr.push(j)
        }
        if (b == i) {
            w = 1;
        }
    }
}
console.log(arr);
alert(arr);

}