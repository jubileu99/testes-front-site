function openNav(){
    $("#nav").css({"width":"100%"});
}
function closeNav(){
    $("#nav").css({"width": "0%"});
}

$("a[href='#']").on("click",function(){
    alert("Funcionou!");
});