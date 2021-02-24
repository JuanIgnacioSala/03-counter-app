import { getImagen } from "../../base/11-async-await"


describe('pruebas async await', () =>{
    test('debe de retornar el url de la img', async () => {
        

        const url= await getImagen();
        expect(url.includes('https://')).toBe(true);


    })
    
})