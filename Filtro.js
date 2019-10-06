var MargenGas;
var promedio=0;
var Maximo = MargenGas[0];
var Minimo = MargenGas[0];
var j, ValorMinimo,ValorMaximo,k;

var d = new Date();
var day = d.getDay();

    BusquedaTotal();
            
function  BusquedaTotal(){
        
        for (var i = 0; i < MargenGas.length; i++) {
            
            j=0;
            promedio += MargenGas[i]; 
            for (var j = 0; j < MargenGas.length; j++) {
              if(MargenGas[i]>Maximo){
                Maximo=MargenGas[i]; // Numero Maximo
            }
            if(Minimo>MargenGas[i]){
                Minimo=MargenGas[i]; // Numero Minimo
            }
            }
        }

}
function promedio(){

    for (var i = 0; i < MargenGas.length; i++) 
    {
            if(MargenGas[i]<(promedio-280))
            {
                ValorMinimo++;
            }
            if(MargenGas[i]>(promedio+280)){ //280 es el 10% De Tolerancia del promedio gastado en Gas 2805.89
                ValorMaximo++;
            }
        
    }
    Imprimir();
}

function Imprimir(){
    Console.log("Total De Datos "+MargenGas.length+"\n"+"Valor Maximo De Error "+Maximo+" Valor Minimo "+Minimo);
    Console.log("Promeido De Gas Usado Por Año "+promedio);
    Console.log("Valores Arriba Del Promedio "+ValorMaximo);
    Console.log("Valores Debajo Del Promedio "+ValorMinimo);
}
