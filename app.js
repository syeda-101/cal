var myWindow;
function ans(num) {
    var input = document.getElementById('in');
    input.value += num;


}

function eva() {
    var input = document.getElementById('in');
    input.value = eval(input.value)


    num = eva()
}

function clearInp() {
    var input = document.getElementById('in');
    input.value = ""

}

