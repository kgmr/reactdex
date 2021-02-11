import { setupCache } from 'axios-cache-adapter'
import axios from 'axios';
const cache = setupCache({
    maxAge: 15 * 60 * 1000
  });

  const api = axios.create({
    timeout:15000,
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
      {name:'Johto', api:'original-johto'},
      {name:'Hoenn', api:'hoenn'},
      {name:'Sinnoh', api:'original-sinnoh'},
      {name:'Unova', api:'original-unova'},
      {name:'Kalos: Central', api:'kalos-central'},
      {name:'Kalos: Coastal', api:'kalos-coastal'},
      {name:'Kalos: Mountain', api:'kalos-mountain'},
      {name:'Alola', api:'original-alola'},
      ];

      readonly entries:string = 'pokemon_entries';

    getPokedex(pokedex:string): any{
      return api.get('/pokedex/' + pokedex);
      }
      getPokemon(pokemon:string): any{
        return api.get('/pokemon/' + pokemon);
        }


    }
    /*
        const test = new dexApi();
        test.getPokedex('kanto').then(function(response:any){
          console.log(response.data[test.entries]);
        });
        */

