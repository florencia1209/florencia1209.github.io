

function calcular (){


    let cantidad = parseInt(document.getElementById("cantidad").value);
    let descuento = document.getElementById("descuento").value;
    let total=0;
    
    switch (descuento){
    
    case "Estudiante":
    total= cantidad *  40;
    break;
    
    case  "Trainee":
    total= cantidad * 100;
    break;
    
    case "Junior":
    total=cantidad *  140;
    break; }
    
    
    document.getElementById("resultado").value=total;
    }
    
    