import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes',()=>{


    test('Debe retornar un heroe por ID', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData)

    })
    test('Debe retornar un undefined por ID inexistente', () => {
        
        const id = 10;
        const heroe = getHeroeById(id);
        
        expect(heroe).toBe(undefined)

    })
    test('ARREGLO CON LOS HEROES DE DC', () => {
        
        const owner = 'DC';
        const arrHeroe = getHeroesByOwner(owner);
        const heroeArreglo = heroes.filter(h => h.owner === owner);

        expect(arrHeroe).toEqual(heroeArreglo)
      

    })
    test('ARREGLO CON HEROES DE MARVEL', () => {
        
        const owner = 'Marvel';
        const arrHeroe = getHeroesByOwner(owner);
        

        expect(arrHeroe.length).toBe(2)
        

    })
    


})