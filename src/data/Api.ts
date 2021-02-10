import { setupCache } from 'axios-cache-adapter'
import axios from 'axios';
const cache = setupCache({
    maxAge: 15 * 60 * 1000
  });

  const api = axios.create({
    timeout:1000,
    baseURL: 'https://pokeapi.co/api/v2',
    adapter: cache.adapter
  });

  interface region{
    name: string,
    api: string
  }
  export class dexApi{
    dexes:region[] = [
      {name:'Kanto', api:'kanto'},
      {name:'Johto', api:'johto'},
      {name:'Hoenn', api:'hoenn'},
      {name:'Sinnoh', api:'original-sinnoh'},
      {name:'Unova', api:'original-unova'},
      {name:'Kalos: Central', api:'kalos-central'},
      {name:'Kalos: Coastal', api:'kalos-coastal'},
      {name:'Kalos: Mountain', api:'kalos-mountain'},
      {name:'Alola', api:'alola'},
      ];

    /*
    dexes:object = api.get('/pokedex')
    .then(response => {
      return(response.data.results);
    });
   */
//dex.api is a string
    getPokedex(pokedex:string){
      api.get('/generation/' + pokedex)
      .then(response =>{
        return (response.data.pokemon_entries);
      });
    }
      getPokemon(pokemon:string){
        api.get('/pokemon/' + pokemon)
        .then(response =>{
          return(response.data);
        });

      }

  }
