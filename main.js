function calculate(){
    area = document.getElementById("lblArea").value*document.getElementById("lblArea").value
    document.getElementById("lblArea").innerHTML = area;

    perimeter = document.getElementById("lblPerimeter").value*4
    document.getElementById("lblPerimeter").innerHTML = perimeter;
}
