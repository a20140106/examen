alert("Bienvenido a la pagina de JavaScript");
var nom = prompt("Ingresa tu Nombre");

var res1 = prompt("1. ¿En que departamento se encuentra el lago titicaca?\n A: Tacna\n B: Puno\n C: Cusco");

if(res1 = "B"){
res1 = 1;
}else{
    res1 = 0;
}

var res2 = prompt("2. ¿Desde qué parte del Perú se pueden avistar ballenas jorobadas?\n A: Lima e Ica\n B: Arequipa y Tacna\n C: Piura y Tumbes");

if(res1 = "C"){
    res1 = 1;
    }else{
        res1 = 0;
    }
    
var res3 = prompt("3. Plato típico de la Selva peruana\n A: Tacacho con cecina\n B: Arroz con pollo\n C: Lomo saltado");

if(res1 = "A"){
    res1 = 1;
    }else{
        res1 = 0;
        
    }
document.write("<h1>Cuestionario</h1>");
document.write("<h2>Estos fueron tus resultados</h2>");
var total = res1 + res2 + res3;
document.write("Obtuviste " + total + " % <br>");
if(total<=3){
    document.write("Vuelve a intentarlo " +  nom );
}else{
    document.write("Lo has hecho bien "  +  nom );

}