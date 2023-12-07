function remove(string){
    let input = document.getElementById(string);
    if (input.value > 0) {
        input.value--;
        if (input.value == 0) input.value = '';
    }
}
function add(string){
    let input = document.getElementById(string);
    input.value++;
}
function addToCart(){
    localStorage()
}