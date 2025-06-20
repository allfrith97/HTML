
/*var mifuncion=function(valor){
    valor=valor*2;
    return valor;
}
var total=2;

for(var f=0;f<10;f++){
    total=mifuncion(total);
}

alert("El total es: "+ total);*/


/*Funciones anonimas
var mivalor=function(valor){
    valor=valor*2;
    return valor;
}(35);
alert("El valor es: "+mivalor);

*/

/*Comprobando si un valor es un numero o no
var mivalor=75;
if(isNaN(mivalor)){
    alert(mivalor+" no es un número");
}else{
    alert(mivalor+" es un número");
}*/

/*Convirtiendo una cadena de caracteres en un numero y multiplicarlo
var mivalor="30";
if(isNaN(mivalor)){
    alert(mivalor+" no es un numero");
}else{
    var numero=parseInt(mivalor);
    numero=numero*10;
    alert("El numero es: "+numero);
}*/

/*Codificando una cadena de caracteres para incluirnla en una URL
var nombre="Juan Perez";
var codificado=encodeURIComponent(nombre);
var miURL="https://www.google.com/inicio.html?nombre="+codificado;
alert(miURL);*/

 /*Objetos*/
 /* Accediendo a propiedades
 var miObjeto={
    nombre: "Juan",
    edad:30
 };
 var mensaje="Mi nombre es "+miObjeto.nombre+"\n";
 mensaje+="Tengo "+miObjeto["edad"]+ " años";
 alert(mensaje);
*/
 
/*Accediendo a propiedades usando variables
var nombrePropiedad="edad";
var miObjeto={
    nombre:30,
    edad:28
};
alert (miObjeto[nombrePropiedad]);
*/

/*Accediendo a propiedades con nombres no validos
var mivariable="nombre";
var miObjeto={
    nombre:"Alfredo",
    'mi edad':28
};

alert(miObjeto['mi edad']);
*/

/*Actualizando valores y agregando nuevas propiedades a un objeto
var miObjeto={
    nombre:"Alfredo",
    edad:28
};

miObjeto.nombre="José";
miObjeto.trabajo="Desarrollo Frontend";
alert(miObjeto.nombre+ " "+ miObjeto.edad+ " "+miObjeto.trabajo);
*/

/*Creando Objetos dentro de Objetos
var miObjeto={
    nombre:"Alfredo",
    edad:28, 
    motocicletas:{
        modelo:"Suzuki",
        fecha:2025
    }
};
alert(miObjeto.nombre+ " tiene una "+ miObjeto.motocicletas.modelo);
*/

/*Declarando y ejecutando metodos
var miObjeto={
    nombre:"aLFREDO",
    edad:28,
    mostrarDatos: function(){
        var mensaje="Nombre: "+miObjeto.nombre+"\n";
        mensaje+="Edad: "+miObjeto.edad;
        alert (mensaje);
    },
    cambiarNombre: function(nombreNuevo){
        miObjeto.nombre=nombreNuevo;
    }
};

miObjeto.mostrarDatos();
miObjeto.cambiarNombre("José");
miObjeto.mostrarDatos();
*/


/*Devolviendo valores desde metodos
var miObjeto={
    nombre:"Jose",
    edad:28,
    mostrarDatos: function(){
        var mensaje="Nombre: "+miObjeto.nombre+"\n";
        mensaje+="Edad: "+miObjeto.edad;
        alert (mensaje);
    },
    cambiarNombre: function(nombreNuevo){
        var nombreViejo=miObjeto.nombre;
        miObjeto.nombre=nombreNuevo;
        return nombreViejo;
    }
};
var anterior=miObjeto.cambiarNombre("Pedro");
alert("Mi nombre anterior era: "+ anterior);
*/


