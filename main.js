let checkboxes = document.querySelectorAll(".checkbox");
let count = 0;

document.getElementById("checkbox_all").onclick = function() {
    count = 0;
    // Para contar las selecciones de todos los checkbox con un solo click
    for (let checkbox of checkboxes) {
        checkbox.checked = this.checked;
        
        if (checkbox.checked == true) {
            count++;
            document.getElementById("total_selected").innerHTML = count;
        } else {
            count = 0;
            document.getElementById("total_selected").innerHTML = count;
        }
    }
}

// para contar selecciones totales de forma individual.
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', function() {
        if (this.checked == true) {
            count++;
        } else {
            count--;
        }

        document.getElementById("total_selected").innerHTML = count;
    });
}