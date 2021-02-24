import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Prueba en 05 Funciones', ()=>{
    test('getUser debe retornar un Objeto', () => {
        const userTest = {
            uid: 'ABC123',
        username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest)
    })
    
test('getUsuarioActivo Debe retornar un objeto activo', () => {
    
    const nombre="juan"

    const active = getUsuarioActivo(nombre)
    const activeTest =({
        uid: 'ABC567',
        username: nombre
    })

    expect(activeTest).toEqual(active)
})




})