/*Referenciando las propiedades del objeto con la palabra this
var miObjeto={
    nombre:"Leticia",
    edad:28,
    mostrarDatos: function(){
        var mensaje="Nombre "+ this.nombre+"\n";
        mensaje=+"Edad"+ this.edad;
        alert (mensaje);
    },
    cambiarNombre: function(nombreNuevo){
        var nombreNuevo=this.nombre;
        this.nombre=nombreNuevo;
        return this.nombre;
    }
};

var nuevo=miObjeto.cambiarNombre("yairet");
alert("El nombre nuevo era: "+nuevo);

*/
/*Usando un constructor para crear un objeto
var constructor=function(){
    var obj={
        nombre:"Desarrollador Alfredo",
        edad:28,
        mostrarNombre: function(){
            alert(this.nombre);
        },
        cambiarNombre: function(nombreNuevo){
            this.nombre=nombreNuevo;
        }
    };
    return obj;
};
var empleado=constructor();
empleado.mostrarNombre();

*/
/*Enviando valores iniciales al constructor
var constructor=function(nombreInicial){
    var obj={
        nombre:nombreInicial,
        edad:28,
        mostrarNombre: function(){
            alert(this.nombre);
        },
        cambiarNombre: function(nombreNuevo){
            this.nombre=nombreNuevo;
        }
    };
    return obj;
};
var empleado=constructor("Ing. Alfredo");
empleado.mostrarNombre();
*/

/*Usando constructores para crear multiples objetos
var constructor=function(nombreInicial){
    var obj={
        nombre:nombreInicial,
        edad:28,
        mostrarNombre: function(){
            alert(this.nombre);
        },
        cambiarNombre: function(nombreNuevo){
            this.nombre=nombreNuevo;
        }
    };
    return obj;
};
var empleado1=constructor("Jose");
var empleado2=constructor("Rosario");
var empleado3=constructor("Gutemberg");
alert(empleado1.nombre+", "+ empleado2.nombre+", "+empleado3.nombre);

*/
/*Definiendo propiedades privadas
var constructor=function(){
    var nombre="Alfredo";
    var edad=28;
    var obj={
        mostrarNombre: function(){
            alert(nombre);
        },
        cambiarNombre: function(nombreNuevo){
            nombre=nombreNuevo;
        }
    };
    return obj;
};
var empleado1=constructor();
empleado1.mostrarNombre();
*/

/*OPERADOR NEW*/

/*Creando Objetos con el operador new
function miObjeto(){
    this.nombre="Juan";
    this.edad=30;
    this.mostrarnombre= function(){
        alert(this.nombre);
    };
    this.cambiarnombre=function(nombreNuevo){
        this.nombre=nombreNuevo;
    };
}

var empleado= new miObjeto();
empleado.mostrarnombre();
*/

/*Definiendo valores iniciales para el objeto
function miObjeto(nombreinicial,edadinicial){
    this.nombre=nombreinicial;
    this.edad=edadinicial;
    this.mostrarnombre= function(){
        alert(this.nombre);
    };
    this.cambiarnombre=function(nombreNuevo){
        this.nombre=nombreNuevo;
    };
}

var empleado= new miObjeto("Leticia",28);
empleado.mostrarnombre();

*/

/*Creando objetos a partir de otros objetos
var miObjeto={
    nombre:"Alfredo",
    edad:28,
     mostrarDatos: function(){
        alert (this.nombre);
    },
    cambiarNombre: function(nombreNuevo){
        this.nombre=nombreNuevo;
    }
};

var empleado=Object.create(miObjeto);
empleado.cambiarNombre('Roberto');
empleado.mostrarDatos();
miObjeto.mostrarDatos();*/


/*Agregando un nuevo metodo al proyecto
var miObjeto={
    nombre:"Juan",
    edad:"28",
    mostrarnombre: function(){
        alert(this.nombre);
    },
    cambairnombre: function(nombrenuevo){
        this.nombre=nombrenuevo;
    }
};
var empleado=Object.create(miObjeto);
empleado.edad=24;

miObjeto.mostraredad=function(){
    alert(this.edad);
}

empleado.mostraredad();*/


