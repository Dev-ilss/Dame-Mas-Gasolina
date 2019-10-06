var Margen;
var promedio=0;
var Maximo= Margen[0];
var Minimo = Margen[0];
var j, ValorMinimo,ValorMaximo,k;
       
//Ingreso De Datos funcion faltante

Busqueda();
    
function  Busqueda(){
        
        for (var i = 0; i < Margen.length; i++) {
            
            j=0;
            promedio += Margen[i]; 
            for (var j = 0; j < Margen.length; j++) {
              if(Margen[i]>Maximo){
                Maximo=Margen[i]; // Numero Maximo
            }
            if(Minimo>Margen[i]){
                Minimo=Margen[i]; // Numero Minimo
            }
            }
        }
        promedio();
}
function promedio(){

    for (var i = 0; i < Margen.length; i++) 
    {
            if(Margen[i]<(promedio-280))
            {
                ValorMinimo++;
            }
            if(Margen[i]>(promedio+280)){ //280 es el 10% De Tolerancia del promedio gastado en Gas 2805.89
                ValorMaximo++;
            }
        
    }
    Imprimir();
}

function Imprimir(){
    console.log("Total De Datos "+Margen.length);
    console.log("Valor Maximo De Error "+Maximo);
    console.log("Valor Minimo "+Minimo);
    console.log("Promeido De Gas Usado Por Año "+promedio);
    console.log("Valores Arriba Del Promedio "+ValorMaximo);
    console.log("Valores Debajo Del Promedio "+ValorMinimo);
}
