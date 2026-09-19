const boton = document.getElementById("calcular");

boton.addEventListener("click", function() {
    let peso = document.getElementById ("peso") .value;
    let gravedad = document.getElementById("planeta") .value;

    let resultado = peso * gravedad;
    
    document.getElementById ("resultado").textContent = 
        "tu peso seria " + resultado.toFixed (2) + " kg ";


});

const datosPlanetas = {
    
    Mercurio:{
        tamaño: "4.879 km",
        composicion: "Roca",
        lunas: "0",
        distancia: "57.9 millones km",
        imagen: "",
    },

    Venus: {
        tamaño: "12.104 km",
        composicion: "Roca y minerales",
        lunas: "0",
        distancia: "108.2 millones km",
        imagen: "",
    },

    Marte:{
        tamaño: "6.779 km",
        composicion: "Roca y minerales",
        lunas: "2",
        distancia: "227.9 millones de km",
        imagen: "",

    },

     Tierra: {
        tamano: "12.742 km",
        composicion: "Roca y minerales",
        lunas: "1",
        distancia: "149.6 millones km",
        imagen: "",
    },

     Júpiter: {
        tamano: "139.820 km",
        composicion: "Gas",
        lunas: 95,
        distancia: "778.5 millones km",
        imagen: "",
    },

    Saturno: {
        tamaño: "116.460 km",
        composicion: "Gas",
        lunas: "146",
        distancia: "1.434 millones km",
        imagen: ""
    },

    Urano: {
        tamaño: "50.724 km",
        composicion: "Hielo y gas",
        lunas: "28",
        distancia: "2.871 millones km",
        imagen: ""
    },

    Neptuno: {
        tamaño: "49.244 km",
        composicion: "Hielo y gas",
        lunas: "14",
        distancia: "4.495 millones km",
        imagen: ""
  }
};

const selector = document.getElementById("planeta");

selector.addEventListener("change", function() {

    let resultado = selector.option[selector.selectedIndex].text;
    let datos = datosPlanetas[nombre];

    document.getElementById("resultado").textContent = nombre;
    document.getElementById("tamaño").textContent = datos.tamaño;
    document.getElementById("composicion").textContent = datos.composicion;
    document.getElementById("lunas").textContent = datos.lunas;
    document.getElementById("distancia").textContent = datos.distacia;
    document.getElementById("modelo").textContent = datos.imagen;
});    