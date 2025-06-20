
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

/*Creando objetos a partir de otros objetos*/
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
miObjeto.mostrarDatos();