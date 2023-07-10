function openNav(){

    var x = document.getElementById("fundo");

    if ( x.className === "fundo"){
        x.className += " menujs";
        document.getElementById("three-line").innerHTML = "&Cross;";
    }
    else{
        x.className = "fundo";
        document.getElementById("three-line").innerHTML = "&#9776;";
    }


}