/*Probando la cadena de prototipos
var miObjeto={
    nombre:"Juan",
    edad:"28",
    mostrarnombre: function(){
        alert(this.nombre);
    },
    cambairnombre: function(nombrenuevo){
        this.nombre=nombrenuevo;
    }
};
var empleado1=Object.create(miObjeto);
var empleado2=Object.create(empleado1);
var empleado3=Object.create(empleado2);

empleado2.mostraredad=function(){
    alert(this.edad);
};

empleado3.edad=22;

empleado3.mostraredad();

/*Creando numeros con un constructor
var valor= new Number(5);
alert(valor);*/

/*Creando numeros a partir de una cadena de caracteres
var valor= new Number("10");
alert(valor+2);*/

/*Creando un arrar con un constructor
var lista=new Array(12,35,57,8);
alert(lista);
var lista=new Array(2);
alert(lista);*/

/*Contando la cantidad de caracteres de una cadena
var texto="Hola Mundo";
var mensaje="El texto tiene "+ texto.length+ " caracteres";
alert(mensaje);*/

/*Iterando sobre los caracteres de una cadena y removiendo espacios con el metodo trim()
var texto="Hola Mundo";
var mensaje="";
for(var y=0;y<texto.length;y++){
    mensaje+=texto[y]+"  ";
}
mensaje=mensaje.trim();
alert(mensaje);

*/

/*Procesando una cadena de caracteres
var texto="Hola Mundo";
var mensaje="";
var anterior="";

for(var y=0;y<texto.length;y++){
    if(mensaje!=""){
        anterior=texto[y-1];
        if(anterior!=" "&&texto[y]!=" "){
            mensaje+=".";
        }
    }
    mensaje+=texto[y];
}
alert(mensaje);*/

/*Convirtiendo los caracteres de una cadena en letras mayusculas
var texto="Hola Mundo";
var mensaje=texto.toUpperCase();
alert (mensaje);*/

/*Copiando un grupo de caracteres

var texto="Hola Mundo";
var mensaje=texto.substring(5,7);
alert (mensaje);*/

/*Obteniendo palabras de una cadena
var texto="Hola Mundo";
var mensaje=texto.split(" ")
alert (mensaje[0]+"/"+mensaje[1]);*/

/*Buscando texto al comienzo de la cadena
var texto="Hola Mundo";
if(texto.startsWith("m")){
    alert ("El texto comienza con 'Ho'");
}
*/

/*Buscando texto dentro de otro texto
var texto="Hola Mundo";
if(texto.includes("l")){
    alert ("El texto incluye la letra 'L'");
}*/

/*Encontrando la ubicacion de un texto dentro de una cadena de caracteres
var texto="Hola Mundo";
var indice=texto.indexOf("Mundo");
alert("La palabra comienza en el indice "+ indice);*/

/*Reemplazando textos en una cadena de caracteres
var texto="Hola Mundo";
var indice=texto.replace("Mundo","Planeta");
alert(indice);*/

/*Obteniendo la cantidad de valores en el array
var lista=[12,24,35,67];
alert(lista.length)*/

/*Iterando obre el array
var lista=[12,5,80,34];
var total=0;
for(var y=0;y<lista.length;y++){
    total+=lista[y];
}
alert("El total es: " + total);*/

/*Creando un array con los valores de otro array

var lista=[12,5,80,34];
var listanueva=lista.slice(1,3);
alert(listanueva);*/

/*Filtrando los valores de un array
var lista=[12,5,80,34];
var listanueva=lista.filter (function(){
    if (valor<=50){
        return true;
    }else{
        return false;
    }
});
alert(listanueva);*/

/*Devolviendo una condicion para filtrar los elementos
var lista=[12,5,80,20,100,34];
var listanueva=lista.filter (function(valor){
    return valor<=50;
});
alert(listanueva);*/

/*Evaluando los valores de un array
var lista=[120,500,800,200,1000,340];
var valido=lista.every(function(valor){
    return valor<=100;
});
if(valido){
    alert("Los valores no son mayores que 100");
}else{
    alert("Los valores son mas de 100 unidades");
}*/
/*Creando una cadena de caracteres con los valores de un array
var lista=[12,5,80,34];
var mensaje=lista.join("*");
alert(mensaje);*/

