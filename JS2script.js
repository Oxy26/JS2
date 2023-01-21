function sayIt() {
    console.log ( "Я учу Java Script" );
}
sayIt ();

let id = 1;

function forward() {
    document.getElementById("picture" + id).style.display = "none";

    if (id == 1) {
        id = 2;
    }
    else if (id == 2) {
        id = 3;
    } 
    else if (id == 3) {
        id = 1;
    } 

   // console.log(document.getElementsByTagName("img").length);

    document.getElementById("picture" + id).style.display = "block";
}

function backward() {
    document.getElementById("picture" + id).style.display = "none";

    if (id == 1) {
        id = 3;
    }
    else if (id == 2) {
        id = 1;
    } 
    else if (id == 3) {
        id = 2;
    } 

    document.getElementById("picture" + id).style.display = "block";    
}
