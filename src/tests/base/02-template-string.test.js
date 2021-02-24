import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02", () => {
    test("prueba getSaludo ", () => {
      const nombre = "Juan";
    
      const saludo = getSaludo(nombre );
    
      expect(saludo).toBe("Hola " + nombre);
    });
    
    test("prueba getSaludo sin argumentos ", () => {
      
      const saludo = getSaludo();
      expect(saludo).toBe("Hola Carlos");
    });
});
