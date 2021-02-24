
describe('Pruebas en Demo', ()=>{


    test('string iguales', () => {
        
        
        //1- inicializacion
        const mensaje = 'hola mundo';
        
        //2- estimulo
        const mensaje2 = `hola mundo`;
        
        //3- comportamiento
        expect( mensaje).toBe(mensaje2);
        
    })
    
})