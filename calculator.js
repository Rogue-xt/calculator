function display(data){
    result.value=result.value+data
}
function allClear(){
    result.value=""
}
function output(){
    result.value=eval(result.value)
}
function backSpace(){//slicing last elemnet in the string
    result.value=result.value.slice(0,-1)
}