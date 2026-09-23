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
        modelo: "./imagenes/mercurio_v1.1.glb",
        periodo: "88 dias terrestres"
    },

    Venus: {
        tamaño: "12.104 km",
        composicion: "Roca y minerales",
        lunas: "0",
        distancia: "108.2 millones km",
        modelo: "./imagenes/venus_v1.1.glb",
        periodo: "225 dias terrestres"
    },

    Marte:{
        tamaño: "6.779 km",
        composicion: "Roca y minerales",
        lunas: "2",
        distancia: "227.9 millones de km",
        modelo: "./imagenes/marte_v1.1.glb",
        periodo: "687 dias terrestres"

    },

     Tierra: {
        tamano: "12.742 km",
        composicion: "Roca y minerales",
        lunas: "1",
        distancia: "149.6 millones km",
        modelo: "./imagenes/tierra_v1.1.glb",
        periodo: " 365 dias "
    },

     Júpiter: {
        tamano: "139.820 km",
        composicion: "Gas",
        lunas: 95,
        distancia: "778.5 millones km",
        modelo: "./imagenes/jupiter_v1.1.glb",
        periodo: " 11 - 12 años terrestres"
    },

    Saturno: {
        tamaño: "116.460 km",
        composicion: "Gas",
        lunas: "146",
        distancia: "1.434 millones km",
        modelo: "/imagenes/saturno_v1.1.glb",
        periodo: "29.5 años terrestres"
    },

    Urano: {
        tamaño: "50.724 km",
        composicion: "Hielo y gas",
        lunas: "28",
        distancia: "2.871 millones km",
        modelo: "./imagenes/urano.glb",
        periodo: "84 añoss terrestres"
    },

    Neptuno: {
        tamaño: "49.244 km",
        composicion: "Hielo y gas",
        lunas: "14",
        distancia: "4.495 millones km",
        modelo: "./imagenes/neptuno.glb",
        periodo: "165 años terrestres"
  }
};

const selector = document.getElementById("planeta");

// selector.addEventListener("change", function() {

//     let resultado = selector.options[selector.selectedIndex].text;
//     let datos = datosPlanetas[nombre];

//     document.getElementById("resultado").textContent = nombre;
//     document.getElementById("tamaño").textContent = datos.tamaño;
//     document.getElementById("composicion").textContent = datos.composicion;
//     document.getElementById("lunas").textContent = datos.lunas;
//     document.getElementById("distancia").textContent = datos.distacia;
//     document.getElementById("modelo").textContent = datos.imagen;
// });    
selector.addEventListener("change", function () {
    const texto = selector.options[selector.selectedIndex].text;
    const nombre = texto.split("—")[0].trim();
    const datos = datosPlanetas[nombre];

    document.getElementById("tamaño").textContent =
        datos.tamaño ?? datos.tamano;
    document.getElementById("composicion").textContent = datos.composicion;
    document.getElementById("lunas").textContent = datos.lunas;
    document.getElementById("distancia_sol").textContent = datos.distancia;
    document.getElementById("periodo_translacion").textContent = datos.periodo;
    document.getElementById("modelo").src = datos.modelo;
});