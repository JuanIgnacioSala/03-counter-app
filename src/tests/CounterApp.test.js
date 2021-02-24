import { getByText, render } from "@testing-library/react"
import React from 'react';
import {shallow} from 'enzyme'
import CounterApp from "../CounterApp";

describe('Pruebas en CounterApp',()=>{

    let wrapper = shallow(<CounterApp/>);

    beforeEach(()=>{

        wrapper = shallow(<CounterApp/>);
    })

    test('Debe mostrar <CounterApp/> correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Mostrar valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={100}/>)
        const valorContador = wrapper.find('h2').text();
        expect(valorContador).toBe('100');
    })
    
    test('incrementar con el boton +1 ', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text();
        expect(counterText).toBe('11')
    })
    
    test('Restar con el boton -1 ', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text();
        expect(counterText).toBe('9')
    })
    
    test('Reset counter ', () => {

        const wrapper = shallow(<CounterApp value={100}/>)
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text();
       expect(counterText).toBe('100');
    })
     
})