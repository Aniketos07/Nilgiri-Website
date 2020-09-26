function Nav() {
    var element = document.getElementById("left");
    if(element.style.flex != "0 0 200px" || !element.style.flex){
        element.style.flex = "0 0 200px";
    }
    else{
        element.style.flex = "0 0 0";
    }
}