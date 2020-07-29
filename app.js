//PRUEBA TECNICA 
//ANDRES DUVAN CHAVES MOSQUERA

// Dirigido a TALENTA365

//                                                      IMPORTANTE

//Para ejecutar este programa bastara con situarse en la raiz de el proyecto y ejecutar node app.js

//Api de la cual vamos a consumir la informacion
const url = 'http://swapi.dev/api/films/';

//Definimos fetch, la cual por medio de promesas nos servira para consumir dicha api
const fetch = require('node-fetch');

fetch(url)
    .then(response => response.json())
    .then(data => {
        //Capturamos el arreglo que contiene las peliculas
        movies = data.results

        //Vamos a recorrer todas las peliculas para obtener la informacion requerida por la estructura
        for (var i = 0; i < movies.length; i++) {
            var current_movie = movies[i];
            console.log("Movie:  " + current_movie.title)

            //Vamos a recorrer los planetas para obtener la informacion requerida
            for (var j = 0; j < current_movie.planets.length; j++) {
                fetch(current_movie.planets[j])
                    .then(response => response.json())
                    .then(data => {
                        //Estructura para las peliculas
                        planets_movie = {
                            name: data.name,
                            terrain: data.terrain,
                            gravity: data.gravity,
                            diameter: data.diameter,
                            population: data.population
                        }
                        console.log(planets_movie)
                    })
                    .then(err => console.log(err))
            }

            //Vamos a recorrer los personajes para obtener la informacion requerida
            for (var l = 0; l < current_movie.characters.length; l++) {
                fetch(current_movie.characters[l])
                    .then(response => response.json())
                    .then(data => {

                        // Definimos la estructura para los personajes
                        characters_movie = {
                            name: data.name,
                            gender: data.gender,
                            hair_color: data.hair_color,
                            skin_color: data.skin_color,
                            eye_color: data.eye_color,
                            height: data.height
                        }
                        console.log(characters_movie)
                    })
                    .then(err => console.log(err))
            }

            //Vamos a recorrer las naves espaciales para obtener la informacion requerida
            for (var k = 0; k < current_movie.starships.length; k++) {
                fetch(current_movie.starships[k])
                    .then(response => response.json())
                    .then(data => {

                        //Definimos la estructura para las naves espaciales
                        starships_movie = {
                            name: data.name,
                            model: data.model,
                            manufacturer: data.manufacturer,
                            passengers: data.passengers
                        }
                        console.log(starships_movie)
                    })
                    .then(err => console.log(err))
            }
        }
    }).catch(err => console.log(err))