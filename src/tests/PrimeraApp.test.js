import { getByText, render } from "@testing-library/react"
import PrimeraApp from "../PrimeraApp"
import React from 'react';
import {shallow} from 'enzyme'

describe('Pruebas en PrimeraApp',()=>{
    // test('Debe mostrar el mensaje "Hola, saludo"', () => {
    //     const saludo = "Hola, saludo";
    //     const {getByText} = render(<PrimeraApp saludo={saludo}/>);
    //     expect(getByText(saludo)).toBeInTheDocument();


    // })
    test('Debe mostrar <primerapp/> correctamente ', () => {
        
        const saludo = 'Hola, saludo'
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>)

        expect(wrapper).toMatchSnapshot();

    })

    test('Mostrar subtitulo', () => {

        const saludo = 'Hola, saludo'
        const subtitulo = "Subtitulo aca abajo";
        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo}/>)
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);

    })
    
    
})