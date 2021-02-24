import { retornaArreglo } from "../../base/07-deses-arr"

describe('pruebas en 07 arr',()=>{

    test('Debe retornar un Arreglo ', () => {

        const [letras, numeros] = retornaArreglo()

        // expect(arr).toBe('ABC',123)
        expect(letras).toBe('ABC')
        expect(typeof letras).toBe('string')
        
        expect(numeros).toBe(123)
        expect(typeof numeros).toBe('number')
    })
    
})


