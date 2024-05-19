//Crear objeto
let persona = {
    nombre: "Diego",
    edad: 19,
    profesion: "Programador"
};

//Mostrar objeto
console.log("----------------------------Mi Objeto----------------------------")
console.log(persona.nombre);
console.log(persona.edad); 
console.log(persona.profesion);


//Añadimos objeto
persona.direccion = {
    calle: "Calle Rosas 123",
    ciudad: "Lima",
    pais: "Perú"
};
console.log("----------------------------Añadimos un Objeto----------------------------")
console.log(persona.direccion.calle);
console.log(persona.direccion.ciudad);
console.log(persona.direccion.pais);


//Agregar y eliminar propiedades del objeto.
console.log("----------------------------Agregamos y eliminamos Objeto----------------------------")
persona.telefono = "123 456 789";
console.log("Telefono",persona.telefono); 

delete persona.profesion;
console.log("Telefono eliminado: ",persona.profesion);

//Destructuracion para acceder a propiedades.
let { nombre, edad, direccion: { ciudad } } = persona;
console.log(nombre); 
console.log(edad);
console.log(ciudad); 

//Congelamos el objeto para evitar cambios.
console.log("----------------------------Congelar para evitar cambios----------------------------")
Object.freeze(persona);
persona.edad = 31;
console.log("Edad sin cambiar",persona.edad);

//Sellamos el objeto para permitir modificaciones
console.log("----------------------------Sellamos otro objeto----------------------------")
let persona2 = {
    nombre: "Juan",
    edad: 20
};
Object.seal(persona2);
console.log("Edad sin modificar:", persona2.edad);
persona2.edad = 26;
console.log("Modificacion",persona2.edad);

persona2.profesion = "Ingeniero"; 
delete persona2.nombre; 

console.log(persona2); 


//Unimos dos objetos usando Object.assign y el operador spread.
console.log("----------------------------Unir dos objetos----------------------------");
let objeto_adicional = {
    hobbies: ["juegos", "musica"],
    estadoCivil: "Soltero"
};
console.log("Usando Object.assign para combinar objetos")
let personaCombinada1 = Object.assign({}, persona, objeto_adicional);
console.log(personaCombinada1);

console.log("Usando el operador spread (...) para combinar objetos")
let personaCombinada2 = { ...persona, ...objeto_adicional };
console.log(personaCombinada2);


//Usamos this dentro de un metodo del objeto.
console.log("----------------------------This dentro de un metodo del objeto----------------------------");
let persona3 = {
    nombre: "Carlos",
    ciudad: "Arequipa",
    saludar: function() {
        return `Hola, yo soy: ${this.nombre} y vivo en ${this.ciudad}`;
    }
};
console.log(persona3.saludar());

//Recorremos el objeto usando Object.Keys, Object.Values y Object.Entries.
console.log("----------------------------Recorremos el objeto----------------------------");
let persona4 = {
    nombre: "Maria",
    edad: 18,
    profesion: "Diseñadora"
};

console.log("------Usando Object.Keys------");
Object.keys(persona4).forEach(key => {
    console.log(key); 
});


console.log("------Usando Object.Values------");
Object.values(persona4).forEach(value => {
    console.log(value); 
});

console.log("------Usando Object.Entries------");
Object.entries(persona4).forEach(([key, value]) => {
    console.log(`${key}: ${value}`); 
});

//Funciones con parametros y con devolucion
console.log("----------------------------Funciones con Parametros y devolucion----------------------------");
function crearPersona(nombre, edad) {
    return {
        nombre,
        edad,
        saludar: function() {
            return `Creaste un objeto, mi nombre es ${this.nombre} y mi edad es ${this.edad}`;
        }
    };
}
let nuevaPersona = crearPersona("Roberto", 50);
console.log(nuevaPersona.saludar()); 