/*Obteniendo el indice de un valor en el array

var lista=[12,5,80,34,5];
var posicion=lista.indexOf(5);
alert("El valor " +lista[posicion]+" se encuenra en el indice: "+ posicion);*/

/*Buscando multiples valores en un array
var lista=[12,5,80,34,5,5];
var buscar=5;
var ultimo=0;
var contador=0;
while(ultimo>=0){
    var ultimo=lista.indexOf(5,ultimo);
    if(ultimo!=-1){
        ultimo++;
        contador++;
    }
}
alert("Hay un total de " +contador+" numeros: "+ buscar);

*/

/*Agregando multiples valores a un array 
var lista=[12,5,80,34];
lista.push(100,200,300,400);
alert(lista);*/


/*Concatenando 2 arrays

var lista=[12,5,80,34];
var lista2=[10,20,30];
var listanueva=lista.concat(lista2);
alert(listanueva);
*/

/*Eliminando valores de un array
var lista=[12,5,80,34];
lista.shift();
alert(lista);*/

/*Removiendo valores de un valor
var lista=[12,5,80,34];
var removidos=lista.splice(0,4);
alert("Valores restantes: "+lista);
alert("Valores removidos: "+removidos);*/

/*Agregando valores a un array en una posicion especifica
var lista=[12,5,80,34];
lista.splice(1,0,24,25,26);
alert(lista);*/

/*Invirtiendo el orden de los valores de un array
var lista=[12,5,80,34];
lista.reverse();
alert(lista);*/

/*Ordenando los valores en orden alfabetico
var lista=[12,5,80,34];
lista.sort();
alert(lista);*/

/*Ordenando los valores en orden numeric0
var lista=[13,12,5,80,34];
lista.sort(function(valor1,valor2){
    return valor1-valor2;
});
alert(lista);*/

/*Procesando los valores y almacenando los resultados
var lista=[13,12,5,80,34];
var listanueva=lista.map(function(valor){
    return valor*2;
});
alert(listanueva);*/

/*Creando un objeto date
var fecha=new Date();
alert(fecha);*/

/*Creando un objeto date a partir de un texto
var fecha=new Date("March 03 2023");
alert(fecha);
*/

/*Creando ub objeto Date a partir de los componentes de una fecha
var fecha=new Date(2023,2,3, 8,20,35,0);
alert(fecha);*/

/*Leyendo los componentes de una fecha
var hoy= new Date();
var ano=hoy.getFullYear();
alert("El año es "+ ano);*/

/*Leyendo el mes
var hoy=new Date();
var ano=hoy.getFullYear();
var mes=hoy.getMonth()+1;
var dia=hoy.getDate();

alert(ano+"-"+mes+"-"+dia);
*/

/*Incrementando una fecha
var hoy=new Date();
alert(hoy);
hoy.setDate(hoy.getDate()+15);
alert(hoy);*/

/*Calculando un intervalo en segundos
var hoy=new Date(2023,2,3);
var futuro=new Date(2025,5,20);

var intervalo=futuro-hoy;
alert(intervalo);
*/

/*Calculando un intervalo en dias
var hoy=new Date(2023,2,3);
var futuro=new Date(2025,5,20);
var intervalo=futuro-hoy;
var dias=intervalo/(24*60*60*1000);
alert("Han pasado: "+ dias+" dias");
*/


/*Comparando dos fechas
var hoy=new Date(2023,2,3,10,35);
var futuro=new Date(2023,2,3,12,35);
hoy.setHours(0,0,0);
futuro.setHours(0,0,0);
if(futuro.getTime()==hoy.getTime()){
    alert("Las fechas son iguales")
}else{
    alert("Las fechas son diferentes");
}*/

/*Ejecutando Operaciones aritmeticas con el objeto MATH
var cuadrado=Math.sqrt(4);
var elevado=Math.pow(2,2);
var maximo=Math.max(cuadrado,elevado);
alert("El valor mas grande es "+maximo);
*/

/*Obteniendo un valor al azar
var numeroazar=Math.random()*(11-1)+1;
var valor=Math.floor(numeroazar);
alert ("El numero es: "+valor);
*/
