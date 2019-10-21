import {films} from "./assets/films.js"
import {people} from "./assets/people.js"
import {planets} from "./assets/planets.js"

console.log('I am javascipt running in your page')

let sectionArea = document.querySelector('section')

films.forEach(function(film) {
    let filmDiv = document.createElement('div')
    let filmTitle = document.createElement('h1')
    let filmCrawl = document.createElement('p')

    filmTitle.textContent = film.title
    filmCrawl.textContent = film.opening_crawl

    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmCrawl)

    sectionArea.appendChild(filmDiv)
  });

  let mainArea = document.querySelector('main')
people.forEach((person) => {
    let personDiv = document.createElement('div')
    let name = document.createElement('h1')
    let gender = document.createElement('p')
    let pic = document.createElement('img')

   let charNum = getCharNumber(person.url)

    name.textContent = person.name
    gender.textContent = person.gender
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)

    mainArea.appendChild(personDiv)
} );

function getCharNumber(charURL) {
  let end = charURL.lastIndexOf('/')
  let charID = charURL.substring(end -2, end)
  if (charID.indexOf('/') !== -1) {
  return charID.slice(1,2)
  } else {
    return charID
  }
}

const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')

console.log(maleCharacters)
console.log(femaleCharacters)

let areaArea = document.querySelector('area')

planets.forEach(function(planet) {
    let planetDiv = document.createElement('div')
    let name = document.createElement('h1')
    let population = document.createElement('p')
    let pic = document.createElement('img')

    name.textContent = planet.name
    population.textContent = planet.population
    pic.src = `https://swapi.co/api/planets`

    planetDiv.appendChild(name)
    planetDiv.appendChild(population)
    planetDiv.appendChild(pic)

    areaArea.appendChild(planetDiv)
  });