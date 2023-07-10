"use strict"

//variables


//array
let arrayDatos = [];

//eventos


//funciones


//coger banco de datos 


const cogerDatos = async () => {    
try {
    const llamada = await fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    .then(response => response.json())
    .then(response => {
        arrayDatos = response;
        console.log(arrayDatos)

    })
    } catch (error) {
        console.error(error);
    }
   
   return arrayDatos
}
  cogerDatos()
 
  const pintarDados = async () => {
    let noticias = document.querySelector('#noticias');
    
    try {
      let datos = await cogerDatos()
      console.log(datos)
    
      for (let i = 0; i < 6; i++) {
        let arraySorteo = datos[Math.floor(Math.random() * datos.length)];
        let div = document.createElement("DIV");
        div.classList.add("divNoticias");
        let h2 = document.createElement("H2");
        h2.textContent = arraySorteo.title;
        let p = document.createElement("P");
        p.textContent = arraySorteo.body;
        
        noticias.append(div);
        div.append(h2);
        div.append(p)
       
      }
    } catch (error) {
      console.error(error);
    }
  };


  pintarDados()



