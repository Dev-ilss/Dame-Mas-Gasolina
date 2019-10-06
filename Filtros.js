var Margen;
var promedio=0;
var Maximo= Margen[0];
var Minimo = Margen[0];
var j, ValorMinimo,ValorMaximo,k;
       
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
    System.out.println("Total De Datos "+Margen.length);
    System.out.println("Valor Maximo De Error "+Maximo);
    System.out.println("Valor Minimo "+Minimo);
    System.out.println("Promeido De Gas Usado Por Año "+promedio);
    System.out.println("Valores Arriba Del Promedio "+ValorMaximo);
    System.out.println("Valores Debajo Del Promedio "+ValorMinimo);
}
